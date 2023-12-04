var fs = require('fs')
var readable = fs.createReadStream('greet.txt')
var writeable = fs.createWriteStream('greetcopy.txt')
readable.pipe(writeable);