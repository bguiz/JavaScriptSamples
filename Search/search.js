
const search = require('./lib/search');

const fs = require('fs');

const filename = process.argv[2];
const words = process.argv.slice(3);

const text = fs.readFileSync(filename).toString();

const fragments = search.split(text);

const result = search.filter(fragments, words);

for (let k = 0, l = result.length; k < l; k++)
    console.log(result[k]);

