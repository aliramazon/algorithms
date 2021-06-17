/* Bottom Up */

// [0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const nthFibonacciBottomUp = (n) => {
    const fibs = [0, 1];

    const calcFibonacci = (i) => {
        if (i > n) return;
        fibs[i] = fibs[i - 2] + fibs[i - 1];
        calcFibonacci(i + 1);
    };

    calcFibonacci(2);

    return fibs[n];
};

const nthFibonacciBottomUpOptimize = (n) => {
    let a = 0,
        b = 1;

    const calcFibonacci = (i) => {
        if (i > n) {
            return;
        }
        [a, b] = [b, a + b];
        calcFibonacci(i + 1);
    };

    calcFibonacci(2);
    return b;
};
// console.log(nthFibonacciBottomUpOptimize(10));

const nthFibonacciBottomUpLenear = (n) => {
    let a = 0,
        b = 1,
        i = 2;
    if (n === 0) return a;
    while (i <= n) {
        [a, b] = [b, a + b];
        i++;
    }
    return b;
};

console.log(nthFibonacciBottomUpLenear(0));

/* Top down */

const nthFibonacciTopDown = (n) => {
    let searchFib = (index) => {
        if (index < 2) return index;
        return searchFib(index - 2) + searchFib(index - 1);
    };

    return searchFib(n);
};

// console.log(nthFibonacciTopDown(10));

const nthFibonacciTopDownMemoization = (n) => {
    let memo = new Map();
    let searchFib = (index) => {
        if (memo.has(index)) return memo.get(index);
        if (index < 2) {
            memo.set(index, index);
            return index;
        } else {
            memo.set(index, searchFib(index - 2) + searchFib(index - 1));
            return memo.get(index);
        }
    };
    return searchFib(n);
};

// console.log(nthFibonacciTopDownMemoization(100));

const nthFibonacciTopDownMemoization1 = (n, memo) => {
    if (n < 2) return n;

    if (memo.has(n)) return memo.get(n);

    memo.set(
        n,
        nthFibonacciTopDownMemoization1(n - 1, memo) +
            nthFibonacciTopDownMemoization1(n - 2, memo)
    );
    return memo.get(n);
};

// console.log(nthFibonacciTopDownMemoization1(100, new Map()));

const nthFibonacciTopDownMemoization2 = (n, memo) => {
    if (n < 2) return n;

    if (!memo[n]) {
        memo[n] =
            nthFibonacciTopDownMemoization2(n - 1, memo) +
            nthFibonacciTopDownMemoization2(n - 2, memo);
    }

    return memo[n];
};

// console.log(nthFibonacciTopDownMemoization2(100, {}));
