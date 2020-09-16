var moveZeroes = function (nums) {
    let swap = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let temp = nums[swap];
            nums[swap] = nums[i];
            nums[i] = temp;
            swap++;
        }
    }
};