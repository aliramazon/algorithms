const flattenArray = (nestedArray) => {
    const flattened = [];

    for (let ele of nestedArray) {
        if (!Array.isArray(ele)) {
            flattened.push(ele);
        } else {
            flattened.push(...flattenArray(ele));
        }
    }

    return flattened;
};

const flattenArray1 = (nestedArray) => {
    const flattenedArray = [];

    const getElements = (nestedArray) => {
        for (let ele of nestedArray) {
            if (!Array.isArray(ele)) {
                flattenedArray.push(ele);
            } else {
                getElements(ele);
            }
        }
    };

    getElements(nestedArray);
    return flattenedArray;
};

console.log(flattenArray1([1, 2, [1, 2, 3, [4, 5, 6, [124]]], [1, [3, [5]]]]));
