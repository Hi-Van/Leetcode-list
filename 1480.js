var runningSum = function (nums) {
    let results = [];
    let tempSum = 0;

    for (var i = 1; i <= nums.length; i++) {
        tempSum = 0;

        for (var j = 0; j < i; j++) {
            tempSum += nums[j];
        }

        results.push(tempSum);
    }

    return results;
};