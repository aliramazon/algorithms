const reverseStringRecursive = (str) => {
    if (str.length === 1) return str[0];
    return reverseStringRecursive(str.slice(1)) + str[0];
};

console.log(reverseStringRecursive("abcdefg"));
