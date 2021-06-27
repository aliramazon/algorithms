const findBiggestNumber = (nums) => {
    let max = nums[0];

    for (let num of nums) {
        if (max < num) max = num;
    }

    return max;
};

console.log(findBiggestNumber([1, 22, 3, 44, 12, 10]));

const findTwoBiggestNumbers = (nums) => {
    let [biggest1, biggest2] = [nums[0], nums[1]];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (biggest1 < num) {
            biggest2 = biggest1;
            biggest1 = num;
        } else if (biggest2 < num) {
            biggest2 = num;
        }
    }

    return { biggest1, biggest2 };
};

console.log(findTwoBiggestNumbers([2100, 12010, 22, 3, 20900, 12, 10, 120000]));
console.log(findTwoBiggestNumbers([2100, 12010, 22, 3, 100000, 12, 10, 120]));

const findThreeBiggestNumbers = (nums) => {
    let [biggest1, biggest2, biggest3] = [nums[0], nums[1], nums[2]];

    for (let i = 3; i < nums.length; i++) {
        let num = nums[i];

        if (biggest1 < num) {
            biggest3 = biggest2;
            biggest2 = biggest1;
            biggest1 = num;
        } else if (biggest2 < num) {
            biggest3 = biggest2;
            biggest2 = num;
        } else if (biggest3 < num) {
            biggest3 = num;
        }
    }

    return { biggest1, biggest2, biggest3 };
};

console.log(
    findThreeBiggestNumbers([
        1235, 34, 120, 45, 467, -120, -1220, 10000, 8999, 1234
    ])
);
