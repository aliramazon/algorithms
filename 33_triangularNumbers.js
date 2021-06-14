/* Bottom Up */

// Find nth number in triangular numbers seq
const triangularNumbers = (n) => {
    let seq = [1, 3];

    const searchNextNumber = (index) => {
        if (seq.length >= n) return;
        seq[index] = index + 1 + seq[index - 1];
        searchNextNumber(index + 1);
    };

    searchNextNumber(2);
    return seq[n - 1];
};

console.log(triangularNumbers(100));

/* Top down */

const triangularNumbers1 = (n) => {
    let result;
    if (n === 2) return 3;

    result = triangularNumbers1(n - 1) + n; // f(4) = f(3) + 4; f(3) = f(2) + 3 = 3 + 3 = 6

    return result;
};

console.log(triangularNumbers1(99));
