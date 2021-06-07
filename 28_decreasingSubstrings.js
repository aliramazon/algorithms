const decreasingSubstrings = (string) => {
    let subs = [];
    const cut = (string) => {
        if (string.length === 0) return;
        subs.push(string);
        cut(string.slice(1));
    };

    cut(string);
    return subs;
};

const decreasingSubstrings1 = (string) => {
    let subs = [];
    if (string.length === 0) return [];
    subs.push(string);
    return [...subs, ...decreasingSubstrings1(string.slice(1))];
};

console.log(decreasingSubstrings1("abcdefg"));
