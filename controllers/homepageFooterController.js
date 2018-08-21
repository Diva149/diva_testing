'use strict';

const navigationMenu = require('../models/footerNavigation_schema'),
    _ = require('lodash');

    module.exports = {
    foot(req, res) {
            var head = [], head_1 = [], head_2 = [], head_3 = [], head_4 = [], head_5 = [],head_6 = [],
            top = [], top_1 = [], top_2 = [], top_3 = [], top_4 = [], top_5 = [],
            child = [], child_1 = [], child_2 = [], child_3 = [], child_4 = [], child_5 = [], child_6 = [],
            data, data_1, data_2, data_3, data_4, data_5, data_6;
        
            navigationMenu.find().then(primaryList => {
           _.each(primaryList, function(value){
            if(value.position === 0) {
               head.push(value);
            }
        });
       
        if(head[0].level === 0) {
             top = '<ul>'+head[0].title;
            
       }

    for(var i = 0; i< head.length;i++)
    {
        
        if(head[i].level !== 0) {
            data = '<li><a href="'+head[i].navigation_url+'" target="_blank">'+head[i].title+'</a></li>';
            child.push(data);
            //console.log("value",head[i].title);
       }
    }
    const complete = top + child + '</ul>';

    _.each(primaryList, function(value){
        if(value.position === 1) {
           head_1.push(value);
        }
    });
   
    if(head_1[0].level === 0) {
         top_1 = '<ul>'+head_1[0].title;
        
   }

    for(var i = 0; i< head_1.length;i++)
{
    
    if(head_1[i].level !== 0) {
        data_1 = '<li><a href="'+head_1[i].navigation_url+'" target="_blank">'+head_1[i].title+'</a></li>';
        child_1.push(data_1);
        //console.log("value",head[i].title);
   }
    }
    const complete_1 = complete + top_1 + child_1 + '</ul>';
   
    _.each(primaryList, function(value){
        if(value.position === 2) {
           head_2.push(value);
        }
    });
   
    if(head_2[0].level === 0) {
         top_2 = '<ul>'+head_2[0].title;
        
   }

    for(var i = 0; i< head_2.length;i++)
{
    
    if(head_2[i].level !== 0) {
        data_2 = '<li><a href="'+head_2[i].navigation_url+'" target="_blank">'+head_2[i].title+'</a></li>';
        child_2.push(data_2);
        //console.log("value",head[i].title);
   }
    }
    const complete_2 = complete_1 + top_2 + child_2 + '</ul>';

    _.each(primaryList, function(value){
        if(value.position === 3) {
           head_3.push(value);
        }
    });
   
    if(head_3[0].level === 0) {
         top_3 = '<ul>'+head_3[0].title;
        
   }

    for(var i = 0; i< head_3.length;i++)
{
    
    if(head_3[i].level !== 0) {
        data_3 = '<li><a href="'+head_3[i].navigation_url+'" target="_blank">'+head_3[i].title+'</a></li>';
        child_3.push(data_3);
        //console.log("value",head[i].title);
   }
    }
    const complete_3 = complete_2 + top_3 + child_3 + '</ul>';

    _.each(primaryList, function(value){
        if(value.position === 4) {
           head_4.push(value);
        }
    });
   
    if(head_4[0].level === 0) {
         top_4 = '<ul>'+head_4[0].title;
        
   }

    for(var i = 0; i< head_4.length;i++)
{
    
    if(head_4[i].level !== 0) {
        data_4 = '<li><a href="'+head_4[i].navigation_url+'" target="_blank">'+head_4[i].title+'</a></li>';
        child_4.push(data_4);
        //console.log("value",head[i].title);
   }
    }
    const complete_4 = complete_3 + top_4 + child_4 + '</ul>';

    _.each(primaryList, function(value){
        if(value.position === 5) {
           head_5.push(value);
        }
    });
   
    if(head_5[0].level === 0) {
         top_5 = '<ul>'+head_5[0].title;
        
   }

    for(var i = 0; i< head_5.length;i++)
{
    
    if(head_5[i].level !== 0) {
        data_5 = '<li><a href="'+head_5[i].navigation_url+'" target="_blank"><img src="'+head_5[i].title+'" style="background-color:black;" /></a></li>';
        child_5.push(data_5);
        //console.log("value",head[i].title);
   }
    }
    const complete_5 = complete_4 + top_5 + child_5 + '</ul>';


    _.each(primaryList, function(value){
        if(value.position === null) {
           head_6.push(value);
        }
    });

    for(var i = 0; i< head_6.length;i++)
    {
        data_6 = '<p><a href="'+head_6[i].navigation_url+'" target="_blank">'+head_6[i].title+'</a></p>';
        child_6.push(data_6);
        //console.log("value",child_6);
    }
    const complete_6 = complete_5 + child_6 + '</ul>';



        res.status(200).send(complete_6);




            });
            
    }
    
    }

