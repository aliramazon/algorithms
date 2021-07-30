const sumUpDeeplyNestedArray = (arr) => {
    let sum = 0;

    for (let ele of arr) {
        if (!Array.isArray(ele)) {
            sum += ele;
        } else {
            sum += sumUpDeeplyNestedArray(ele);
        }
    }

    return sum;
};

console.log(
    sumUpDeeplyNestedArray([1, [2, [3, [4]]], [5, 6, 7, [8, [9, [10]]]]])
);
