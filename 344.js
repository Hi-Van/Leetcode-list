var reverseString = function (s) {
    let temp;
    for (let left = 0, right = s.length - 1; left < right; left++, right--) {
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
    }
};