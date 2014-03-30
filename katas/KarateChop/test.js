
var chop = require('./chop');

exports['find in one element array'] = function (test) {
    test.equal(chop(1, [1]), 0);
    test.equal(chop(1, [2]), -1);
}

exports['find in two element array'] = function (test) {
    test.equal(chop(1, [1, 2]), 0);
    test.equal(chop(2, [1, 2]), 1);
    test.equal(chop(3, [1, 2]), -1);
}

