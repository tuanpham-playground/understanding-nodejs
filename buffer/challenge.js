// 0100 1000 0110 1001 0010 0001
const { Buffer} = require('buffer')
const memoryContainer = Buffer.alloc(3);

memoryContainer[0] = 72;
memoryContainer[1] = 105;
memoryContainer[2] = 33;

const stringToDisplay = memoryContainer.toString('utf-8')
const stringToDisplay1 = memoryContainer.toString('utf-16le')
console.log(stringToDisplay);
console.log(stringToDisplay1);