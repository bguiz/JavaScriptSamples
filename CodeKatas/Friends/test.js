
var friends = require('./friends');

exports['friends of user without friends'] = function (test) {
    var result = friends.friendsOf({ name: 'Adam' });
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 0);
};

exports['only one friend'] = function (test) {
    var eve = { name: 'Eve' };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    var result = friends.friendsOf(adam);
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 1);
    test.ok(Array.isArray(result[0]));
    test.equal(result[0].length, 1);
    test.strictEqual(result[0][0], eve);
};