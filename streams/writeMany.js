// 10s
// const fs = require('fs/promises');
// (async() => {
//     console.time('end');
//     const file = await fs.open(__dirname + '/test.txt', 'w');
//     for (let i = 0; i < 1000000; i++) {
//         await file.write(`${i} `)
//     }
//     console.timeEnd('end');
// })()

// 1.7s
// const fs = require('fs');
// (async() => {
//     console.time('end');
//     fs.open(__dirname + '/test.txt', 'w', (err, fd) => {
//         for (let i = 0; i < 1000000; i++) {
//             fs.writeSync(fd, `${i} `)
//         }
//         console.timeEnd('end');
//     });
// })()

// 1.8s
// const fs = require("fs");
// (async() => {
//     console.time('writeMany');
//     fs.open(__dirname + '/test.txt', 'w', (err, fd) => {
//         for(let i = 0; i < 1000000; i++) {
//             const buffer = Buffer.from(` ${i}`, 'utf-8');
//             fs.writeSync(fd, buffer);
//         }
//         console.timeEnd('writeMany');
//     });
//
// })()

// stream
// 0.2s, huge CPU, Memory usage
const fs = require("fs/promises");
(async() => {

    const fileHandle = await fs.open(__dirname+ "/test.txt", "w");
    const stream = fileHandle.createWriteStream();

    console.log('writableHighWaterMark:',stream.writableHighWaterMark);
    console.time("writeMany");

    let i = 0;
    const numberOfWrites = 1000000;

    const writeMany = () => {
        while (i < numberOfWrites) {
            const buff = Buffer.from('a', "utf-8");
            // this is our last write
            if (i === numberOfWrites - 1) {
                console.log('END');
                return stream.end(buff);
            }

            // if stream.write returns false, stop the loop
            if (!stream.write(buff)) {
                console.log('break. i = ', i);
                break;
            }

            i++;
        }
    };

    writeMany();

    // resume our loop once our stream's internal buffer is emptied
    stream.on("drain", () => {
        console.log("Drained!!!");
        writeMany();
    });

    stream.on("finish", () => {
        console.log('finish');
        console.timeEnd("writeMany");
        fileHandle.close();
    });


})()

