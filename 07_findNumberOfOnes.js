/*
Number of Ones in a Sorted Bit Array
Given a sorted bit array (values of either 0 or 1), determine the number of 1’s in the array.

Perform this in O(log(N)) time complexity.

Input: [0,0,0,1,1,1,1,1,1,1,1]

Output: 8
*/

const findNumberOfOnes = (bits) => {
	let start = 0;
	let end = bits.length - 1;
	let mid;

	if (bits[0] === 1) return bits.length;
	if (bits[bits.length - 1] === 0) return 0;

	while (end >= start) {
		mid = Math.floor((start + end) / 2);
		if (bits[mid] === 1 && bits[mid - 1] === 0) {
			return bits.length - mid;
		}

		if (bits[mid] === 0) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
};

console.log(findNumberOfOnes([1, 1, 1, 1]));
