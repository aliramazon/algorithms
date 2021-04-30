const findNeedleInHaystack = (needle, haystack) => {
    let isNeedleThere = false;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (needle[j] === haystack[i + j]) {
                    isNeedleThere = true;
                } else {
                    isNeedleThere = false;
                    break;
                }
            }
            if (isNeedleThere) return isNeedleThere;
        }
    }
    return isNeedleThere;
};

console.log(findNeedleInHaystack("abccdf", "werasabccdef"));
console.log(findNeedleInHaystack("afc", "wedsadaf"));
console.log(findNeedleInHaystack("afaa", "aaafaa"));
console.log(findNeedleInHaystack("afbcc", "afbcc"));
