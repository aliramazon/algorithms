const selectSort = (array) => {
    let indexWithMinValue;

    for (let i = 0; i < array.length - 1; i++) {
        indexWithMinValue = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[indexWithMinValue] > array[j]) {
                indexWithMinValue = j;
            }
        }

        if (i !== indexWithMinValue) {
            [array[i], array[indexWithMinValue]] = [
                array[indexWithMinValue],
                array[i]
            ];
        }
    }
    return array;
};

console.log(selectSort([0, 0, -2, 34, 45, 45, 31, 99, 1, 300]));
