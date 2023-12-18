var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.get('/', function(request, response) {
    response.send('<html><head></head><body><h1>Hello World!</h1></body></html>')
})

app.get('/person/:id', function(request, response) {
    response.send('<html><head></head><body><h1>Hello Person:'+ request.params.id +'</h1></body></html>')
});
app.get('/api', function(request, response) {
    response.json({
        firstName: "John",
        lastName: "Smith"
    })
});

app.listen(port);