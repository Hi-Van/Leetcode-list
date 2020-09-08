var findLucky = function (arr) {
    arr = arr.sort();
    let num = -1;

    for (let i = 0; i < arr.length; i++) {
        let first = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]);
        let second = arr[i] - 1;
        if ((first === second) && arr[i] > num) {
            num = arr[i];
        }
    }

    return num;
};