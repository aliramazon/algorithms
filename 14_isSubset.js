// Brutforce approach
/*const isSubset = (arr1, arr2) => {
    let largerArr, smallerArr;
    if (arr1.length > arr2.length) {
        largerArr = arr1;
        smallerArr = arr2;
    } else {
        largerArr = arr2;
        smallerArr = arr1;
    }

    for (let i = 0; i < smallerArr.length; i++) {
        let foundMatch = false;
        for (let j = 0; j < largerArr.length; j++) {
            if (smallerArr[i] === largerArr[j]) {
                foundMatch = true;
                break;
            }
        }
        if (!foundMatch) return foundMatch;
    }

    return true;
}; */

// O(n)

const isSubset = (arr1, arr2) => {
    let largerArr,
        smallerArr,
        hash = {};
    if (arr1.length > arr2.length) {
        largerArr = arr1;
        smallerArr = arr2;
    } else {
        largerArr = arr2;
        smallerArr = arr1;
    }

    for (let value of largerArr) {
        hash[value] = true;
    }

    for (let value of smallerArr) {
        if (!hash[value]) {
            return false;
        }
    }
    return true;
};

console.log(isSubset([1, 2, 4], [2, 3, 4, 5, 1]));
console.log(isSubset([1, 2, 4], [2, 3, 4, 5]));
