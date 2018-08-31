'use strict';

const navigationMenu = require('../models/footerNavigation_schema'),
    _ = require('lodash');

const test=require('../utils/html');

console.log('test',test());

    module.exports = {
        map:function(data) {
            var dataMap = data.reduce(function(map, node) {
                map[node.name] = node;
                return map;
            }, {});
    
            // create the tree array
            var tree = [];
            data.forEach(function(node) {
                // add to parent
                var parent = dataMap[node.parent];
                if (parent) {
                    // create child array if it doesn't exist
                    (parent.submenu).push(node);
                } else {
                    // parent is null or missing
                    tree.push(node);
                }
            });
            return tree;
        },
    footer(req, res) {
        // const curUrl=req.body.url;

        // if(!curUrl || curUrl.includes('byjus.com')==false){
        //     res.status(400).send({
        //         success:false,
        //         msg:'Url can not be empty'
        //     });
        // }

        // if(curUrl.includes('byjus.com')==false){
        //     res.status(400).send({
        //         success:false,
        //         msg:'Url entered is wrong'
        //     });
        // }
        //console.log(curUrl);
        
        let html = '';

            navigationMenu.find().then(primaryList => {
                
                var data = module.exports.map(primaryList);
                // res.send(data);
                
                
                html=`
                <footer class="footer">
                    <div class="container">
                        <div class="row">
                `;
                
                let group='';
                for(let i = 0; i<data.length; i++){    
                    if(data[i].position == null) break;
                    var childHtml = '';
                    for(let j=0; j<data[i].submenu.length; j++){
                        let child= data[i].submenu[j];
                        if(child.title.includes('.png')){
                            childHtml+= `<a href=${child.navigation_url} target="_blank" class="links"><img style="width: 20%;" src="${child.title}"></a>`;
                        }
                        else{
                            childHtml+=`<li><a href=${child.navigation_url} target="_blank">${child.title}</a></li>`;
                        }
                    }
                    
                    if(data[i].name=="exams"){
                        html+=`
                        <div class="col-sm-2">
                            <div>
                                <i>${data[i].title}</i>
                                <ul>
                                    ${childHtml}
                                </ul>
                            </div>
                            `;
                    }else if(data[i].name=="resources"){
                        html+=`
                            <div>
                                <i>${data[i].title}</i>
                                <ul>
                                    ${childHtml}
                                </ul>
                            </div>
                        </div>
                            `;
                    }else{
                        html+=`
                        <div class="col-sm-${(data[i].name=="exam_preparation" || data[i].name=="company")?'3':'2'}">
                            <i>${data[i].title}</i>
                            <ul>
                                ${childHtml}
                            </ul>
                        </div>`;
                    }
                }

                        html+=`</div>`;
                
                        html+=test();
                
                html +=` 
                    </div>
                    
                </footer>
                `;
                
                // res.status(200).send({
                //     'succss':true,
                //     'footer':html
                // });
                res.send(html);
            });
            
    }
    
    }

module.exports = router;