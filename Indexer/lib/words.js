
const specials = [ 'title', 'tags', 'description' ];

function countWords(words) {
    const result = {};
    const l = words.length;
        
    for (let k = 0; k < l; k++) {
        let word = words[k];
        
        const p = word.indexOf('*');
        let weight = 1;
        
        if (p >= 0) {
            weight = parseInt(word.substring(p + 1));
            word = word.substring(0, p);
        }    
                
        if (result[word])
            result[word] += weight;
        else
            result[word] = weight;
    }

    return result;
}

function collectWords(result, words, key) {
    for (let word in words) {
        if (!result[word])
            result[word] = {};
            
        result[word][key] = words[word];
    }   
}

function toWords(text) {
    const words = [];
    
    if (!text)
        return words;
        
    text = text.toLowerCase();
    
    const l = text.length;
    let first = true;    
    let word = '';
    let factor = 1;
    
    for (let k = 0; k < l; k++) {
        const ch = text[k];
        
        if (isLetter(ch))
            word += ch;
        else if (word.length > 0) {
            if (ch === ':' && first) {
                if (specials.indexOf(word) >= 0) {
                    word = '';
                    factor = 16;
                    continue;
                }
            }
            
            if (factor > 1)
                word += '*' + factor;
                
            words.push(word);
            word = '';
            first = false;
        }
        
        if (ch === '\n') {
            factor = 1;
            first = true;
        }
    }
    
    if (word.length) {
        if (factor > 1)
            word += '*' + factor;
            
        words.push(word);
    }
        
    return words;
}

function isLetter(ch) {
    return ch >= 'a' && ch <= 'z';
}

module.exports = {
    toWords,
    countWords,
    collectWords
}