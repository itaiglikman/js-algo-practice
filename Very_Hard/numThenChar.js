/*
Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.

Examples
numThenChar([
 [1, 2, 4, 3, "a", "b"],
 [6, "c", 5], [7, "d"],
 ["f", "e", 8]
]) ➞ [
 [1, 2, 3, 4, 5, 6],
 [7, 8, "a"],
 ["b", "c"], ["d", "e", "f"]
]

numThenChar([
 [1, 2, 4.4, "f", "a", "b"],
 [0], [0.5, "d","X",3,"s"],
 ["f", "e", 8],
 ["p","Y","Z"],
 [12,18]
]) ➞ [
 [0, 0.5, 1, 2, 3, 4.4],
 [8],
 [12, 18, "X", "Y", "Z"],
 ["a", "b", "d"],
 ["e", "f", "f"],
 ["p", "s"]
]
Notes
Test cases will containg integer and float numbers and single letters.
*/

function numThenChar(bigA) {
    const arrLengths = [];
    let totalLength = 0;
    const nums = [];
    const chars = [];
    
    for (let i = 0; i < bigA.length; i++) {
        for (let j = 0; j < bigA[i].length; j++) {
            isNaN(bigA[i][j]) ? chars.push(bigA[i][j]) : nums.push(bigA[i][j]);
        }
        totalLength += bigA[i].length;
        arrLengths.push(bigA[i].length);
    }

    const allSorted = getAllSorted(nums, chars);
    let position = 0;
    const newSortedBigA = []
    for (const currLength of arrLengths) {
        const arr = []
        for (let i = 0; i < currLength; i++) {
            arr.push(allSorted[position]);
            position++;
        }
        newSortedBigA.push(arr);
    }

    console.log(newSortedBigA);
    return newSortedBigA;
}

function getAllSorted(nums, chars) {
    return nums.sort((a, b) => a - b).concat(chars.sort())
}

// numThenChar([
//     [1, 2, 4.4, "f", "a", "b"],
//     [0], [0.5, "d", "X", 3, "s"],
//     ["f", "e", 8],
//     ["p", "Y", "Z"],
//     [12, 18]
// ])

exports.solution = numThenChar;