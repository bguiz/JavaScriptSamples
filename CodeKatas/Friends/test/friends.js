
var friends = require('../friends');

exports['friends of user without friends'] = function (test) {
    var adam = { name: 'Adam' };
    
    var result = friends.friendsOf(adam);

    test.deepEqual(result, [[adam]]);
};

exports['only one friend'] = function (test) {
    var eve = { name: 'Eve' };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    var result = friends.friendsOf(adam);

    test.deepEqual(result, [[adam], [eve]]);
};

exports['friend of a friend'] = function (test) {
    var abel = { name: 'Abel' };
    var eve = { name: 'Eve', friends: [ abel ] };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    var result = friends.friendsOf(adam);
    
    test.deepEqual(result, [[adam], [eve], [abel]]);
};

exports['friend of a friend with cycle'] = function (test) {
    var abel = { name: 'Abel' };
    var eve = { name: 'Eve', friends: [ abel ] };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    abel.friends = [ adam ];
    
    var result = friends.friendsOf(adam);

    test.deepEqual(result, [[adam], [eve], [abel]]);
};

exports['friend of a friend with repetition'] = function (test) {
    var caine = { name: 'Caine' };
    var abel = { name: 'Abel', friends: [ caine ] };
    var eve = { name: 'Eve', friends: [ abel, caine ] };
    var adam = { name: 'Adam', friends: [ eve, abel ] };
    
    var result = friends.friendsOf(adam);
    
    test.deepEqual(result, [[adam], [eve, abel], [caine]]);
};

