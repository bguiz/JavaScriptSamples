
const search = require('../lib/search');

exports['containss word'] = function (test) {
    test.ok(search.contains('foo bar', [ 'foo' ]));
    test.ok(!search.contains('foo bar', [ 'foobar' ]));
};

exports['contains two word'] = function (test) {
    test.ok(search.contains('foo bar', [ 'foo', 'bar' ]));
    test.ok(!search.contains('foo bar', [ 'foobar', 'bar' ]));
};

exports['contains words case insensitive'] = function (test) {
    test.ok(search.contains('foo bar', [ 'foo', 'bar' ]));
    test.ok(search.contains('FOO BAR', [ 'foo', 'bar' ]));
    test.ok(search.contains('FOO BAR', [ 'foo', 'bar' ]));
    
    test.ok(!search.contains('FOO BAR', [ 'foobar', 'bar' ]));
};

