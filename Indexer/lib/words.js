
function countWords(words) {
    const result = {};
    const l = words.length;
    
    for (let k = 0; k < l; k++) {
        const word = words[k];
        
        if (result[word])
            result[word]++;
        else
            result[word] = 1;
    }

    return result;
}

function toWords(text) {
    const words = [];
    
    if (!text)
        return words;
        
    text = text.toLowerCase();
    
    const l = text.length;
    
    let word = '';
    
    for (let k = 0; k < l; k++) {
        const ch = text[k];
        
        if (isLetter(ch))
            word += ch;
        else if (word.length > 0) {
            words.push(word);
            word = '';
        }
    }
    
    if (word.length)
        words.push(word);
        
    return words;
}

function isLetter(ch) {
    return ch >= 'a' && ch <= 'z';
}

module.exports = {
    toWords,
    countWords
}