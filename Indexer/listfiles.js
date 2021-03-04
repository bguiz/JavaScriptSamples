
const fs = require('fs');
const path = require('path');

const files = require('./lib/files');

const dirpath = process.argv[2];
const extension = '.' + process.argv[3];

files.processFiles(dirpath, extension, null, name => console.log(name));
