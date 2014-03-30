
var chop = require('./chop');

exports['find in one element array'] = function (test) {
    test.equal(chop(1, [1]), 0);
    test.equal(chop(1, [2]), -1);
}

exports['find in two element array'] = function (test) {
    test.equal(chop(1, [1, 2]), 0);
    test.equal(chop(2, [1, 2]), 1);
    test.equal(chop(3, [1, 2]), -1);
    test.equal(chop(0, [1, 2]), -1);
}

exports['find in three element array'] = function (test) {
    test.equal(chop(1, [1, 2, 3]), 0);
    test.equal(chop(2, [1, 2, 3]), 1);
    test.equal(chop(3, [1, 2, 3]), 2);
    test.equal(chop(4, [1, 2, 3]), -1);
    test.equal(chop(0, [1, 2, 3]), -1);
}

exports['find in n element array'] = function (test) {
	for (var n = 1; n <= 20; n++) {
		var values = [];

		for (var k = 0; k < n; k++)
			values[k] = k;

		for (var k = 0; k < n; k++)
			test.equal(chop(k, values), k);

		test.equal(chop(n, values), -1);
		test.equal(chop(-1, values), -1);
	}
}


