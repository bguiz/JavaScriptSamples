
function split(text) {
    const lines = text.split('\n');
    const p = text.indexOf('\r');
    
    const eol = p >= 0 ? '\r\n' : '\n';
    
    const fragments = [];
    
    let fragment = '';
    
    for (let k = 0, l = lines.length; k < l; k++) {
        const line = lines[k].trim();
        
        if (line.length)
            fragment += line + eol;
        else if (fragment.length) {
            fragments.push(fragment);
            fragment = '';
        }
    }
    
    if (fragment.length)
        fragments.push(fragment);
    
    return fragments;
}

function contains(text, words) {
    text = text.toLowerCase();
    
    for (let k = 0, l = words.length; k < l; k++) {
        const word = words[k];
        
        if (word[0] === '~') {
            if (text.indexOf(word.substring(1)) >= 0)
                return false;
        }
        else if (text.indexOf(word) < 0)
            return false;
    }
    
    return true;
}

module.exports = {
    split: split,
    contains: contains
};

