/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed(str) {
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let newStr = "";
    let lastVowelIndex = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelsSet.has(str[i])) {
            let strBefore = str.substring(lastVowelIndex, i);
            newStr = newStr.concat(strBefore,`-${str[i]}-`);
            lastVowelIndex = i+1;
        }
    }
    let leftOver = str.substring(lastVowelIndex);
    newStr = newStr.concat(leftOver);

    return newStr;
}

// option 2
/**
 * function dashed(str) {
    const vowels = new Set('aeiouAEIOU');
    let result = '';
    for (let char of str) {
        if (vowels.has(char)) {
            result += '-' + char + '-';
        } else {
            result += char;
        }
    }
    return result;
}
 */

exports.solution = dashed;