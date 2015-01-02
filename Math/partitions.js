
function generateSums(initial, total) {
    if (initial > total)
        return [];
        
    if (initial == total)
        return [[initial]];
        
    var result = [];
    
    for (var k = initial; k < total; k++) {        
        var sums = generateSums(k, total - k);
        
        sums.forEach(function (sum) {
            result.push([k].concat(sum));
        });
    }
    
    result.push([total]);
    
    return result;
}

module.exports = {
    generateSums: generateSums
}

