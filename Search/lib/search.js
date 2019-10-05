
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

module.exports = {
    split: split
};

