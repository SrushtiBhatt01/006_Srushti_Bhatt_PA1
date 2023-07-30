const zlib = require('zlib');
const fs = require('fs');

const input = fs.createReadStream('./q5.txt');
const output = fs.createWriteStream('./q5.txt.gz');

input.pipe(zlib.createGzip()).pipe(output);

console.log("Compress done");

