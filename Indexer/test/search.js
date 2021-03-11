
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

exports['get normal link'] = function (test) {
    const result = search.link(
        { n:'/topic/' }
    );
    
    test.equal(result, '/topic/');
};

exports['remove .md from name'] = function (test) {
    const result = search.link(
        { n:'/topic/topic1.md' }
    );
    
    test.equal(result, '/topic/topic1/');
};

exports['use permalink'] = function (test) {
    const result = search.link(
        { n:'/topic/index.md', l: '/permalink/' }
    );
    
    test.equal(result, '/permalink/');
};

