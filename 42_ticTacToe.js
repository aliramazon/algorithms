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
        this.lines = [];
    }

    generateHorizontalWinLines() {
        let line = [];

        for (let i = 0; i < this.size ** 2; i++) {
            line.push(i);
            if (line.length === this.size) {
                this.lines.push(line);
                line = [];
            }
        }
    }

    generateVerticalWinLines() {
        let line = [];
        for (let j = 0; j < this.size; j++) {
            let acc = j;

            while (line.length < this.size) {
                line.push(acc);
                acc += this.size;
            }
            this.lines.push(line);
            line = [];
        }
    }

    generateDiagonalLines() {
        let acc = 0;
        let line = [];

        while (line.length < this.size) {
            line.push(acc);
            acc += this.size + 1;
        }
        this.lines.push(line);

        line = [];
        acc = this.size - 1;

        while (line.length < this.size) {
            line.push(acc);
            acc += this.size - 1;
        }
        this.lines.push(line);
        line = [];
    }

    calculateAllWinLines() {
        this.generateHorizontalWinLines();
        this.generateVerticalWinLines();
        this.generateDiagonalLines();
    }

    winLines() {
        this.lines = [];
        this.calculateAllWinLines();
        return this.lines;
    }

    calculateWin(squares) {
        let winLines = this.winLines();

        for (let winLine of winLines) {
            let winUser = squares[winLine[0]];
            let isWin = winLine.every(
                (index) =>
                    squares[index] === winUser && squares[index] !== undefined
            );
            if (isWin) return winUser;
        }
        return null;
    }
}

let game = new TicTacToe(3);
let squares = ["X", "X", 0, "X", 0, 0, undefined, 0, undefined];
console.log(game.calculateWin(squares));
