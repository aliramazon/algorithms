/* Given two sorted arrays of integers, combine the values into one sorted array?
Input: [1,3,5], [2,4,6,8,10]
Output: [1,2,3,4,5,6,8,10]
See if you can solve this in O(N+M) time and O(N+M) auxiliary space. */

const mergeTwoSortedArrays = (array1, array2) => {
    const mergedArrays = [];
    let i = 0;
    let j = 0;
    const totalElements = array1.length + array2.length;

    while (i + j < totalElements) {
        if (array1[i] > array2[j] || i >= array1.length) {
            mergedArrays.push(array2[j]);
            j++;
        } else {
            mergedArrays.push(array1[i]);
            i++;
        }
    }
    return mergedArrays;
};

console.log(mergeTwoSortedArrays([1, 10, 17, 19, 89], [3, 8, 8, 100, 101]));
console.log(mergeTwoSortedArrays([1, 10, 14, 19], [1, 7, 8, 18]));

/* Solution Explanation */

/* We create two pointers, i and j. i for array1, j for array2.
We need to iterate all the way down to array1 and array2 last elements.
So it is gonna be sum of their length.
We compare and push the less one to the result array.
*/
