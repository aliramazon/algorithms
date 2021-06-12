const anagrams1 = (string) => {
    let createAnagrams = (string) => {
        let anagrams = [];
        if (string.length === 1) return [string];

        const substringAnagrams = [
            ...anagrams,
            ...createAnagrams(string.slice(1))
        ];

        for (let substringAnagram of substringAnagrams) {
            for (let i = 0; i < string.length; i++) {
                let chars = substringAnagram.split("");
                chars.splice(i, 0, string[0]);
                anagrams.push(chars.join(""));
            }
        }

        return anagrams;
    };

    return createAnagrams(string);
};

const anagrams = (string) => {
    let collection = [];
    if (string.length === 1) return [string];

    const substringAnagrams = anagrams(string.slice(1));

    for (let substringAnagram of substringAnagrams) {
        for (let i = 0; i < string.length; i++) {
            let chars = substringAnagram.split("");
            chars.splice(i, 0, string[0]);
            collection.push(chars.join(""));
        }
    }

    return collection;
};

console.log(anagrams("abc"));
