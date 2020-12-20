/* Given an array of integers, and a target value determine if there are two integers that add to the sum. */

// v1
const twoSumInArray = (array, target) => {
    const hash = {};

    for (let ele of array) {
        if (hash[ele]) return true;
        hash[target - ele] = true;
    }
    return false;
};

console.log(twoSumInArray([1, 2, 3, 100], 101));

// v2

const twoSumInArrayIndex = (array, target) => {
    const hash = {};

    let i = 0;
    while (i < array.length) {
        const ele = array[i];
        if (hash[ele] || hash[ele] === 0) return [hash[ele], i];
        console.log(i);
        hash[target - ele] = i;
        i++;
    }
    return false;
};

console.log(twoSumInArrayIndex([1, 2, 76, 45, 34, 3, 100], 79));
console.log(twoSumInArrayIndex([1], 79));
