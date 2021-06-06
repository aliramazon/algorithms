// Top down
const factorial = (number) => {
    if (number === 0) {
        return 1;
    }

    return number * factorial(number - 1);
};

console.log(factorial(5));

// Bottom up

const factorialBottomup = (n, product, i) => {
    if (i > n) return product;

    return factorialBottomup(n, product * i, i + 1);
};

console.log(factorialBottomup(5, 1, 1));
