/*
What's the Missing Letter?
Given a string of letters in the English alphabet, return the letter that's missing from the string. 
The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples
missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"
Notes
The given string will never have more than one missing letter.
*/

function missingLetter(str ) {
    const abcArr = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i));
    console.log(abcArr);
    const letter = [...str].reduce((prev, curr) => {
        
    });
}

missingLetter('abc')

exports.solution = missingLetter;