const isPalindrome = (str) => {
    let mid = Math.floor(str.length / 2);

    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// console.log(isPalindrome("a"));
// console.log(isPalindrome("ab"));
// console.log(isPalindrome("aba"));
// console.log(isPalindrome("abccba"));
// console.log(isPalindrome("abccbaa"));
// console.log(isPalindrome("abccbab"));
// console.log(isPalindrome("abccda"));
// console.log(isPalindrome("abcdzdcba"));

console.log("-----");

const isPalindrome1 = (str) => {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;

    return isPalindrome1(str.slice(1, -1));
};

// console.log(isPalindrome1("a"));
// console.log(isPalindrome1("ab"));
// console.log(isPalindrome1("aba"));
// console.log(isPalindrome1("abccba"));
// console.log(isPalindrome1("abccbaa"));
// console.log(isPalindrome1("abccbab"));
// console.log(isPalindrome1("abccda"));
// console.log(isPalindrome1("abcdzdcba"));

// Brutforce O(N^3)
const findLongestPalindrome = (str) => {
    let longestPalindrome = str[0];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let subString = str.slice(i, j);
            if (
                isPalindrome(subString) &&
                longestPalindrome.length < subString.length
            ) {
                longestPalindrome = subString;
            }
        }
    }

    return longestPalindrome;
};
console.log(isPalindrome("bcbbcbbcb"));
console.log(findLongestPalindrome("abcddcbabbc aba bcbbcbbcb"));
