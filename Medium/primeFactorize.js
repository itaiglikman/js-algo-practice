/*
Write a program to find all the prime factors of a given number. 
The program must return an array containing all the prime factors, sorted in ascending order.
Remember that 1 is neither prime nor composite and should not be included in your output array.

Examples
primeFactorize(25) ➞ [5, 5]

primeFactorize(19) ➞ [19]

primeFactorize(77) ➞ [7, 11]
Notes
Output array must be sorted in ascending order
The only positive integer which is neither prime nor composite is 1. Return an empty array if 1 is the input.
*/


// naive solution
function primeFactorize(num) {
    if (num === 1) return [];
    let factorArr = []
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) factorArr.push(i);
    }

    factorArr = factorArr.sort((a, b) => a - b).filter(n => isPrime(n));

    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    console.log(factorArr);
}

primeFactorize(1000000000)

exports.solution = primeFactorize;