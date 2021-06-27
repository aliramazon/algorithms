const findMissingNumber = (nums) => {
    let perfectSeqSum = (nums.length * (nums.length + 1)) / 2;

    let sum = 0;
    for (let num of nums) {
        sum += num;
    }

    return perfectSeqSum - sum;
};

console.log(findMissingNumber([0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
