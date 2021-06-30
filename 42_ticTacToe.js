/* 
[   Col
    [X,  X,  X], Row
    [0,  0 , 0],
    [X,  X,  0]
]

[   Col
    [X, 0, 0, 0], Row 
    [X, 0, X, X],
    [X, X, X, 0],
    [X, X, 0, 0]
]

Win Cases:
    - Horizontal
    - Vertical
    - Diagonal

Patterns:
    Horizontal: row[i] === row[i + 1] ===  row[i + 2]
    Vertical: rows[i][j] === row[i + 1][j] === row[i + 1][j]
    Diagonal: 

We definetely need to pass grid this.size.   3, 4, 5 ...
*/

class TicTacToe {
    constructor(size) {
        this.size = size;
        this.winCases = [];
    }

    #generateHorizontalWinCases() {
        let winCase = [];

        for (let i = 0; i < this.size ** 2; i++) {
            winCase.push(i);
            if (winCase.length === this.size) {
                this.winCases.push(winCase);
                winCase = [];
            }
        }
    }

    #generateVerticalWinCases() {
        let winCase = [];
        for (let j = 0; j < this.size; j++) {
            let acc = j;

            while (winCase.length < this.size) {
                winCase.push(acc);
                acc += this.size;
            }
            this.winCases.push(winCase);
            winCase = [];
        }
    }

    #generateDiagonalWinCases() {
        let acc = 0;
        let winCase = [];

        while (winCase.length < this.size) {
            winCase.push(acc);
            acc += this.size + 1;
        }
        this.winCases.push(winCase);

        winCase = [];
        acc = this.size - 1;

        while (winCase.length < this.size) {
            winCase.push(acc);
            acc += this.size - 1;
        }
        this.winCases.push(winCase);
        winCase = [];
    }

    #generateAllWinCases() {
        this.winCases = [];
        this.#generateHorizontalWinCases();
        this.#generateVerticalWinCases();
        this.#generateDiagonalWinCases();
    }

    #getAllWinCases() {
        this.#generateAllWinCases();
        return this.winCases;
    }

    calculateWin(squares) {
        let winCases = this.#getAllWinCases();

        for (let winCase of winCases) {
            let winUser = squares[winCase[0]];
            let isWin = winCase.every(
                (index) =>
                    squares[index] === winUser && squares[index] !== undefined
            );
            if (isWin) return winUser;
        }
        return null;
    }
}

let game = new TicTacToe(3);
let noOneWins = ["X", "X", 0, "X", 0, 0, undefined, 0, undefined];
let xWins = ["X", "X", 0, 0, "X", 0, 0, 0, "X"];
let zeroWins = ["X", "X", 0, "X", 0, 0, 0, undefined, undefined];
console.log(game.calculateWin(noOneWins));
console.log(game.calculateWin(xWins));
console.log(game.calculateWin(zeroWins));
