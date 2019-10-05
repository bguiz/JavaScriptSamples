
const search = require('../lib/search');

exports['split text one paragraph'] = function (test) {
    const text = ['', 'foo', 'bar', ''].join('\n');
    
    const result = search.split(text);
    
    test.deepEqual(result, [ 'foo\nbar\n' ]);
};

exports['split text two paragraphs'] = function (test) {
    const text = ['', 'foo', 'bar', '', 'foobar', 'barfoo' ].join('\n');
    
    const result = search.split(text);
    
    test.deepEqual(result, [ 'foo\nbar\n', 'foobar\nbarfoo\n' ]);
};

exports['split text two paragraphs using carriage return'] = function (test) {
    const text = ['', 'foo', 'bar', '', 'foobar', 'barfoo' ].join('\r\n');
    
    const result = search.split(text);
    
    test.deepEqual(result, [ 'foo\r\nbar\r\n', 'foobar\r\nbarfoo\r\n' ]);
};

exports['split text two paragraphs and lines with spaces'] = function (test) {
    const text = ['  ', ' foo', 'bar ', '', '  foobar  ', ' barfoo' ].join('\n');
    
    const result = search.split(text);
    
    test.deepEqual(result, [ 'foo\nbar\n', 'foobar\nbarfoo\n' ]);
};
