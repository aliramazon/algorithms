/* Given n. Find nth fibonacci

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
