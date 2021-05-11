const missingLetter = (string) => {
    const alphabet = "abcdefghiajklmnopqrstuvwxyz";
    const hash = {};

    for (let i = 0; i < string.length; i++) {
        hash[string[i]] = true;
    }

    for (let j = 0; j < alphabet.length; j++) {
        if (!hash[alphabet[j]]) {
            return alphabet[j];
        }
    }
};

console.log(missingLetter("abcdefghijklnopqrstuvwxyz"), "m");
console.log(missingLetter("abcdefghijklmnopqrstuwxyz"), "v");
