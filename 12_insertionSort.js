const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let tempValue = array[i];
        let prevPos = i - 1;

        while (prevPos >= 0) {
            if (array[prevPos] > tempValue) {
                array[prevPos + 1] = array[prevPos];
                prevPos--;
            } else {
                break;
            }
        }
        array[prevPos + 1] = tempValue;
    }

    return array;
};

console.log(insertionSort([0, -1, -2, 34, 45, 45, 31, 99, 1, 300, 0, 2, 200]));
console.log(insertionSort([2, 1, 3, 4, 5, 6]));
console.log(insertionSort([0, 0, 0, -1, 0, -2, -2]));
console.log(insertionSort([1, 7, 8, 2, -14]));
console.log(insertionSort([5, 4, 3, 2, 1]));
console.log(insertionSort([1, 0]));
