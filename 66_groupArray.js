const groupArray = (chars) => {
    let groupedChars = [];
    let count = {};

    for (let char of chars) {
        if (!count[char]) {
            count[char] = 1;
        } else {
            count[char]++;
        }
    }

    for (let key in count) {
        for (let i = 0; i < count[key]; i++) {
            groupedChars.push(key);
        }
    }

    return groupedChars;
};

console.log(groupArray("aadddeeeddwwwaaacccjjjkkk"));
