
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

simpleargs.define('ml','minlen',0,'Minimum Length');
simpleargs.define('mc','maxcount',0,'Maximum Count');
simpleargs.define('s','subword','','Subword');

const args = simpleargs(process.argv.slice(2));

const minlen = args.minlen;
const maxcount = args.maxcount;
const subword = args.subword;

const hasMinlen = typeof minlen === 'number' && minlen > 0;
const hasMaxcount = typeof maxcount === 'number' && maxcount > 0;
const hasSubword = typeof subword === 'string' && subword.length > 0;

const newindex = {};

for (let word in index) {
    if (hasSubword && word.indexOf(subword) < 0) {
        newindex[word] = index[word];

        continue;
    }

    if (included.indexOf(word) >= 0) {
        newindex[word] = index[word];

        continue;
    }

    if (hasMinlen && word.length <= minlen) {
        toPrune(word);

        continue;
    }

    const data = index[word];
    const npages = Object.keys(data).length;

    if (hasMaxcount && npages >= maxcount) {
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
