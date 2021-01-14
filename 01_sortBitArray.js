/*  Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either a 1 or a 0).
 See if you can solve this in O(N) time and O(1) auxiliary space using Multiple pointers technique */

// Multiple pointers technique

// v1
const sortBitArray = (bitArray) => {
    let left = 0;
    let right = bitArray.length - 1;
    while (left < right) {
        while (bitArray[left] === 0) left++;
        while (bitArray[right] === 1) right--;

        if (left < right) {
            [bitArray[left], bitArray[right]] = [
                bitArray[right],
                bitArray[left]
            ];
        }
    }
    return bitArray;
};

// v2
const sortBitArray = (bitArray) => {
    let mid = 0;

    for (let i = 0; i < bitArray.length; i++) {
        if (bitArray[i] === 0) {
            [bitArray[mid], bitArray[i]] = [bitArray[i], bitArray[mid]];
            mid++;
        }
    }
    return bitArray;
};

console.log(sortBitArray([0, 1, 1, 1, 1, 0, 0, 0]));
/* Solution Explanation */

/* We are creating two pointers, left and right.
If element at index left is equal to 0, than we increment left.
If element at index right is equal to 1, than we decrement.
Once element at index left is 1 and element at index right 0, we swap. 
Swapping happens only left index is bigger than right index. 
*/

/* Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either 0 or 1).
 See if you can solve this in O(N) time and O(1) auxiliary space using Frequent count technique */

// Frequent Count technique

const sortBitArrayFC = (bitArray) => {
    const count = [0, 0];

    for (let ele of bitArray) {
        count[ele]++;
    }

    for (let i = 0; i < bitArray.length; i++) {
        if (i < count[0]) {
            bitArray[i] = 0;
        } else {
            bitArray[i] = 1;
        }
    }

    return bitArray;
};

console.log(sortBitArrayFC([0, 0, 0, 1, 1, 1, 0, 0, 1]));
