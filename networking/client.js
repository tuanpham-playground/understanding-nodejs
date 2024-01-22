// 'net' package is lowest level in NodeJS when working with networking
const net = require('net');
const Buffer = require('buffer').Buffer;

// Every networking appplication should have port number
const port = 3099;
const address = '127.0.0.1';

const options = {
    host: address,
    port
}
const socket = net.createConnection(options, () => {
    console.log('Connected to the server');
    const buff = Buffer.alloc(5);
    buff[0] = 0x68;
    buff[1] = 0x65;
    buff[2] = 0x6C;
    buff[3] = 0x6C;
    buff[4] = 0x6F;

    socket.write(buff);
});

socket.on('end', () => {
    console.log('Disconnected from the server');
})
