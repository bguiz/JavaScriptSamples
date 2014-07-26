
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

function equals(test, generations, expected) {
    test.ok(generations);
    test.ok(expected);
    test.ok(Array.isArray(generations));
    test.ok(Array.isArray(expected));
    test.equal(generations.length, expected.length);
    
    for (var n in generations) {
        var value = generations[n];
        var expectedvalue = expected[n];
        
        if (Array.isArray(value))
            equals(test, value, expectedvalue);
        else
            test.strictEqual(value, expectedvalue);
    }
}
