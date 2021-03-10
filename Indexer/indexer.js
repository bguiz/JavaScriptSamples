const fs = require('fs');
const path = require('path');

const words = require('./lib/words');
const files = require('./lib/files');
const markdown = require('./lib/markdown');

const dirpath = process.argv[2];
const extension = '.' + process.argv[3];

const filesdes = [];
const result = {};

files.processFiles(dirpath, extension, null, 
    filename => {
        const filepath = path.join(dirpath, filename);
        const text = fs.readFileSync(filepath).toString();
        
        const title = markdown.getTitle(text);
        const summary = markdown.getSummary(text);
        const tags = markdown.getTags(text);
        const description = markdown.getDescription(text);
        const header = markdown.getHeader(text);
        
        const file = { n: filename };
        
        if (title)
            file.t = title;
        else if (header)
            file.t = header;
        
        if (summary)
            file.d = summary;
        else if (description)
            file.d = description;

        if (tags)
            file.d = file.d + ' ' + tags;
            
        filesdes.push(file);
        
        const cwords = words.countWords(words.toWords(text));
        
        words.collectWords(result, cwords, filesdes.length - 1);
    });

fs.writeFileSync('files.json', JSON.stringify(filesdes));
fs.writeFileSync('index.json', JSON.stringify(result));
