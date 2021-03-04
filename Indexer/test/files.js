
const files = require('../lib/files');

exports['process js files'] = function (test) {
    const result = [];
    
    files.processFiles('.', 'js', null, fn => result.push(fn));
    
    test.ok(result.length);
    test.ok(result.indexOf('text2words.js') >= 0);
    test.ok(result.indexOf('lib\\files.js') >= 0);
    test.ok(result.indexOf('README.md') < 0);
};

