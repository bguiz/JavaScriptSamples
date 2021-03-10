
const index = require('./index.json');
const simpleargs = require('simpleargs');
const fs = require('fs');

let pruned;

try {
    pruned = require('./pruned.json');
}
catch (ex) {
    pruned = [];
}

simpleargs.define('ml','maxlen',0,'Maximum Length');
simpleargs.define('mc','mincount',0,'Minimum Count');

const args = simpleargs(process.argv.slice(2));

const maxlen = args.maxlen;
const mincount = args.mincount;
    
const newindex = {};

for (let word in index) {
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
