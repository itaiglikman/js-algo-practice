/*
Write a chip counter for a battleship board. This function should return
the number of chips (ships) present on the 2-D array.

A chip is a segment of contiguous 1s, placed either horizontally or vertically.
Chips cannot touch each other, not even diagonally. Chips can be 1x1 in size.

Examples

countChips([
  [1,1,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0],
  [0,0,0,0,1,0,1,1],
  [0,1,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0],
  [0,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,1]
]) ➞ 6

countChips([
  [1,0,1,0],
  [0,1,0,1],
  [1,0,1,0],
  [0,1,0,1]
]) ➞ 8
*/

function countChips(mat) {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 0) continue;
            if (!checkPrev(mat, i, j)) count++;
        }
    }
    return count;
}

function checkPrev(mat, row, col) {
    return mat[row - 1]?.[col] || mat[row]?.[col - 1];
}

exports.solution = countChips;