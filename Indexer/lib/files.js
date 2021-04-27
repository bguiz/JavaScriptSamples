
const fs = require('fs');
const path = require('path');

function processFiles(dirpath, extension, prefix, subdirs, fn) {
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
            let shouldRecur;
            if (subdirs.length > 0) {
                shouldRecur = subdirs.filter((subdir) => (
                    // recursively track subdir/ this is more of a brute force approach
                    newdirpath.indexOf(subdir) >= 0
                )).length > 0;
            } else {
                shouldRecur = true;
            }
            if (shouldRecur) {
                processFiles(newdirpath, extension, newprefix, subdirs, fn);
            }
        }
    }
}

module.exports = {
    processFiles
};

