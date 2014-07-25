
function getFriends(users) {
    var friends = [];
    
    users.forEach(function (user) {
        if (!user.friends)
            return;
        friends = friends.concat(user.friends);
    });
    
    return friends;
}

function friendsOf(user) {
    var friends = getFriends([user]);
    var result = [];
    
    while (friends.length) {
        result.push(friends);
        friends = getFriends(friends);
    }
        
    return result;
}

module.exports = {
    friendsOf: friendsOf
}