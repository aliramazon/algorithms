const duplicatesInArray = (arr) => {
    const duplicates = [];
    const hash = {};

    for (let item of arr) {
        if (!hash[item]) {
            hash[item] = 1;
        } else {
            if (hash[item] === 1) {
                duplicates.push(item);
            }
            hash[item]++;
        }
    }
    return dublicates;
};

console.log(duplicatesInArray([1, 5, 3, 5, 67, 67, 100, 1, 4, 5, 67, 67]));
