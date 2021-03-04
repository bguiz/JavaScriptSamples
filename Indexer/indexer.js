const fs = require('fs');
const path = require('path');

const words = require('./lib/words');
const files = require('./lib/files');

const dirpath = process.argv[2];
const extension = '.' + process.argv[3];

const filenames = [];
const result = {};

files.processFiles(dirpath, extension, null, 
    filename => {
        filenames.push(filename);
        
        const filepath = path.join(dirpath, filename);
        const text = fs.readFileSync(filepath).toString();
        
        const cwords = words.countWords(words.toWords(text));
        
        words.collectWords(result, cwords, filenames.length - 1);
    });

fs.writeFileSync('files.json', JSON.stringify(filenames));
fs.writeFileSync('index.json', JSON.stringify(result));
