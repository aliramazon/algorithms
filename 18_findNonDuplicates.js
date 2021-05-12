const findNonDuplicates = (string) => {
    const hash = {};
    const nonDuplicates = [];
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (hash[char]) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }

    for (let j = 0; j < string.length; j++) {
        let char = string[j];
        if (hash[char] === 1) nonDuplicates.push(char);
    }

    return nonDuplicates;
};

console.log(findNonDuplicates("pabcdabdp"));
console.log(findNonDuplicates("abcdabdp"));
