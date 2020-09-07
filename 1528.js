var restoreString = function (s, indices) {
    let result = [];
    let print = "";
    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i];
    }
    for (let char in result) {
        print += result[char];
    }
    return print;
};