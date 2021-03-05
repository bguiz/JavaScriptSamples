
const search = require('../lib/search');

exports['or'] = function (test) {
    const result = search.or(
        { '0': 10, '1': 20 },
        { '1': 10, '2': 5 }
    );
    
    test.ok(result);
    test.deepEqual(result, {
        '0': 10,
        '1': 30,
        '2': 5
    });
};

exports['and'] = function (test) {
    const result = search.and(
        { '0': 10, '1': 25 },
        { '1': 10, '2': 5 }
    );
    
    test.ok(result);
    test.deepEqual(result, {
        '1': 10
    });
};

exports['sort'] = function (test) {
    const result = search.sort(
        { '0': 10, '1': 25, '2': 5 }
    );
    
    test.ok(result);
    test.deepEqual(result, [
        { i: '1', v: 25 },
        { i: '0', v: 10 },
        { i: '2', v: 5 }
    ]);
};

