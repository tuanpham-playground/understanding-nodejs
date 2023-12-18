const fs = require('fs/promises');
const { Buffer } = require('buffer');

const watchFilePath = __dirname + '/command.txt';
const readMode = 'r';
const writeMode = 'w';
const CREATE_FILE = 'Create a new file';
const DELETE_FILE = 'Delete a file';
const RENAME_FILE = 'Rename a file';

(async() => {
    const createFile = async (path) => {
        try {
            const file = await fs.open(__dirname + '/' + path, readMode);
            await file.close();
            console.log('File exist ⚠️');
        } catch (e) {
            const newFile = await fs.open( __dirname + '/' + path, writeMode);
            await newFile.close();
            console.log('A new file is created successfully 🎉');
        }
    }

    const deleteFile = async (path) => {
        try {
            const file = await fs.open(__dirname + '/' + path, readMode);
            await file.close();

            await fs.unlink(__dirname + '/' + path);
            console.log('The file is deleted successfully 🎉');
        } catch (e) {
            console.log('File does not exist ⚠️')
        }
    }

    const renameFile = async (oldFilePath, newFilePath) => {
        try {
            const file = await fs.open(__dirname + '/' + oldFilePath, readMode);
            await file.close();

            const fullOldFilePath = __dirname + '/' + oldFilePath;
            const fullNewFilePath = __dirname + '/' + newFilePath;

            await fs.rename(fullOldFilePath, fullNewFilePath);
            console.log('The file is renamed successfully 🎉');
        } catch (e) {
            console.log('Cannot rename the file ⚠️');
        }
    }


    const file = await fs.open(watchFilePath, readMode);
    file.on('change', async () => {
        const fileStat = await file.stat();
        const fileSize = fileStat.size;
        const buff = Buffer.alloc(fileSize);

        const offset = 0;
        const length = buff.byteLength;
        const position = 0;
        await file.read(buff, offset, length, position);
        const command = buff.toString('utf-8');

        if (command.includes(CREATE_FILE)) {
            const filePath = command.substring(CREATE_FILE.length + 1);
            await createFile(filePath);
        }

        if(command.includes(DELETE_FILE)) {
            const filePath = command.substring(DELETE_FILE.length + 1);
            await deleteFile(filePath);
        }

        if(command.includes(RENAME_FILE)) {
            const lastIndexof = command.lastIndexOf(' ');
            const oldFileName = command.substring(RENAME_FILE.length + 1, lastIndexof);
            const newFileName = command.substring(lastIndexof + 1);

            await renameFile(oldFileName, newFileName);
        }
    });

    const watch = fs.watch(watchFilePath);
    for await (const event of watch) {
        console.log('event:', event);
        if(event.eventType === 'change') {
            file.emit('change');
        }
    }
})()