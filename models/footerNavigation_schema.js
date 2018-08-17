const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    const footerNavigation_schema = new Schema({
        name:{
            type: String,
            required: true
        },
        navigation_url: {
            type: String
        },
        parent: {
            type: Schema.Types.String,
            ref: 'navigation'
        },
        nav_rel_type: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    });

    module.exports = mongoose.model('footerv1.0',footerNavigation_schema);