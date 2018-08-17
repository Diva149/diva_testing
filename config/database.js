'use strict';

function getMongoConnectionString() {
    console.log("Environment used:- ", process.env.NODE_ENV);
    console.log("Divya");
    switch(process.env.NODE_ENV) {
        case 'local':
            return 'mongodb://localhost:27017/footer_navigation';
    }
}

exports.mongoConnectionString = getMongoConnectionString();