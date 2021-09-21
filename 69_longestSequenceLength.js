const longestSequenceLength = (arr) => {
    let count = {};
    let longestSeq = 0;
    let currentSeq = 0;

    for (let ele of arr) {
        count[ele] = true;
    }

    for (let ele of arr) {
        if (!count[ele - 1]) {
            while (count[ele]) {
                currentSeq++;
                if (currentSeq > longestSeq) {
                    longestSeq = currentSeq;
                }
                ele = ele + 1;
            }
            currentSeq = 0;
        }
    }

    return longestSeq;
};

console.log(
    longestSequenceLength([1, 3, 5, 7, 9, 11, 13, 2, 4, 98, 89, 34, 6])
);
console.log(
    longestSequenceLength([1, 3, 2, 5, 8, 10, 13, 4, 6, 9, 10, 11, 12, 13, 14])
);
