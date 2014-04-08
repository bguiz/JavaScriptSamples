
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

exports['first numbers two digits'] = function (test) {
    test.equal(nums(10), 'ten');
    test.equal(nums(11), 'eleven');
    test.equal(nums(12), 'twelve');
    test.equal(nums(13), 'thirteen');
    test.equal(nums(14), 'fourteen');
    test.equal(nums(15), 'fifteen');
    test.equal(nums(16), 'sixteen');
    test.equal(nums(17), 'seventeen');
    test.equal(nums(18), 'eighteen');
    test.equal(nums(19), 'nineteen');
    test.equal(nums(20), 'twenty');
};

exports['numbers 20 to 29'] = function (test) {
    test.equal(nums(20), 'twenty');
    test.equal(nums(21), 'twenty-one');
    test.equal(nums(22), 'twenty-two');
    test.equal(nums(23), 'twenty-three');
    test.equal(nums(24), 'twenty-four');
    test.equal(nums(25), 'twenty-five');
    test.equal(nums(26), 'twenty-six');
    test.equal(nums(27), 'twenty-seven');
    test.equal(nums(28), 'twenty-eight');
    test.equal(nums(29), 'twenty-nine');
};

exports['numbers 30 to 39'] = function (test) {
    test.equal(nums(30), 'thirty');
    test.equal(nums(31), 'thirty-one');
    test.equal(nums(32), 'thirty-two');
    test.equal(nums(33), 'thirty-three');
    test.equal(nums(34), 'thirty-four');
    test.equal(nums(35), 'thirty-five');
    test.equal(nums(36), 'thirty-six');
    test.equal(nums(37), 'thirty-seven');
    test.equal(nums(38), 'thirty-eight');
    test.equal(nums(39), 'thirty-nine');
};


