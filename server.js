const express = require('express'),
    mongoose = require('mongoose'),
    routes = require(process.cwd() + '/routes.js'),
    dbConfig = require(process.cwd() + '/config/database.js'),
    envConfig = require(process.cwd() + '/config/environment.js'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

mongoose.connect(dbConfig.mongoConnectionString, (err, res) => {
    if(err) {
        console.log("Error in Connecting MongoDB!!", err);
    }
        console.log("Successfully established connection with MongoDB!!!!");
});

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const footUI = require('./routes')
const crudController = require('./controllers/navigationFooterController');
const footerRoute = require('./controllers/homepageFooterController');
// Initialising the routes
// const router = express.Router();
// routes.init(router);

// CORS Request
app.all('*', (req, res, next) => {
    if(!req.get('Origin')) return next();
    // use '*' here to access any origin
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'PUT');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

    if('OPTIONS' == req.method) return res.send(200);
    next();
});

app.use('/', footUI);
app.use('/api', crudController);
app.use('/api', footerRoute);

app.listen(envConfig.port);
console.log(`Server started & Listening on PORT ${envConfig.port}`);
console.log('DB String:- ', dbConfig.mongoConnectionString);