const findFirstCharOccurance = (string, char) => {
    if (string[0] === char) return 0;

    return 1 + findFirstCharOccurance(string.slice(1), char);
};

console.log(findFirstCharOccurance("abcdef", "f"));
