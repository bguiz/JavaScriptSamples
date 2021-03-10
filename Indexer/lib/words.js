
const specials = [ 'title', 'tags', 'description', 'descriptionsummary' ];
const extraletters = 'áéíóúäëïöüàèìòùñ';
const extralettersConverted = 'aeiouaeiouaeioun';
const excludedWordsList = [
    'the', 'with', 'can', 'all', 'you', 'and', 'here', 'com', 'org',
    'for', 'will', 'not', 'from', 'which', 'should', 'need', 'but',
    'nbsp', 'your', 'png', 'when', 'does', 'doesn', 'this', 'its', 'must',
    'none', 'they', 'that', 'out', 'look', 'get', 'www',
];
const excludedWords = new Map();
excludedWordsList.forEach((excludedWord) => {
    excludedWords.set(excludedWord, true);
});

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

    return adjustedCountWords(result);
}

function adjustedCountWords(wordMap) {
    const uniqueWords = Object.keys(wordMap); 
    const uniqueWordCount = uniqueWords.length;
    console.log({
        uniqueWordCount,
        uniqueWords: uniqueWords.length,
    });

    const result = {};
    uniqueWords.forEach((word) => {
        const weight = wordMap[word];
        const adjustedWeight = Math.floor(weight * 1e4 / uniqueWordCount);
        result[word] = adjustedWeight;
    });
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
    let frontMatterSeparatorCount = 0;
    let word = '';
    let factor = 1;
    
    for (let k = 0; k < l; k++) {
        const ch = text[k];
        
        if (isLetter(ch))
            word += ch;
        else if (isExtendedLetter(ch))
            word += normaliseExtendedLetter(ch);
        else if (word.length > 0) {
            if (ch === ':' && first
               && frontMatterSeparatorCount < 2) {
                if (specials.indexOf(word) >= 0) {
                    word = '';
                    factor = 16;
                    continue;
                }
            }

            if (word.length > 2 && !excludedWords.has(word)) {
                if (factor > 1)
                    word += '*' + factor;

                words.push(word);
            }

            word = '';
            first = false;
        }

        if (first && ch === '-'
            && text[k+1] === '-'
            && text[k+2] === '-'
            && text[k+3] === '\n') {
            k += 2;
            word = '';
            first = false;
            frontMatterSeparatorCount += 1;
        }
        
        if (ch === '\n') {
            factor = 1;
            first = true;
        }
        
        if (ch === '#' && first) {
            if (text[k + 1] != '#')
                factor = 16;
            else if (text[k + 2] != '#') {
                factor = 8;
                k += 1;
            }
            else if (text[k + 3] != '#') {
                factor = 4;
                k += 2;
            }
            else {
                factor = 2;
                k += 3;
            }
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
    return (ch >= 'a' && ch <= 'z');
}

function isExtendedLetter(ch) {
    return (extraletters.indexOf(ch) >= 0);
}

function normaliseExtendedLetter(ch) {
    return extralettersConverted.charAt(extraletters.indexOf(ch));
}

module.exports = {
    toWords,
    countWords,
    collectWords
}