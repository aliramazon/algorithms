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
console.log(uniquePaths(10, 20));

console.log("------");

const uniquePathsMemo = (rows, columns) => {
    let memo = new Map();

    const walk = (rows, columns) => {
        let combination = `${rows}, ${columns}`;
        if (rows === 1 || columns === 1) return 1;
        if (memo.has(combination)) {
            return memo.get(combination);
        }

        memo.set(
            combination,
            walk(rows - 1, columns) + walk(rows, columns - 1)
        );

        return memo.get(combination);
    };

    return walk(rows, columns);
};

console.log(uniquePathsMemo(1, 1));
console.log(uniquePathsMemo(1, 2));
console.log(uniquePathsMemo(2, 1));
console.log(uniquePathsMemo(2, 2));
console.log(uniquePathsMemo(2, 3));
console.log(uniquePathsMemo(3, 2));
console.log(uniquePathsMemo(10, 20));
