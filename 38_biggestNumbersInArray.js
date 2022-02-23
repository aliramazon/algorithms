const findBiggestNumber = (nums) => {
    let max = nums[0];

    for (let num of nums) {
        if (max < num) max = num;
    }

    return max;
};

const findTwoBiggestNumbers = (nums) => {
    let [biggest1, biggest2] = [null, null];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (biggest1 === null || biggest1 < num) {
            biggest2 = biggest1;
            biggest1 = num;
        } else if (biggest2 === null || biggest2 < num) {
            biggest2 = num;
        }
    }

    return { biggest1, biggest2 };
};

const findThreeBiggestNumbers = (nums) => {
    let [biggest1, biggest2, biggest3] = [null, null, null];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (biggest1 === null || biggest1 < num) {
            biggest3 = biggest2;
            biggest2 = biggest1;
            biggest1 = num;
        } else if (biggest2 === null || biggest2 < num) {
            biggest3 = biggest2;
            biggest2 = num;
        } else if (biggest3 === null || biggest3 < num) {
            biggest3 = num;
        }
    }

    return { biggest1, biggest2, biggest3 };
};
