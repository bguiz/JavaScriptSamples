
const search = require('./lib/search');

const files = require('./files.json');
const index = require('./index.json');

let result;

for (let k = 2; k < process.argv.length; k++) {
    const word = process.argv[k].toLowerCase();
    
    if (!index[word])
        continue;
        
    if (result)
        result = search.and(result, index[word]);
    else    
        result = index[word];
}

const list = search.sort(result);

if (list) {
    const l = list.length;
    
    for (let k = 0; k < l; k++)
        console.log(files[list[k].i], list[k].v);
}

