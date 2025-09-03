/*
A wristband can have 4 patterns:

horizontal: each item in a row is identical.
vertical: each item in a column is identical.
diagonal left: each item is identical to the one on it's upper left or bottom right.
diagonal right: each item is identical to the one on it's upper right or bottom left.
You are shown an incomplete section of a wristband.

Write a function that returns true if the section can be correctly classified into one of the 4 types, and false otherwise.

Examples
isWristband([
 ["A", "A"],
 ["B", "B"],
 ["C", "C"]
]) ➞ true 
// Part of horizontal wristband.

isWristband([
 ["A", "B"],
 ["A", "B"],
 ["A", "B"]
]) ➞ true 
// Part of vertical wristband.

isWristband([
 ["A", "B", "C"],
 ["C", "A", "B"],
 ["B", "C", "A"],
 ["A", "B", "C"]
]) ➞ true
// Part of diagonal left wristband.

isWristband([
 ["A", "B", "C"],
 ["B", "C", "A"],
 ["C", "A", "B"],
 ["A", "B", "A"]
]) ➞ true
// Part of diagonal right wristband.
*/

function isWristband(mat) {
    /**
    check each option:
    1. row - arr[0][0] = arr[0][1] 
    2. col - arr[0][0] = arr[1][0]
    3. diagonal left - arr[0][0] = arr[1][1]
    3. diagonal right - arr[1][0] = arr[0][1]
     */
    console.log(mat.length);
    let result = false;
    if (mat[0][0] === mat[0][1]) {
        result = checkRow(mat);
        console.log('row', result);
    }
    if (mat[0][0] === mat[1][0]) {
        console.log(mat[0][0], mat[1][0]);
        result = checkCol(mat);
        console.log('col', result);
    }
    if (mat[0][0] === mat[1][1]) {
        result = checkDiagonalLeft(mat)
        console.log('diagonal left', result);
    };
    //     if (mat[1][0] === mat[0][1]) checkDiagonalRight(mat);
    console.log(result);
}

function checkRow(mat) {
    for (let i = 0; i < mat.length; i++) {
        const first = mat[i][0]
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] !== first) return false;
        }
    }
    return true;
}

function checkCol(mat) {
    for (let i = 0; i < mat[0].length; i++) {
        const first = mat[0][i]
        for (let j = 0; j < mat.length; j++) {
            console.log(mat[j][i]);
            if (mat[j][i] !== first) return false;
        }
    }
    return true;
}

function checkDiagonalLeft(mat) {
    for (let i = 0; i < mat.length; i++) {
        const first = mat[i][i];
        for (let j = i + 1; j < mat[0].length; j++) {
            console.log(first);
            console.log(mat[j][j]);
            if (mat[j][j] !== first) return false;
        }
    }
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
    // for (let i = 1; i < mat.length; i++) {
    //     const first = mat[i][i];
    //     for (let j = i + 1; j < mat[0].length; j++) {
    //         console.log(first);
    //         console.log(mat[j][j]);
    //         if (mat[j][j] !== first) return false;
    //     }
    // }
    return true;
}

// isWristband([
//     ["A", "A"],
//     ["B", "B"],
//     ["C", "C"]
// ])

// isWristband([
//     ["A", "B"],
//     ["A", "B"],
//     ["A", "B"]
// ])

isWristband([
 ["A", "B", "C"],
 ["C", "A", "B"],
 ["B", "C", "A"],
 ["A", "B", "C"]
])



exports.solution = isWristband;