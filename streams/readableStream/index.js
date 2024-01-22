const fs = require("fs/promises");
(async() => {
    const fileHandleRead = await fs.open(__dirname + '/source.txt', 'r');
    const fileHandleWrite = await fs.open(__dirname+ "/dest.txt", "w");

    const readableStream = fileHandleRead.createReadStream({
        highWaterMark: 2
    });
    const writeableStream = fileHandleWrite.createWriteStream({
        highWaterMark: 2
    });

    readableStream.on('data', (chunk) => {
       const buffer  = Buffer.from(chunk.toString(), 'utf-8');
       console.log('buffer', buffer.toString());

       if(!writeableStream.write(chunk)) {
           console.log('pause');
           readableStream.pause();
       };
   })

    writeableStream.on('drain',() => {
        console.log('drain!!!');
        readableStream.resume();
    })


    // resume our loop once our stream's internal buffer is emptied
    // stream.on("drain", () => {
    //     console.log("Drained!!!");
    //     writeMany();
    // });
    //
    // stream.on("finish", () => {
    //     console.log('finish');
    //     console.timeEnd("writeMany");
    //     fileHandle.close();
    // });


})()

