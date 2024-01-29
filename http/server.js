const http = require('http');

// create server
const server = http.createServer((request, response) => {
    request.on('data', (chunk) => {
        let data = '';
        console.log('Data received from Client => ', chunk.toString() , '\n');
        data += chunk;
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write('Hello Client. I am FINE !!!');
    });

    // The end event is emitted when the entire body has been received
    request.on('end', () => {
        response.end();
        console.log('No more data in Client request => End');
    })
});

server.listen(3001, () => {
    console.log('Server is listening on port 3001...');
})

