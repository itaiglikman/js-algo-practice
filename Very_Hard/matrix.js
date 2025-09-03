/*
Write a function that accepts an integer N and returns an N * N spiral matrix.

Examples
matrix(2) ➞ [
  [1, 2],
  [4, 3]
]

matrix(3) ➞ [
  [1, 2, 3],
  [8  ,9, 4],
  [7, 6, 5]
]

matrix(4) ➞ [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7]
]
*/

const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right, down, left, up

function matrix(n) {
    const mat = Array(n).fill().map(() => Array(n).fill(0));
    let currDirection = 0, counter = 1, row = 0, col = 0;

    while (counter <= n * n) {
        mat[row][col] = counter++;
        let nextRow = row + directions[currDirection][0];
        let nextCol = col + directions[currDirection][1];
        if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || mat[nextRow][nextCol] !== 0) {
            currDirection = changeDirection(currDirection);
        }
        [row, col] = getCord(row, col, currDirection);
    }
    console.table(mat);
    return mat;
}

function changeDirection(currDirection) {
    switch (currDirection) {
        case 0: return 1;
        case 1: return 2;
        case 2: return 3;
        case 3: return 0;
    }
}

function getCord(row, col, direction) {
    row += directions[direction][0];
    col += directions[direction][1];
    return [row, col];
}

matrix(5)

exports.solution = matrix;