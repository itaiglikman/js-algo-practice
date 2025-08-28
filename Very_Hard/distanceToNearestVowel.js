/*
WWrite a function that takes in a string and for each character, 
returns the distance to the nearest vowel. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.
*/
const isVowel = char => 'aeiou'.includes(char);

function distanceToNearestVowel(str) {
    const vowelsArr = []
    str.split('').forEach((char, i) => {
        if (isVowel(char)) vowelsArr.push(i);
    })

    const arr = [];
    let currVowelIdx = 0;
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            arr.push(0);
            continue;
        }
        const currLength = Math.abs(i - vowelsArr[currVowelIdx]);
        if (!vowelsArr[currVowelIdx + 1]) {
            arr.push(currLength);
            continue;
        }
        const nextLength = Math.abs(vowelsArr[currVowelIdx + 1] - i);
        if (currLength < nextLength)
            arr.push(currLength);
        else if (currLength >= nextLength) {
            arr.push(nextLength);
            currVowelIdx++;
        }
    }
    console.log(arr);
    return arr;
}

// distanceToNearestVowel("aaaaa")
// distanceToNearestVowel("babbb")
// distanceToNearestVowel("abcdabcd") //[0, 1, 2, 1, 0, 1, 2, 3]
distanceToNearestVowel("baaab") // [1, 0, 0, 0, 1]
// distanceToNearestVowel("shopper") // [2, 1, 0, 1, 1, 0, 1]


exports.solution = distanceToNearestVowel;
