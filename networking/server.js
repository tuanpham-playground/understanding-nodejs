const net = require('net');

// Every networking appplication should have port number
const port = 3099;
const address = '127.0.0.1';

// Create a server
const server = net.createServer();
server.on('connection', (socket) => {
    // socket is an object that represents each connection between the server and client
    socket.on('data', (data) => {
        // when data is received from the client
        console.log(data.toString());
    })
})

// Start listening on the server
server.listen(port, address, () => {
    console.log(`Server ${address} is listening on port ${port}`);
})
