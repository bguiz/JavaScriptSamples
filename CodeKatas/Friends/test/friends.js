
var friends = require('../friends');

exports['friends of user without friends'] = function (test) {
    var adam = { name: 'Adam' };
    
    var result = friends.friendsOf(adam);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 1);
    
    test.ok(Array.isArray(result[0]));
    test.equal(result[0].length, 1);
    test.strictEqual(result[0][0], adam);
};

exports['only one friend'] = function (test) {
    var eve = { name: 'Eve' };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    var result = friends.friendsOf(adam);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 2);
    
    test.ok(Array.isArray(result[0]));
    test.equal(result[0].length, 1);
    test.strictEqual(result[0][0], adam);
    
    test.ok(Array.isArray(result[1]));
    test.equal(result[1].length, 1);
    test.strictEqual(result[1][0], eve);
};

exports['friend of a friend'] = function (test) {
    var abel = { name: 'Abel' };
    var eve = { name: 'Eve', friends: [ abel ] };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    var result = friends.friendsOf(adam);
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 3);
    
    test.ok(Array.isArray(result[0]));
    test.equal(result[0].length, 1);
    test.strictEqual(result[0][0], adam);

    test.ok(Array.isArray(result[1]));
    test.equal(result[1].length, 1);
    test.strictEqual(result[1][0], eve);

    test.ok(Array.isArray(result[2]));
    test.equal(result[2].length, 1);
    test.strictEqual(result[2][0], abel);
};

exports['friend of a friend with cycle'] = function (test) {
    var abel = { name: 'Abel' };
    var eve = { name: 'Eve', friends: [ abel ] };
    var adam = { name: 'Adam', friends: [ eve ] };
    
    abel.friends = [ adam ];
    
    var result = friends.friendsOf(adam);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 3);
    
    test.ok(Array.isArray(result[0]));
    test.equal(result[0].length, 1);
    test.strictEqual(result[0][0], adam);

    test.ok(Array.isArray(result[1]));
    test.equal(result[1].length, 1);
    test.strictEqual(result[1][0], eve);

    test.ok(Array.isArray(result[2]));
    test.equal(result[2].length, 1);
    test.strictEqual(result[2][0], abel);
};

exports['friend of a friend with repetition'] = function (test) {
    var caine = { name: 'Caine' };
    var abel = { name: 'Abel', friends: [ caine ] };
    var eve = { name: 'Eve', friends: [ abel, caine ] };
    var adam = { name: 'Adam', friends: [ eve, abel ] };
    
    var result = friends.friendsOf(adam);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 3);
    
    test.ok(Array.isArray(result[0]));
    test.equal(result[0].length, 1);
    test.strictEqual(result[0][0], adam);

    test.ok(Array.isArray(result[1]));
    test.equal(result[1].length, 2);
    test.strictEqual(result[1][0], eve);
    test.strictEqual(result[1][1], abel);

    test.ok(Array.isArray(result[2]));
    test.equal(result[2].length, 1);
    test.strictEqual(result[2][0], caine);
};