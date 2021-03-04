
const words = require('./lib/words');

const fs = require('fs');

const filename = process.argv[2];

const text = fs.readFileSync(filename).toString();

const wrds = words.toWords(text);
const l = wrds.length;
const result = {};

for (let k = 0; k < l; k++) {
    const word = wrds[k];
    
    if (result[word])
        result[word]++;
    else
        result[word] = 1;
}

console.log(JSON.stringify(result));

