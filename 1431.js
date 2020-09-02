var kidsWithCandies = function (candies, extraCandies) {
    let max = 0;
    let results = [];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }

    for (let j = 0; j < candies.length; j++) {
        if (candies[j] + extraCandies >= max) {
            results.push(true);
        }

        else {
            results.push(false);
        }
    }

    return results;
};