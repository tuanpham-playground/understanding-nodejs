const { Buffer } = require('buffer')

const buffer = Buffer.alloc(1e9)
setInterval(() => {
    // instead of this
    for(let i = 0; i < b.length; i++) {
        buffer[i] = 0x22;
    }

    // we will use this, it's faster 2-3 times
    buffer.fill(0x22);
}, 5000)
