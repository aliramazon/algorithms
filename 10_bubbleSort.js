const bubbleSort = (array) => {
    let shouldSort = true;
    let lastUnsorted = array.length - 1;

    while (shouldSort) {
        shouldSort = false;
        for (let i = 0; i < lastUnsorted; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                shouldSort = true;
            }
        }
        lastUnsorted--;
    }
    return array;
};

console.log(bubbleSort([12, 9, 0, 1, 45, -1, -100, 1]));
