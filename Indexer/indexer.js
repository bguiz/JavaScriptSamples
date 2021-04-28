const fs = require('fs');
const path = require('path');
const simpleargs = require('simpleargs');

simpleargs.define('w','weighted',false,'Weighted Word Count', { flag: true });
simpleargs.define('sd','subdirs','','Sub directories to include');

const words = require('./lib/words');
const files = require('./lib/files');
const markdown = require('./lib/markdown');

const args = simpleargs(process.argv.slice(2));

const dirpath = args._[0];
const extension = '.' + args._[1];
const subdirsArg = args.subdirs;
const hasSubdirsArg = typeof subdirsArg === 'string' && subdirsArg.length > 0;
const subdirs = (hasSubdirsArg) ?
    subdirsArg.split(':') :
    [];

const filesdes = [];
const result = {};

files.processFiles(dirpath, extension, null, subdirs,
    filename => {
        const filepath = path.join(dirpath, filename);
        const text = fs.readFileSync(filepath).toString();

        const title = markdown.getTitle(text);
        const summary = markdown.getSummary(text);
        const description = markdown.getDescription(text);
        const header = markdown.getHeader(text);
        const tags = markdown.getTags(text);
        const permalink = markdown.getPermalink(text);

        const file = { n: filename };

        if (title)
            file.t = title;
        else if (header)
            file.t = header;
        file.t = stripOuterQuotes(file.t);

        if (summary)
            file.d = summary;
        else if (description)
            file.d = description;
        file.d = stripOuterQuotes(file.d);
        if (file.d)
            file.d.replace(/\n/g, ' ');

        if (tags)
            file.d = (file.d || '') + '\n' + tags;

        if (permalink)
            file.l = permalink;

        filesdes.push(file);

        const cwords = words.countWords(words.toWords(text), args.weighted);

        words.collectWords(result, cwords, filesdes.length - 1);
    });

function stripOuterQuotes(str) {
    if (typeof str !== 'string') {
        return str;
    }
    const lastCharIdx = str.length - 1;
    if (
          (str.charAt(0) === "'" &&
          str.charAt(lastCharIdx) === "'") ||
          (str.charAt(0) === '"' &&
          str.charAt(lastCharIdx) === '"')
    ) {
        return str.slice(1, lastCharIdx);
    } else {
        return str;
    }
}

fs.writeFileSync('files.json', JSON.stringify(filesdes));
fs.writeFileSync('index.json', JSON.stringify(result));
