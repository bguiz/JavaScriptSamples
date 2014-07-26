
function getFriends(users) {
    var friends = [];
    
    users.forEach(function (user) {
        if (!user.friends)
            return;
        union(friends, user.friends);
    });
    
    return friends;
}

function nextFriends(friends) {
    var newfriends = getFriends(friends[friends.length - 1]);
    
    friends.forEach(function (oldfriends) {
        newfriends = remove(newfriends, oldfriends);
    });
    
    return newfriends;
}

function friendsOf(user) {
    var result = [[user]];
    var friends = nextFriends(result);
    
    while (friends.length) {
        result.push(friends);
        friends = nextFriends(result);
    }
        
    return result;
}

function union(friends, newfriends) {
    newfriends.forEach(function (newfriend) {
        if (friends.indexOf(newfriend) < 0)
            friends.push(newfriend);
    });
}

function remove(friends, oldfriends) {
    var result = [];
    
    friends.forEach(function (friend) {
        if (oldfriends.indexOf(friend) < 0)
            result.push(friend);
    });
    
    return result;
}

module.exports = {
    friendsOf: friendsOf,
    nextFriends: nextFriends
}

