const filterOddsOut = (numbers) => {
    let evens = [];
    if (numbers.length === 0) return [];

    if (numbers[0] % 2 === 0) evens.push(numbers[0]);

    return [...evens, ...filterOddsOut(numbers.slice(1))];
};

console.log(filterOddsOut([1, 2, 3, 4, 5, 6, -8, 0]));
