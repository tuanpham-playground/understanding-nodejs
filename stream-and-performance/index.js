var http = require('http');
var fs = require("fs");

http.createServer(function(request, response) {
    // build response
    console.log('server is running');
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    fs.createReadStream(__dirname + "/index.html", 'utf8').pipe(response);
}).listen(8080)