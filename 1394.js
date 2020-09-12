var findLucky = function(arr) {
    let dict = {};
    let num = -1;
    for (let i = 0; i < arr.length; i++) {
        dict[arr[i]] = (dict[arr[i]] || 0) + 1;
    }
    
    for (let key in dict) {
        if (dict[key] == key && key > num) {
            num = dict[key];
        }
    }
    return num;
};