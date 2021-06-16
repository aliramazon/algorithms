const uniquePaths = (rows, columns) => {
    if (rows === 1 || columns === 1) return 1;

    return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1);
};

console.log(uniquePaths(1, 1));
console.log(uniquePaths(1, 2));
console.log(uniquePaths(2, 1));
console.log(uniquePaths(2, 2));
console.log(uniquePaths(2, 3));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(3, 3));
