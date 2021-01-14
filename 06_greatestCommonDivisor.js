/*
Given two integers, find the greatest common divisor (GCD).

Input: 52, 78

Output: 26
*/
const findGCD = (num1, num2) => {
    while (num2 > 0) {
        [num1, num2] = [num2, num1 % num2];
    }

    return num1;
};

console.log(findGCD(133, 42));
