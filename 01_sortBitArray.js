// Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either a 1 or a 0).
// See if you can solve this in O(N) time and O(1) auxiliary space.

const sortBitArray = (bitArray) => {
    let left = 0;
    let right = bitArray.length - 1;
    while (left < right) {
        bitArray[left] === 0 && left++;
        bitArray[right] === 1 && right--;
        if (left < right) {
            [bitArray[left], bitArray[right]] = [
                bitArray[right],
                bitArray[left],
            ];
        }
    }
    return bitArray;
};

/* Solution Explanation */

/* We are creating two pointers, left and right.
If element at index left is equal to 0, than we increment left.
If element at index right is equal to 1, than we decrement.
Once element at index left is 1 and element at index right 0, we swap. 
Swapping happens only left index is bigger than right index.
*/

console.log(sortBitArray([0, 1, 1, 1, 1, 0, 0, 0]));
