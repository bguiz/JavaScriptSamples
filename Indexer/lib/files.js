
const fs = require('fs');
const path = require('path');

function processFiles(dirpath, extension, prefix, fn) {
    const filenames = fs.readdirSync(dirpath);
    const l = filenames.length;

    for (let k = 0; k < l; k++) {
        const filename = filenames[k];
        
        if (filename === 'node_modules')
            continue;
        if (filename.toLowerCase() === 'readme.md')
            continue;
        if (filename.toLowerCase() === 'index.md')
            continue;
        if (filename === '.github')
            continue;
            
        const filepath = path.join(dirpath,  filenames[k]);
        
        const stat = fs.lstatSync(filepath);
        
        if (stat.isFile() && filename.endsWith(extension)) {
            const name = prefix ? path.join(prefix, filename) : filename;
            fn(name);
            continue;
        }
        
        if (stat.isDirectory()) {
            const newprefix = prefix ? path.join(prefix, filename) : filename;
            const newdirpath = path.join(dirpath, filename);
            processFiles(newdirpath, extension, newprefix, fn);
        }
    }    
}

module.exports = {
    processFiles
};

