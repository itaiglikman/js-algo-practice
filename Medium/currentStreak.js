/*
Create a function that takes the current day (e.g. "2019-09-30"), 
an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

Examples
currentStreak("2019-09-23", [
 { date: "2019-09-18" },
 { date: "2019-09-19" },
 { date: "2019-09-21" },
 { date: "2019-09-22" },
 { date: "2019-09-23" }
]) ➞ 3

currentStreak("2019-09-25", [
 { date: "2019-09-16" },
 { date: "2019-09-17" },
 { date: "2019-09-21" },
 { date: "2019-09-22" },
 { date: "2019-09-23" }
]) ➞ 0
Notes
The array of dates is sorted chronologically.
The today parameter will always be greater than or equal to the last date in the array.
An empty array should return 0.
*/

function currentStreak(today, dateArr) {
    if (!dateArr.length) return 0;
    let count = 0;
    let lastIndex = dateArr.length - 1;
    let lastDay = dateArr[lastIndex].date;
    if (today === lastDay) {
        count++;
        if (lastIndex === 0) return count;
        today = lastDay;
        lastDay = dateArr[--lastIndex].date;
    }

    let todayArr = today.split('-');
    let lastDayArr = lastDay.split('-');
    while (todayArr[1] === lastDayArr[1] && Number(todayArr[2]) - 1 === Number(lastDayArr[2])) {
        count++;
        if (lastIndex === 0) return count;
        today = lastDay
        lastDay = dateArr[--lastIndex].date;
        todayArr = lastDayArr;
        lastDayArr = lastDay.split('-');
    }
    return count;
}
console.log(currentStreak("2019-09-23", [{ date: "2019-09-23" }]));
// currentStreak("2019-09-23", [
//     { date: "2019-09-18" },
//     { date: "2019-09-19" },
//     { date: "2019-09-21" },
//     { date: "2019-09-22" },
//     { date: "2019-09-23" }
// ])

currentStreak("2019-09-25", [

])

exports.solution = currentStreak;