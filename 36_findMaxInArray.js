/* Iterative way */

const maxNumber = (arr) => {
    let max = arr[0];

    for (let num of arr) {
        if (max < num) {
            max = num;
        }
    }

    return max;
};

// console.log(maxNumber([1]));
// console.log(maxNumber([1, 0.9, 0.8, -1]));
// console.log(maxNumber([2, 3, 1, 9, 1]));

/* Recursive */

const maxNumberRecursive = (arr) => {
    console.log("recursion");
    if (arr.length === 1) return arr[0];

    if (arr[0] > maxNumberRecursive(arr.slice(1))) {
        return arr[0];
    } else {
        return maxNumberRecursive(arr.slice(1));
    }
};

// console.log(maxNumberRecursive([1]));
// console.log(maxNumberRecursive([1, 0.9, 0.8, -1]));
// console.log(maxNumberRecursive([2, 3, 1, 9, 1]));

/* Dynamic Programming */

const maxNumberDynamic = (arr) => {
    console.log("recursion");
    if (arr.length === 1) return arr[0];

    const maxOfRemainder = maxNumberRecursive(arr.slice(1));

    if (arr[0] > maxOfRemainder) {
        return arr[0];
    } else {
        return maxOfRemainder;
    }
};

console.log(maxNumberDynamic([1]));
console.log(maxNumberDynamic([1, 0.9, 0.8, -1]));
console.log(maxNumberDynamic([2, 3, 1, 9, 1]));
