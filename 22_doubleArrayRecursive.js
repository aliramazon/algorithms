const doubleArrayInplace = (array) => {
    const doubleValue = (startIndex) => {
        if (startIndex > array.length - 1) {
            return;
        } else {
            array[startIndex] *= 2;
            doubleValue(startIndex + 1);
        }
    };

    doubleValue(0);
    return array;
};

const doubleArrayInplace1 = (array, startIndex = 0) => {
    const doubleValue = (startIndex) => {
        if (startIndex > array.length - 1) {
            return;
        } else {
            array[startIndex] *= 2;
            doubleValue(startIndex + 1);
        }
    };

    doubleValue(startIndex);
    return array;
};

const doubleArrayInplace2 = (array, startIndex = 0) => {
    if (startIndex >= array.length) {
        return;
    }
    array[startIndex] *= 2;
    doubleArrayInplace2(array, startIndex + 1);
    return array;
};

console.log(doubleArrayInplace2([1, 2, 3, 4, 5]));
