
var chop = require('./chop');

exports['find in one element array'] = function (test) {
    test.equal(chop(1, [1]), 0);
    test.equal(chop(1, [2]), -1);
}

