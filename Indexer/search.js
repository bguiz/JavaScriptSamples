
const search = require('./lib/search');

const files = require('./files.json');
const index = require('./index.json');

let result;

for (let k = 2; k < process.argv.length; k++) {
    const word = process.argv[k].toLowerCase();
    
    let subresult;
    
    for (n in index) {
        if (n.indexOf(word) < 0)
            continue;
            
        if (subresult)
            subresult = search.or(subresult, index[n]);
        else
            subresult = index[n];
    }
    
    if (!subresult)
        continue;
        
    if (result)
        result = search.and(result, subresult);
    else    
        result = subresult;
}

const list = search.sort(result);

if (list) {
    const l = list.length;
    
    for (let k = 0; k < l; k++) {
        const nfile = list[k].i;
        const file = files[nfile];
        
        console.log(search.link(file), list[k].v);
        
        if (file.t)
            console.log(file.t);
        if (file.d)
            console.log(file.d);
            
        console.log();
    }
}

