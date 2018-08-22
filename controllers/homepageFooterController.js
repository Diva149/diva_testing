'use strict';

const navigationMenu = require('../models/footerNavigation_schema'),
    _ = require('lodash');

    module.exports = {
    foot(req, res) {
            var head = [], head_1 = [], head_2 = [], head_3 = [], head_4 = [], head_5 = [],head_6 = [],
            top = [], top_1 = [], top_2 = [], top_3 = [], top_4 = [], top_5 = [],
            child = [], child_1 = [], child_2 = [], child_3 = [], child_4 = [], child_5 = [], child_6 = [],
            data, data_1, data_2, data_3, data_4, data_5, data_6, footer, final,
            foot,div,div1,div2,div3,div4,div5,div6,div7,div8,div9 ;
        
            foot = '<footer class="footer">';
            div = '<div class="container">';
            div1 = '<div class="row">';
           

            footer = foot + div + div1 ;

            navigationMenu.find().then(primaryList => {
           _.each(primaryList, function(value){
            if(value.position === 0) {
               head.push(value);
            }
        });
       
    
        div2 = '<div class="col-sm-2">';
        if(head[0].level === 0) {
             top = '<i>'+head[0].title + '</i><ul>';
            
       }

    for(var i = 0; i< head.length;i++)
    {
        
        if(head[i].level !== 0) {
            data = '<li><a href="'+head[i].navigation_url+'" target="_blank">'+head[i].title+'</a></li>';
            child.push(data);
       }
    }
    const complete = footer + div2 + top + child.join(' ') +'\n' + '</ul></div>';

    _.each(primaryList, function(value){
        if(value.position === 1) {
           head_1.push(value);
        }
    });
   
    div3= '<div class="col-sm-2">'
    if(head_1[0].level === 0) {
         top_1 = '<i>'+head_1[0].title + '</i><ul>';
        
   }

    for(var i = 0; i< head_1.length;i++)
{
    
    if(head_1[i].level !== 0) {
        data_1 = '<li><a href="'+head_1[i].navigation_url+'" target="_blank">'+head_1[i].title+'</a></li>';
        child_1.push(data_1);
   }
    }
    const complete_1 =  complete + div3 + top_1 + child_1.join(' ') +'\n' + '</ul>';
   
    _.each(primaryList, function(value){
        if(value.position === 2) {
           head_2.push(value);
        }
    });
   
    if(head_2[0].level === 0) {
         top_2 = '<i>'+head_2[0].title + '</i><ul>';
        
   }

    for(var i = 0; i< head_2.length;i++)
{
    
    if(head_2[i].level !== 0) {
        data_2 = '<li><a href="'+head_2[i].navigation_url+'" target="_blank">'+head_2[i].title+'</a></li>';
        child_2.push(data_2);
   }
    }
    const complete_2 = complete_1 + top_2 + child_2.join(' ') +'\n' + '</ul></div>';

    _.each(primaryList, function(value){
        if(value.position === 3) {
           head_3.push(value);
        }
    });
   
    div3 ='<div class="col-sm-3">'
    if(head_3[0].level === 0) {
         top_3 = '<i>'+head_3[0].title + '</i><ul>';
        
   }

    for(var i = 0; i< head_3.length;i++)
{
    
    if(head_3[i].level !== 0) {
        data_3 = '<li><a href="'+head_3[i].navigation_url+'" target="_blank">'+head_3[i].title+'</a></li>';
        child_3.push(data_3);
   }
    }
    const complete_3 = complete_2 + div3 + top_3 + child_3.join(' ') +'\n' + '</ul></div>';

    _.each(primaryList, function(value){
        if(value.position === 4) {
           head_4.push(value);
        }
    });
   
    div4 = '<div class="col-sm-3">'
    if(head_4[0].level === 0) {
         top_4 = '<i>'+head_4[0].title + '</i><ul>';
        
   }

    for(var i = 0; i< head_4.length;i++)
{
    
    if(head_4[i].level !== 0) {
        data_4 = '<li><a href="'+head_4[i].navigation_url+'" target="_blank">'+head_4[i].title+'</a></li>';
        child_4.push(data_4);
   }
    }
    const complete_4 =  complete_3 + div4 + top_4 + child_4.join(' ') +'\n' + '</ul></div>';

    _.each(primaryList, function(value){
        if(value.position === 5) {
           head_5.push(value);
        }
    });
   
    div5 = '<div class="col-sm-2">'
    if(head_5[0].level === 0) {
         top_5 = '<i>'+head_5[0].title+'<br>' + '</i><ul>';
        
   }

    for(var i = 0; i< head_5.length;i++)
    {
    
            if(head_5[i].level !== 0) {
                data_5 = '<a href="'+head_5[i].navigation_url+'" target="_blank" class="links"><img style="width: 50%;" src="'+head_5[i].title+'"</a>';
                child_5.push(data_5);
        }
    }

    const complete_5 = complete_4 + div5 + top_5 + child_5.join('') + '</ul></div></div>';


    _.each(primaryList, function(value){
        if(value.position === null) {
           head_6.push(value);
        }
    });

    div6 = '<div style="opacity: 0.6; background-color: #979797;height: 1px;width: 100%;margin-bottom:10px;"></div>'
    div7 = '<div class="row  ft-bt-links">'
    div8 = '<div class="col-sm-6">'
    final = div6 + div7 + div8;
    for(var i = 0; i< head_6.length;i++)
    {
        data_6 = '<a href="'+head_6[i].navigation_url+'" target="_blank">'+head_6[i].title+'</a>';
        var dd = '';
        dd+= data_6;
        
        if(i != head_6.length-1) dd+= ' | ';
        child_6.push(dd);
    }
    const complete_6 = complete_5 + final + child_6.join('') + '</div>' ;

    div9 = '<div class="col-sm-6 text-right">&copy;&nbsp;2018, BYJU\'S. All rights reserved.</div></div></div></footer>'
    
    const complete_7 = complete_6 + div9 ;

     res.status(200).send(complete_7);

    });
            
  }
}

