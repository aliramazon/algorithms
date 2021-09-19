/* Given a pile of coins. Two player have a choice to remove 1 or 2 coins at a time. The one who removed the last coin is loser. Players. You or They. (n) => number of coins I removed. Current player: You
    1 Coin. W: They
    2 Coins. W: You. (1) + 1
    3 Coins. W: You. (2) + 1
    4 Coins. W: They. (2) + 1 + (1) || (1) + 2 + (1)
    5 Coins. W: . 

*/

const coinGame = (numberOfCoins, currentPlayer = "You") => {
    let nextPlayer;
    const playGame = (numberOfCoins, currentPlayer) => {
        if (numberOfCoins <= 0) return currentPlayer;

        if (currentPlayer === "You") {
            nextPlayer = "They";
        } else {
            nextPlayer = "You";
        }

        if (
            playGame(numberOfCoins - 1, nextPlayer) === currentPlayer ||
            playGame(numberOfCoins - 2, nextPlayer) === currentPlayer
        ) {
            return currentPlayer;
        } else {
            return nextPlayer;
        }
    };

    return playGame(numberOfCoins, currentPlayer);
};

const coinGame1 = (numberOfCoins) => {
    if ((numberOfCoins - 1) % 3 === 0) {
        return "They";
    }
    return "You";
};

console.log(coinGame1(1));
console.log(coinGame1(2));
console.log(coinGame1(3));
console.log(coinGame1(4));
console.log(coinGame1(5));
console.log(coinGame1(6));
