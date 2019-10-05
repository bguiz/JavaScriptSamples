
const search = require('../lib/search');

exports['filter by word'] = function (test) {
    const result = search.filter([ 'foo bar', 'foobar', 'zoo' ], [ 'foo' ]);
    
    test.deepEqual(result, [ 'foo bar', 'foobar' ]);
};

exports['filter by word case insensitive'] = function (test) {
    const result = search.filter([ 'foo bar', 'Foobar', 'zoo' ], [ 'FOO' ]);
    
    test.deepEqual(result, [ 'foo bar', 'Foobar' ]);
};

exports['filter by word containing spaces'] = function (test) {
    const result = search.filter([ 'foo bar', 'Foobar', 'zoo' ], [ '   FOO  ' ]);
    
    test.deepEqual(result, [ 'foo bar', 'Foobar' ]);
};

exports['filter by two word'] = function (test) {
    const result = search.filter([ 'foo bar', 'Foobar', 'bar' ], [ 'foo', 'bar' ]);
    
    test.deepEqual(result, [ 'foo bar', 'Foobar' ]);
};

exports['filter by word and not word'] = function (test) {
    const result = search.filter([ 'foo bar', 'Foobar', 'bar', 'foo' ], [ 'foo', '~bar' ]);

    test.deepEqual(result, [ 'foo' ]);
};
