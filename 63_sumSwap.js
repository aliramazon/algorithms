const sumSwap = (arr1, arr2) => {
    let hash1 = {},
        hash2 = {},
        sum1 = 0,
        sum2 = 0;

    for (let i = 0; i < arr1.length; i++) {
        let ele = arr1[i];
        sum1 += ele;
        if (!hash1[ele] || hash1[ele] !== 0) {
            hash1[ele] = i;
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        let ele = arr2[j];
        sum2 += ele;
        if (!hash2[ele] || hash2[ele] !== 0) {
            hash2[ele] = j;
        }
    }

    let difference = sum1 > sum2 ? (sum1 - sum2) / 2 : (sum2 - sum1) / 2;
    let smallerSumArray = sum1 > sum2 ? arr2 : arr1;
    let biggerArrayHash = sum1 > sum2 ? hash1 : hash2;

    for (let k = 0; k < smallerSumArray.length; k++) {
        let ele = smallerSumArray[k];
        let total = ele + difference;
        if (biggerArrayHash[total] || biggerArrayHash[total] === 0) {
            return biggerArrayHash === hash1
                ? [biggerArrayHash[total], k]
                : [k, biggerArrayHash[total]];
        }
    }

    return [];
};

console.log(sumSwap([2, 8, 5, 11], [4, 6, 2, 8, 12]));
console.log(sumSwap([4, 6, 2, 8, 12], [2, 8, 5, 11]));
console.log(sumSwap([5, 3, 3, 7], [4, 1, 1, 6]));
console.log(sumSwap([2, 5, 3, 9, 1], [1, 12, 5]));
