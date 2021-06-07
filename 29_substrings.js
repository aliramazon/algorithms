const increasingSubstrings = (string) => {
    let subs = [];
    const cut = (n) => {
        if (n === string.length) return;
        subs.push(string.slice(0, n + 1));
        cut(n + 1);
    };

    cut(0);
    return subs;
};

const subStrings = (string) => {
    let subs = [];

    for (let i = 0; i < string.length; i++) {
        subs.push(...increasingSubstrings(string.slice(i)));
    }
    return subs;
};

console.log(subStrings("abcd"));
