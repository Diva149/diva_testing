const navigationFooterController = require('./controllers/navigationFooterController'),
    homepageFooterController = require('./controllers/homepageFooterController.js'),
    path = require('path');

 exports.init = (router) => {

    router.route('/createMenu').post(navigationFooterController.createMenu);
    router.route('/updateMenu/:menuId').put(navigationFooterController.updateMenu);
    router.route('/deleteMenu/:menuId').delete(navigationFooterController.deleteMenu);
        
    // endpoint calling from HTML/index.html file to render the HTML to front end
    // router.route('/primaryFooter').get(navigationFooterController.primaryFooter);
    
    // endpoint calling from frontend
    router.route('/foot').get(homepageFooterController.foot);
        
    router.route('/api').get((req, res) => {
        res.sendFile(path.join(`${__dirname}/footer_test/footer_ui.html`));
    });
 }