const countCharRecursive = (str, char) => {
    if (str.length === 0) return 0;
    if (str[0] === char) {
        return 1 + countCharRecursive(str.slice(1), char);
    } else {
        return countCharRecursive(str.slice(1), char);
    }
};

console.log(countCharRecursive("hello", "0"));
