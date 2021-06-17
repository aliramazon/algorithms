const climbStairs = (n) => {
    if (n < 0) return 0;
    if (n <= 2) return n;
    if (n === 3) return 4;
    return climbStairs(n - 1) + climbStairs(n - 2) + climbStairs(n - 3);
};

const climbStairsMemo = (n) => {
    let memo = new Map();

    const climb = (n) => {
        if (memo.has(n)) return memo.get(n);
        if (n < 0) return 0;
        if (n <= 2) return n;
        if (n === 3) return 4;
        memo.set(n, climb(n - 1) + climb(n - 2) + climb(n - 3));

        return memo.get(n);
    };
    return climb(n);
};

console.log(climbStairs(0));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(6));
console.log(climbStairsMemo(100));
