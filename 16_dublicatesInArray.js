const dublicatesInArray = (arr) => {
    const dublicates = [];
    const hash = {};

    for (let item of arr) {
        if (!hash[item]) {
            hash[item] = 1;
        } else {
            if (hash[item] === 1) {
                dublicates.push(item);
            }
            hash[item]++;
        }
    }
    return dublicates;
};

console.log(dublicatesInArray([1, 5, 3, 5, 67, 67, 100, 1, 4, 5, 67, 67]));
