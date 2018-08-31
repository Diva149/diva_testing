// 'use strict';

// const navigationMenu = require('../models/footerNavigation_schema.js');

// module.exports = {
//     createMenu(req, res) {
//         // Document to be added to the database
//         const createMenuBody = new navigationMenu({'name': req.body.name,'navigation_url':req.body.navigation_url,'parent':req.body.parent,'nav_rel_type':req.body.nav_rel_type,'title': req.body.title,'position': req.body.position,'level': req.body.level});
//         console.log('MenuBody', createMenuBody);
//         // check if the data received is null or not
//         if(!createMenuBody.name ||!createMenuBody.title) {
//             res.writeHead(400, {
//                 'Content-Type':'text/plain'
//             });
//             res.end('Values of Name & Url cannot be empty or null');
//         } else {
//             // save the data received
//             createMenuBody.save(function(err, data) {
//                 if(err) {
//                     console.log('Error in saving the data', err);
//                 }
//                 console.log('Document successfully saved into collection', data);
//                 res.send(data);
//             });
//         }
//     },
//     updateMenu(req, res) {
//         const updateMenuBody = req.body;
//         console.log("Updating an existing Menu", updateMenuBody);
//         // check if the parameters of the data to be updated is null
//         if(!updateMenuBody.name ||!updateMenuBody.title) {
//             res.writeHead(400, {
//                 'Content-Type':'text/plain'
//             });
//             res.end("The fields can't be blank");
//         } else {
//             // find the data by Id & update
//             navigationMenu.findByIdAndUpdate(req.params.menuId, {
//                 name: updateMenuBody.name,
//                 navigation_url: updateMenuBody.navigation_url,
//                 parent: updateMenuBody.parent,
//                 title: updateMenuBody.title,
//                 position: updateMenuBody.position,
//                 level: updateMenuBody.level
//             }, {new: true}).then(menu => {
//                 if(!menu) {
//                     res.writeHead(404, {
//                         'Content-Type':'text/plain'
//                     });
//                     res.end("Document with the ID "+req.params.menuId+" not found");
//                 }
//                 console.log('Menu For updating', menu);
//                 res.send(menu);
//             }).catch(err => {
//                 if(err.kind === 'ObjectId') {
//                     res.writeHead(404, {
//                         'Content-Type':'text/plain'
//                     });
//                     res.end('Menu with the id '+req.params.menuId+ ' not found!');
//                 }
//                 res.writeHead(500, {
//                     'Content-Type':'text/plain'
//                 });
//                 res.end('Error updating the Menu with the Id '+req.params.menuId);
//             });
//         }
//     },
//     deleteMenu(req, res) {
//         // delete the document by the mentioned Id
//         navigationMenu.findByIdAndRemove(req.params.menuId).then(menu => {
//             if(!menu) {
//                 res.status(404).send({
//                     message: "Menu with the id "+req.params.menuId+" deleted or not found!"
//                 });
//             }
//             res.send({
//                 message: "Menu deleted successfully!!!!"
//             });
//         }).catch(err => {
//             if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//                 return res.status(404).send({message: 'Menu Id '+req.params.menuId+' not found!'});
//             }
//             res.status(500).send({message: 'Error deleting the menu'});
//         })
//     }
// }



'use strict';

const navigationMenu = require('../models/footerNavigation_schema.js'),
express = require('express'),
router = express.Router();


<<<<<<< HEAD
module.exports = {
    createMenu(req, res) {
        // Document to be added to the database
        const createMenuBody = new navigationMenu(req.body);
=======
    router.post('/createMenu', (req, res) => {
        const createMenuBody = new navigationMenu({'name': req.body.name,'navigation_url':req.body.navigation_url,'parent':req.body.parent,'navigation_type':req.body.navigation_type,'instance':req.body.instance,'nav_rel_type':req.body.nav_rel_type,'menu_order':req.body.menu_order});
>>>>>>> 95225de5e8120cb5f39ed3f964b3ad8a17fe455c
        console.log('MenuBody', createMenuBody);
        // check if the data received is null or not
        if(!createMenuBody.name ||!createMenuBody.navigation_type ||!createMenuBody.instance) {
            res.writeHead(400, {
                'Content-Type':'text/plain'
            });
            res.end('Values of Name & Url cannot be empty or null');
        } else {
            // save the data received
            createMenuBody.save(function(err, data) {
                if(err) {
                    console.log('Error in saving the data', err);
                }
                console.log('Document successfully saved into collection', data);
                res.send(data);
            });
        }
    });
    
    router.put('/updateMenu/:menuId', (req, res) => {
        const updateMenuBody = req.body;
        console.log("Updating an existing Menu", updateMenuBody);
        // check if the parameters of the data to be updated is null
        if(!updateMenuBody.name ||!updateMenuBody.navigation_type ||!updateMenuBody.instance) {
            res.writeHead(400, {
                'Content-Type':'text/plain'
            });
            res.end("The fields can't be blank");
        } else {
            // find the data by Id & update
            navigationMenu.findByIdAndUpdate(req.params.menuId, {
                name: updateMenuBody.name,
                navigation_url: updateMenuBody.navigation_url,
                parent: updateMenuBody.parent,
<<<<<<< HEAD
                title: updateMenuBody.title,
                position: updateMenuBody.position,
                level: updateMenuBody.level,
                submenu: updateMenuBody.submenu
=======
                navigation_type: updateMenuBody.navigation_type,
                instance: updateMenuBody.instance
>>>>>>> 95225de5e8120cb5f39ed3f964b3ad8a17fe455c
            }, {new: true}).then(menu => {
                if(!menu) {
                    res.writeHead(404, {
                        'Content-Type':'text/plain'
                    });
                    res.end("Document with the ID "+req.params.menuId+" not found");
                }
                console.log('Menu For updating', menu);
                res.send(menu);
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    res.writeHead(404, {
                        'Content-Type':'text/plain'
                    });
                    res.end('Menu with the id '+req.params.menuId+ ' not found!');
                }
                res.writeHead(500, {
                    'Content-Type':'text/plain'
                });
                res.end('Error updating the Menu with the Id '+req.params.menuId);
            });
        }
    });
    
    router.delete('/deleteMenu/:menuId', (req, res) => {
         // delete the document by the mentioned Id
         navigationMenu.findByIdAndRemove(req.params.menuId).then(menu => {
            if(!menu) {
                res.status(404).send({
                    message: "Menu with the id "+req.params.menuId+" deleted or not found!"
                });
            }
            res.send({
                message: "Menu deleted successfully!!!!"
            });
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({message: 'Menu Id '+req.params.menuId+' not found!'});
            }
            res.status(500).send({message: 'Error deleting the menu'});
        })
    });
    
    module.exports = router;