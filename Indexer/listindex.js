
const index = require('./index.json');
const simpleargs = require('simpleargs');

simpleargs.define('ml','maxlen',0,'Maximum Length');
simpleargs.define('mc','mincount',0,'Minimum Count');
simpleargs.define('s','subword',0,'Subword');

const args = simpleargs(process.argv.slice(2));

let subword = args.subword;

if (subword)
    subword = subword.toLowerCase();
    
const maxlen = args.maxlen;
const mincount = args.mincount;
    
const items = [];

for (let word in index) {
    if (maxlen && word.length > maxlen)
        continue;
        
    if (subword && word.indexOf(subword) < 0)
        continue;
        
    const data = index[word];
    const npages = Object.keys(data).length;
    
    if (mincount && npages < mincount)
        continue;
    
    items.push({ k: word, v: npages });
}

items.sort(function(a, b) {
    if (a.v < b.v)
        return 1;
        
    if (a.v > b.v)
        return -1;
        
    return 0;
});

const l = items.length;

for (let k = 0; k < l; k++)
    console.log(items[k].k, items[k].v);
    

