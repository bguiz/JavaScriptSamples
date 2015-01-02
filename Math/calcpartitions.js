
var partitions = require('./partitions');

for (var k = 1; k <= 30; k++)
    console.dir(partitions.generateSums(1, k));
    
    