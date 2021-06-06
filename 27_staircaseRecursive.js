const countPathToTop = (n) => {
    if (n < 0) return 0;
    if (n <= 2) return n;
    if (n === 3) return 4;
    return (
        countPathToTop(n - 1) + countPathToTop(n - 2) + countPathToTop(n - 3)
    );
};

console.log(countPathToTop(0));
console.log(countPathToTop(1));
console.log(countPathToTop(2));
console.log(countPathToTop(3));
console.log(countPathToTop(4));
console.log(countPathToTop(5));
