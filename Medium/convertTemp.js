/*
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
*/

function convertTemp(temp) {
    // get type by last char
    const type = temp.slice(-1);
    const dot = '°';
    if (type !== 'F' && type !== 'C') return 'Error';
    let rest = temp.slice(0, -1);
    if (rest.slice(-1) !== dot) return 'Error';
    rest = rest.slice(0, -1);
    const num = Number(rest);
    if (isNaN(num)) return 'Error';
    if (type === "C") {
        const converted = Math.round((9 / 5 * num) + 32);
        return converted.toString() + dot + "F";
    }
    const converted = Math.round((num - 32) * (5 / 9));
    return converted.toString() + dot + "C";
}

exports.solution = convertTemp;