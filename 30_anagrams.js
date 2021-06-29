/* All Anagrams of String */
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

/* Check if two strings anagrams */

// O(N + M) Time complexity.
// O(N + M) Space

const isAnagram = (str1, str2) => {
    let str1Chars = {};
    let str2Chars = {};

    let countChars = (hash, str) => {
        for (let char of str) {
            if (!hash[char]) {
                hash[char] = 1;
            } else {
                hash[char]++;
            }
        }
    };
    countChars(str1Chars, str1);
    countChars(str2Chars, str2);

    for (let key in str1Chars) {
        if (str1Chars[key] !== str2Chars[key]) {
            return false;
        }
    }
    for (let key in str2Chars) {
        if (str2Chars[key] !== str1Chars[key]) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram("abcdd", "ddabca"));
console.log(isAnagram("aaaab", "baaaa"));
