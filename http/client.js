const http = require('http');

// Option for create a request
const options = {
    hostname: '127.0.0.1',
    port: 3001,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};

const request = http.request(options, (response) => {
    response.on('data', (chunk) => {
        console.log('Chunk received from server:', chunk.toString());
    });

    response.on('end', () => {
        console.log('No more data from Server response => End');
    });
});

request.on('error', (error) => {
    console.log(`Problem with the request: ${error.message}`);
});

const postData = JSON.stringify({
    'message': 'Hey Server, How are you?',
});

// Write data to request body
request.write(postData);

// We call the end() method of the request variable. It completes the request. If we do not call it, the program will never complete.
// Always call end() when using http.request()
// In request.get(), we don't need to call end() because it's called automatically
// request.end();


