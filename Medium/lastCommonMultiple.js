/*
Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187
Notes
Both values will be positive.
The LCM is the smallest integer that divides both numbers such that the remainder is zero.
*/

// ? how to deal with biggg difference between the 2 numbers?

function lastCommonMultiple(n1, n2) {
    if (n1 === 0 || n2 === 0) return 0;
    const min = Math.min(n1, n2);
    const max = Math.max(n1, n2);
    let closestToMax = max - max % min; // start from the first number that divides with min and closes to max
    while (closestToMax % max !== 0) closestToMax += min;
    return closestToMax;
}

exports.solution = lastCommonMultiple;
