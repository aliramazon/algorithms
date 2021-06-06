/* Given n. Find nth fibonacci. Bottom Up

Fibonacci Example

[0,1,1,2,3,5,8...]

*/

const nthFibonacci = (n) => {
    const fibs = [0, 1];

    const calcFibonacci = (i) => {
        if (i > n) return;
        fibs[i] = fibs[i - 2] + fibs[i - 1];
        calcFibonacci(i + 1);
    };

    calcFibonacci(2);

    return fibs[n];
};

console.log(nthFibonacci(10));

/* Top down */

const nthFibonacci1 = (n) => {
    let result;

    let searchFib = (index) => {
        if (index < 2) {
            return index;
        } else {
            return searchFib(index - 2) + searchFib(index - 1);
        }
    };
    result = searchFib(n);
    return result;
};

console.log(nthFibonacci1(10));
