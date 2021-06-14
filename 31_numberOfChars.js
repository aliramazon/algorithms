const numberOfChars = (strings) => {
    if (strings.length === 0) return 0;
    return strings[0].length + numberOfChars(strings.slice(1));
};

console.log(numberOfChars(["abc", "cd", "a", "abc", "cd", "a", "abcd"]));
