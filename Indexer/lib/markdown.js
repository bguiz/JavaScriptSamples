
function getContent(text, name) {
    let p = text.indexOf(name);
    
    if (p < 0)
        return null;

    p += name.length;
    
    let p2 = text.indexOf('\n', p);
    
    if (p2 < 0)
        p2 = text.length;
        
    let result = text.substring(p, p2).trim();
    
    if (result[0] === '"')
        result = result.substring(1);
        
    if (result[result.length - 1] === '"')
        result = result.substring(0, result.length - 1);
        
    return result;
}

function getTitle(text) {
    return getContent(text, 'title:');
}

function getDescription(text) {
    return getContent(text, 'description:');
}

function getHeader(text) {
    return getContent(text, '# ');
}

function getSummary(text) {
    return getContent(text, 'descriptionSummary:');
}

function getTags(text) {
    return getContent(text, 'tags:');
}

module.exports = {
    getTitle,
    getDescription,
    getHeader,
    getSummary,
    getTags
};
