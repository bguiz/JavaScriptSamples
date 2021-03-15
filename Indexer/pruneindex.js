
const index = require('./index.json');
const simpleargs = require('simpleargs');
const fs = require('fs');

let pruned;
let included;

try {
    pruned = require('./pruned.json');
}
catch (ex) {
    pruned = [];
}

try {
    included = require('./included.json');
}
catch (ex) {
    included = [];
}

simpleargs.define('ml','maxlen',0,'Maximum Length');
simpleargs.define('mc','mincount',0,'Minimum Count');
simpleargs.define('s','subword',0,'Subword');

const args = simpleargs(process.argv.slice(2));

const maxlen = args.maxlen;
const mincount = args.mincount;
const subword = args.subword;
    
const newindex = {};

for (let word in index) {
    if (subword && word.indexOf(subword) < 0) {
        newindex[word] = index[word];
        
        continue;
    }
        
    if (included.indexOf(word) >= 0) {
        newindex[word] = index[word];
        
        continue;
    }
        
    if (maxlen && word.length <= maxlen) {
        toPrune(word);

        continue;
    }
        
    const data = index[word];
    const npages = Object.keys(data).length;
    
    if (mincount && npages >= mincount) {
        toPrune(word);

        continue;
    }
        
    newindex[word] = index[word];
}

function toPrune(word) {
    console.log('pruning', word);
    
    if (pruned.indexOf(word) >= 0)
        return;
        
    pruned.push(word);
}

fs.writeFileSync('./pruned.json', JSON.stringify(pruned));
    
fs.writeFileSync('./index.json', JSON.stringify(newindex));
