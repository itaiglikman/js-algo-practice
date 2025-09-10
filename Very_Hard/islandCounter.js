/*
Write an island counter for a 2D matrix. This function should return the number
of distinct islands present.

An island is a group of connected 1s (*vertically* or *horizontally* connected).
0 represents water. Islands are distinct if they are separate connected groups.

Examples

islandCounter([
  [1,1,0,0,0],
  [1,1,0,1,1],
  [0,0,0,1,1],
  [0,0,0,0,0],
  [1,1,0,0,1]
]) ➞ 4

islandCounter([
  [0,0,0],
  [0,0,0],
  [0,0,0]
]) ➞ 0
*/


function checkUpLeft(mat, row, col) {
    const up = mat[row - 1]?.[col]
    const left = mat[row]?.[col - 1];
    const isLand = up || left;
    if (!isLand) {
        const right = mat[row]?.[col + 1];
        const down = mat[row + 1]?.[col];
        if (right || down) {
            const isLandFromRight = checkDownRight(mat, row, col + 1)
            const isLandFromDown = checkDownRight(mat, row + 1, col)
            return(isLandFromDown||isLandFromRight)
        }
    }
    return isLand;
}

function checkDownRight(mat, row, col) {
    const down = mat[row + 1]?.[col]
    const right = mat[row]?.[col + 1];
    return down || right;
}

function islandCounter(mat) {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 0) continue;
            if (!checkUpLeft(mat, i, j)) {
                mat[i][j] = '*';
                count++;}
        }
    }
    console.table(mat);
    console.log(count)
    return count;
}


islandCounter([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1]
])

exports.solution = islandCounter;