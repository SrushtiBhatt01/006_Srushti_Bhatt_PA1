var zlib = require('zlib');
var fs = require('fs');

fs.createReadStream('./q5.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./xyz.txt', 'utf-8'))

console.log("Decompress done");