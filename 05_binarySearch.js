/* Given a sorted array of unique integers, and a target value determine the index of a matching value within the array. If there is not match, return -1.
Input: [1,3,4,5,6,7,8,10,11,13,15,17,20,22], 17
Output: 11
*/

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) return mid;

        arr[mid] > target ? (end = mid - 1) : (start = mid + 1);
    }

    return -1;
};

console.log(binarySearch([0, 2, 3, 5, 6, 14], 12));
