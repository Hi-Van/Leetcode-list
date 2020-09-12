var reverseOnlyLetters = function(s) {
    let letters = [];
    let result = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() != s[i].toUpperCase()) {
            letters.push(s[i]);
        }
    }
    let track = letters.length - 1;
    for (let j = 0; j < s.length; j++) {
        if (s[j].toLowerCase() != s[j].toUpperCase()) {
            result.push(letters[track]);
            track--;
        }
        
        else {
            result.push(s[j]);
        }
    }
    
    return result.join('');
};