var singleNumber = function (nums) {
    for (let i in nums) {
        if (nums.lastIndexOf(nums[i]) == nums.indexOf(nums[i])) {
            return nums[i]
        }
    }
};