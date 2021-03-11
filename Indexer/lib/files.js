
const fs = require('fs');
const path = require('path');

function processDirectory(dirpath, extension, prefix, fn) {
    const filenames = fs.readdirSync(dirpath);
    const l = filenames.length;

    for (let k = 0; k < l; k++) {
        const filename = filenames[k];

        if (filename === 'node_modules')
            continue;
        if (filename.toLowerCase() === 'readme.md')
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
            processDirectory(newdirpath, extension, newprefix, fn);
        }
    }
}

function processMapping(mappingFilename, extension, fn) {
    const mappingJson = fs.readFileSync(mappingFilename);
    const mapping = JSON.parse(mappingJson);
    const filenames = Object.keys(mapping);
    filenames.forEach((filename) => {
        if (!filename.endsWith(extension))
            return;
        fn(filename);
    });
}

module.exports = {
    processDirectory,
    processMapping
};

