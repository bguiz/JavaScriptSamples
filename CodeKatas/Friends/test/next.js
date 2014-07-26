
var friends = require('../friends');

exports['next friends of user without friends'] = function (test) {
    var adam = { name: 'Adam' };
    
    var result = friends.nextFriends([[adam]]);
 
    equals(test, result, []);
};

exports['next friends of user with only one friend'] = function (test) {
    var eve = { name: 'Eve' };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    var result = friends.nextFriends([[adam]]);
 
    equals(test, result, [eve]);
};

exports['friend of a friend'] = function (test) {
    var abel = { name: 'Abel' };
    var eve = { name: 'Eve', friends: [ abel ] };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    var result = friends.nextFriends([[adam], [eve]]);
    
    equals(test, result, [abel]);
};

function equals(test, items, expected) {
    test.ok(items);
    test.ok(expected);
    test.ok(Array.isArray(items));
    test.ok(Array.isArray(expected));
    test.equal(items.length, expected.length);
    
    for (var n in items) {
        var item = items[n];
        var expecteditem = expected[n];
        test.strictEqual(item, expecteditem);
    }
}
