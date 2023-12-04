var http = require('http');
var fs = require("fs");

http.createServer(function(request, response) {
    // build response
    console.log('server is running');
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    var html = fs.readFileSync(__dirname + "/index.html", 'utf8');
    html = html.replace('{message}', 'I am message from server');
    response.end(html);
}).listen(8080)