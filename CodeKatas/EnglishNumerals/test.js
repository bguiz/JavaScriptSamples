
var nums = require('./numerals');

exports['convert zero'] = function (test) {
    test.equal(nums(0), 'zero');
};

exports['convert one'] = function (test) {
    test.equal(nums(1), 'one');
};

exports['first numbers one digit'] = function (test) {
    test.equal(nums(2), 'two');
    test.equal(nums(3), 'three');
    test.equal(nums(4), 'four');
    test.equal(nums(5), 'five');
    test.equal(nums(6), 'six');
    test.equal(nums(7), 'seven');
    test.equal(nums(8), 'eight');
    test.equal(nums(9), 'nine');
};