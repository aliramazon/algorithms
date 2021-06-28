const findMaxProfit = (sales) => {
    let min = sales[0];
    let maxProfit = 0;

    for (let sale of sales) {
        if (sale - min > maxProfit) {
            maxProfit = sale - min;
        } else if (min > sale) {
            min = sale;
        }
    }
    return maxProfit;
};

console.log(findMaxProfit([20, 0, 7, 30, 12, 9]));
