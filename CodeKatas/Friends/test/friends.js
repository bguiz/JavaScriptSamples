
var friends = require('../friends');

exports['friends of user without friends'] = function (test) {
    var adam = { name: 'Adam' };
    
    var result = friends.friendsOf(adam);

    equals(test, result, [[adam]]);
};

exports['only one friend'] = function (test) {
    var eve = { name: 'Eve' };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    var result = friends.friendsOf(adam);

    equals(test, result, [[adam], [eve]]);
};

exports['friend of a friend'] = function (test) {
    var abel = { name: 'Abel' };
    var eve = { name: 'Eve', friends: [ abel ] };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    var result = friends.friendsOf(adam);
    
    equals(test, result, [[adam], [eve], [abel]]);
};

exports['friend of a friend with cycle'] = function (test) {
    var abel = { name: 'Abel' };
    var eve = { name: 'Eve', friends: [ abel ] };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    abel.friends = [ adam ];
    
    var result = friends.friendsOf(adam);

    equals(test, result, [[adam], [eve], [abel]]);
};

exports['friend of a friend with repetition'] = function (test) {
    var caine = { name: 'Caine' };
    var abel = { name: 'Abel', friends: [ caine ] };
    var eve = { name: 'Eve', friends: [ abel, caine ] };
    var adam = { name: 'Adam', friends: [ eve, abel ] };
    
    var result = friends.friendsOf(adam);
    
    equals(test, result, [[adam], [eve, abel], [caine]]);
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