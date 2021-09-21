const sortTemperatures = (temps) => {
    let count = {};
    let sortedTemps = [];

    for (let i = 0; i < temps.length; i++) {
        let temp = temps[i].toFixed(1);
        if (!count[temp]) {
            count[temp] = 1;
        } else {
            count[temp]++;
        }
    }

    for (let i = 97.0; i <= 99.0; i += 0.1) {
        let temp = i.toFixed(1);
        if (count[temp]) {
            for (let i = 0; i < count[temp]; i++) {
                sortedTemps.push(temp);
            }
        }
    }

    console.log(count);
    return sortedTemps;
};

console.log(
    sortTemperatures([
        98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1, 99.0
    ])
);
