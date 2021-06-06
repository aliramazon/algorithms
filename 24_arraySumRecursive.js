const arraySumRecursive = (arr) => {
    if (arr.length === 1) return arr[0];
    return arr[0] + arraySumRecursive(arr.slice(1));
};

console.log(arraySumRecursive([1, 2, 3, 4, 5, 6, 7]));
