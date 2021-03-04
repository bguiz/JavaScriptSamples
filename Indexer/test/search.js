
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

