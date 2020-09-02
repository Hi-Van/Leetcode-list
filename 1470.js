var shuffle = function (nums, n) {
    let combo = [];

    for (let i = 0; i < n; i++) {
        combo.push(nums[i]);
        combo.push(nums[i + n]);
    }

    return combo;
};