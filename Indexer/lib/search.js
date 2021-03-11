
function or(index1, index2) {
    const result = {};
    
    for (let n in index1)
        result[n] = index1[n];
        
    for (let n in index2)
        if (result[n])
            result[n] += index2[n];
        else
            result[n] = index2[n];
            
    return result;
}

function and(index1, index2) {
    const result = {};
    
    for (let n in index1)
        if (index2[n])
            result[n] = Math.min(index1[n], index2[n]);
            
    return result;
}

function sort(index) {
    const list = [];
    
    for (let n in index)
        list.push({ i: n, v: index[n] });
        
    list.sort(function(a, b) {
        if (a.v < b.v)
            return 1;
            
        if (a.v > b.v)
            return -1;
            
        return 0;
    });
    
    return list;
}

function link(file) {
    if (file.l)
        return file.l;
        
    const name = file.n;
    
    if (name.endsWith('/index.md'))
        return name.substring(0, name.length - 8);

    if (name.endsWith('.md'))
        return name.substring(0, name.length - 3) + '/';
        
    return name;
}

module.exports = {
    or,
    and,
    sort,
    link
};