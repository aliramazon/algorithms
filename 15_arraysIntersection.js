const arraysIntersection = (arr1, arr2) => {
    let largerArr,
        smallerArr,
        hash = {},
        intersection = [];
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
        if (hash[value]) intersection.push(value);
    }

    return intersection;
};

console.log(arraysIntersection([1, 2, 4], [2, 3, 4, 5, 1]));
console.log(arraysIntersection([1, 2, 4], [2, 3, 4, 5]));
