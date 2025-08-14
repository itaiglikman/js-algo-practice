/*
Create a function that takes an array representation of a Minesweeper board, 
and returns another board where the value of each cell is the amount of its neighbouring mines.

Examples
The input may look like this:

[
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]
The 0 represents an empty space. The 1 represents a mine.

You will have to replace each mine with a 9 and each empty space with the number of adjacent mines, the output will look like this:

[
  [1, 9, 2, 1],
  [2, 3, 9, 2],
  [3, 9, 4, 9],
  [9, 9, 3, 1],
]
Notes
Since in the output the numbers 0-8 are used to determine the amount of adjacent mines, the number 9 will be used to identify the mines instead.
A wikipedia page explaining how Minesweeper works is available in the Resources tab
*/

function minesweeperNumbers(mat) {

    const dup = mat.map(row => row.slice());

    for (let i = 0; i < mat.length; i++) {
        const row = mat[i];
        for (let j = 0; j < row.length; j++) {
            if (mat[i][j] === 1) {
                dup[i][j] = 9;
            } else {
                const around = getAround(mat,i,j);
                let count = 0;
                for (const neighbor of around) {
                    if ((neighbor === 1)) count++;
                }
                dup[i][j] = count;
            }
        }
    }
    return (dup);
}

function getCell(mat, i, j) {
    if (i < 0 || i >= mat.length || j < 0 || j >= mat[0].length) return -1;
    return mat[i][j];
}

function getAround(mat,i,j) {
    const upLeft = getCell(mat, i - 1, j - 1);
    const up = getCell(mat, i - 1, j);
    const upRight = getCell(mat, i - 1, j + 1);
    const right = getCell(mat, i, j + 1);
    const left = getCell(mat, i, j - 1);
    const downLeft = getCell(mat, i + 1, j - 1);
    const down = getCell(mat, i + 1, j);
    const downRight = getCell(mat, i + 1, j + 1);
    const around = [upLeft, upRight, up, right, left, downLeft, down, downRight]
    return around;
}

minesweeperNumbers([
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],])

exports.solution = minesweeperNumbers;
