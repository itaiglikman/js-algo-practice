/*
Write a function that returns true if you can partition an array into one element and the rest,
such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition(arr) {
    let totalProduct = 1;
    let zeroCount = 0;
    if (arr.length < 2) return false;
    for (const num of arr) {
        if (num === 0) {
            zeroCount++;
            if (zeroCount > 1) return true;
        }
        totalProduct *= num;
    }

    if (zeroCount === 1) return false;

    return arr.some(num => totalProduct / num === num);
}

exports.solution = canPartition;