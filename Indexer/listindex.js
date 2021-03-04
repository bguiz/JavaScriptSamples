
const index = require('./index.json');

let subword = process.argv[2];

if (subword)
    subword = subword.toLowerCase();
    
for (let word in index) {
    if (subword && word.indexOf(subword) < 0)
        continue;
        
    const data = index[word];
    const npages = Object.keys(data).length;
    
    console.log(word, npages);
}