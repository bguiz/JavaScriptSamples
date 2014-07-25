
function friendsOf(user) {
    if (!user.friends)
        return [];
        
    return [user.friends];
}

module.exports = {
    friendsOf: friendsOf
}