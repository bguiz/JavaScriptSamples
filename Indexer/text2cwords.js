
const words = require('./lib/words');

const fs = require('fs');

const filename = process.argv[2];

const text = fs.readFileSync(filename).toString();

const wrds = words.countWords(words.toWords(text));

console.log(JSON.stringify(wrds));

