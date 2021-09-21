const highestProduct = (arr) => {
    let greatest1 = arr[0],
        greatest2 = arr[1],
        smallest1 = arr[0],
        smallest2 = arr[1];

    for (let num of arr) {
        if (greatest1 < num) {
            greatest2 = greatest1;
            greatest1 = num;
        } else if (greatest2 < num) {
            greatest2 = num;
        }

        if (smallest1 > num) {
            smallest2 = smallest1;
            smallest1 = num;
        } else if (smallest2 > num) {
            console.log("hello");
            smallest2 = num;
        }
    }

    let greatestProductFromTwoGreatest = greatest1 * greatest2;
    let greatestProductFromTwoLowest = smallest1 * smallest2;

    return greatestProductFromTwoGreatest > greatestProductFromTwoLowest
        ? greatestProductFromTwoGreatest
        : greatestProductFromTwoLowest;
};

console.log(
    highestProduct([3, 4, -67, 1, 7, 12, 6, 10, 2, -100009, -200, 13, -1000])
);
