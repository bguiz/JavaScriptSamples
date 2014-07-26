
var friends = require('../friends');

exports['next friends of user without friends'] = function (test) {
    var adam = { name: 'Adam' };
    
    var result = friends.nextFriends([[adam]]);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 0);
};

exports['next friends of user with only one friend'] = function (test) {
    var eve = { name: 'Eve' };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    var result = friends.nextFriends([[adam]]);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 1);

    test.strictEqual(result[0], eve);
};

