const isStockTrend = (prices) => {
    if (prices.length < 3) return false;
    let smallest = prices[0];
    let mid = Infinity;

    for (let price of prices) {
        if (price <= smallest) {
            smallest = price;
        } else if (price <= mid) {
            mid = price;
        } else if (price > smallest && price > mid) {
            console.log(mid);
            return true;
        }
    }

    return false;
};

console.log(isStockTrend([1, 0, 2, 3]));
console.log(isStockTrend([22, 25, 21, 18, 19.6, 17, 16, 20.5]));
console.log(isStockTrend([5, 2, 8, 4, 3, 7]));
console.log(isStockTrend([4, 1, 5, 3]));
console.log(isStockTrend([4, 1, 5]));
