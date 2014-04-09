
var values = [];

values[0] = 'zero';
values[1] = 'one';
values[2] = 'two';
values[3] = 'three';
values[4] = 'four';
values[5] = 'five';
values[6] = 'six';
values[7] = 'seven';
values[8] = 'eight';
values[9] = 'nine';

values[10] = 'ten';
values[11] = 'eleven';
values[12] = 'twelve';
values[13] = 'thirteen';
values[14] = 'fourteen';
values[15] = 'fifteen';
values[16] = 'sixteen';
values[17] = 'seventeen';
values[18] = 'eighteen';
values[19] = 'nineteen';

values[20] = 'twenty';
values[30] = 'thirty';
values[40] = 'forty';
values[50] = 'fifty';

function nums(value) {
    if (value >= 20) {
        var decvalue = Math.floor(value / 10) * 10;
        var restvalue = value % decvalue;
        
        if (!restvalue)
            return values[decvalue];
            
        return values[decvalue] + '-' + values[restvalue];
    }
    
    return values[value];
}

module.exports = nums;