
function getFriends(users) {
    var friends = [];
    
    users.forEach(function (user) {
        if (!user.friends)
            return;
        union(friends, user.friends);
    });
    
    return friends;
}

function friendsOf(user) {
    var friends = getFriends([user]);
    var result = [];
    
    while (friends.length) {
        result.push(friends);
        friends = getFriends(friends);
        
        result.forEach(function (oldfriends) {
            friends = remove(friends, oldfriends);
        });
        
        friends = remove(friends, [user]);
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
    friendsOf: friendsOf
}

