'use strict';

var fs = require('fs');

module.exports ={
    checkUrl(req, res) {
        const testUrl = req.body.url;
        console.log('from front end testUrl- Footer Controller', testUrl);
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./template/footerIndex.html', null, function(error, data) {
            if (error) {
                res.writeHead(404);
                res.write('File not found!');
            } else {
                console.log("this is the data", data);
                res.write(data);
            }
            res.end();
        });
    }
}