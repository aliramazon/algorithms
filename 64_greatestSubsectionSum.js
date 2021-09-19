const greatestSubsectionSum = (arr) => {
    let sum = 0;
    let greatestSum = 0;

    for (let ele of arr) {
        sum += ele;

        if (greatestSum < sum) {
            greatestSum = sum;
        }

        if (sum < 0) {
            sum = 0;
        }
    }

    return greatestSum;
};

console.log(greatestSubsectionSum([3, -4, 4, -3, 5, -9]));
console.log(greatestSubsectionSum([3, -4, 4, -3, -5, 9]));
console.log(greatestSubsectionSum([3, -4, 4, -3, 15, -19]));
