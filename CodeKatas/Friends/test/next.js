
var friends = require('../friends');

exports['next friends of user without friends'] = function (test) {
    var adam = { name: 'Adam' };
    
    var result = friends.nextFriends([[adam]]);
 
    test.deepEqual(result, []);
};

exports['next friends of user with only one friend'] = function (test) {
    var eve = { name: 'Eve' };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    var result = friends.nextFriends([[adam]]);
 
    test.deepEqual(result, [eve]);
};

exports['friend of a friend'] = function (test) {
    var abel = { name: 'Abel' };
    var eve = { name: 'Eve', friends: [ abel ] };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    var result = friends.nextFriends([[adam], [eve]]);
    
    test.deepEqual(result, [abel]);
};

