var twoSum = function (nums, target) {
    let compliments = {};
    for (let i in nums) {
        if (compliments[nums[i]] >= 0) {
            return [compliments[nums[i]], i]
        }

        else {
            compliments[target - nums[i]] = i;
        }
    }
};