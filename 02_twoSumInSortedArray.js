/* Given a sorted array of integers and a target value, determine if there exists two integers in the array that sum up to the target value.
See if you can solve this in O(N) time and O(1) auxiliary space. */

const twoSumInSortedArray = (sortedArray, target) => {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        if (sortedArray[left] + sortedArray[right] === target) {
            return true;
        }
        if (sortedArray[left] + sortedArray[right] > target) {
            right--;
        }

        if (sortedArray[left] + sortedArray[right] < target) {
            left++;
        }
    }
    return false;
};

/* Solution Explanation */

/*
    We create pointers left and right staring 0 and last index of elemenent repectively.
    We loop until left becomes bigger than right. 
    If two element sums up to target, we return true.
    If two element's sum is bigger than target, we decrement right.
    If two element's sum is less than target, we increment left.
    If there is no match, we return false, after loop. 

*/

console.log(twoSumInSortedArray([1, 2, 3, 4, 9], 1));
console.log(twoSumInSortedArray([1, 2, 3, 4, 9, 11, 12, 23], 18));
