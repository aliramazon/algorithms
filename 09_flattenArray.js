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

console.log(flattenArray([1, 2, [1, 2, 3, [4, 5, 6, [124]]], [1, [3, [5]]]]));
