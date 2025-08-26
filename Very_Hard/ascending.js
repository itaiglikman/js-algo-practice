/*
Write a function that returns true if a string consists of ascending AND consecutive numbers.

Examples
ascending("232425") ➞ true
// Consecutive numbers 23, 24, 25

ascending("2324256") ➞ false
// No matter how this string is divided, the numbers are not consecutive.

ascending("444445") ➞ true
// Consecutive numbers 444 and 445.
Notes
A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
*/

// Original fixed-digit approach:
/*
function ascending(num) {
    let divider = 1;

    while (divider <= Math.round(num.length / 2) + 1) {
        if (Number(num.length) % divider === 0) {
            let lastIndex = 0;
            let lastItem = parseInt(num.slice(0, divider));
            for (let i = divider; i < num.length; i = i + divider) {
                let currItem = parseInt(num.slice(i, i + divider));
                console.table([{ 'divider': divider }, { 'i': i }, { 'lastIndex': lastIndex }, { 'lastItem': lastItem }, { 'currItem': currItem }])
                if (lastItem + 1 !== currItem) break;
                lastIndex = i;
                lastItem = currItem;
            }
            if (lastIndex + divider === num.length) return true;
        }
        divider++;
    }
    return false;
}
*/

// Flexible digit approach:
function ascending(num) {
    for (let firstLen = 1; firstLen <= Math.floor(num.length / 2); firstLen++) {
        let firstNum = parseInt(num.slice(0, firstLen));
        let pos = firstLen;
        let nextNum = firstNum + 1;
        let count = 1;
        while (pos < num.length) {
            let nextNumStr = nextNum.toString();
            if (num.slice(pos, pos + nextNumStr.length) === nextNumStr) {
                pos += nextNumStr.length;
                nextNum++;
                count++;
            } else {
                break;
            }
        }
        if (pos === num.length && count >= 2) {
            return true;
        }
    }
    return false;
}
// console.log(ascending("123456"));
// console.log(ascending("444445"));
// console.log(ascending("232425"));

exports.solution = ascending;