var http = require('http');
var fs = require("fs");

http.createServer(function (request, response) {
    // build response
    console.log('server is running');
    if (request.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(response)
    } else if (request.url === '/api') {
        response.writeHead(200, {
            'Content-Type': 'application/json'
        });

        var obj = {
            firstName: "John",
            lastName: "ABC"
        }

        response.end(JSON.stringify(obj));
    } else {
        response.writeHead(404);
        response.end();
    }

}).listen(8080)