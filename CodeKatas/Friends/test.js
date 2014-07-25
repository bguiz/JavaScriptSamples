
var friends = require('./friends');

exports['friends of user without friends'] = function (test) {
    var result = friends.friendsOf({ name: 'Adam' });
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 0);
};