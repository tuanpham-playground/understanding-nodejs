const { Buffer } = require('buffer');

const memoryContainer = Buffer.alloc(3); // 3 bytes

memoryContainer[0] = 0x48
memoryContainer[1] = 0x69
memoryContainer[2] = 0x21
console.log(memoryContainer);
console.log(memoryContainer[0]); // 72
console.log(memoryContainer[1]); // 105
console.log(memoryContainer[2]); // 33
console.log(memoryContainer[3]); // undefined

console.log(memoryContainer.toString()); // Hi!

memoryContainer.writeInt8(-34,2);
console.log(memoryContainer.readInt8(2)); // 34

console.log(Buffer.from('486921', 'hex').toString('utf-8')); // Hi!

console.log(Buffer.from('F09F8C9F', 'hex').toString('utf-8')); // 🌟
