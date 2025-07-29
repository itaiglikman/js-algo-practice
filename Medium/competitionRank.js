/*
Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. 
Rank numbers are increased each time, so ranks are sometimes skipped. If we have 5 scores (the highest score having a rank of 1):

No matching values:

Scores = [99, 98, 97, 96, 95]
Rank = 1,  2,  3,  4,  5
With matching values:

Scores = [99, 98, 98, 96, 95]
Rank = 1,  2,  2,  4,  5

// Second and third scores are equal, so rank "3" is skipped.
Given an object containing the names and scores of 5 competitors, and a competitor name, 
return the rank of that competitor after applying competition ranking.

Examples
competition_rank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane") ➞ 4

competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce") ➞ 3
Notes
The highest score has a rank value of 1..
*/

function competitionRank(competitionObj, name) {
    const competitionArr = [];
    for (const key in competitionObj) {
        competitionArr.push({ name: key, score: competitionObj[key] });
    }
    const sorted = competitionArr.sort((a, b) => b.score - a.score);
    let rankCounter = 0;
    let counter = 0
    let prevRank = null;
    for (const competitor of sorted) {
        counter++;
        rankCounter = competitor.score === prevRank ? rankCounter : counter;
        prevRank = competitor.score;
        if (competitor.name === name) return rankCounter;
    }
    return 0;
}

// function competitionRank(competitionObj, name) {
//     const sorted = Object.entries(competitionObj)
//         .map(([n, score]) => ({ name: n, score }))
//         .sort((a, b) => b.score - a.score);

//     let rank = 0, prevScore, actualRank;
//     for (let i = 0; i < sorted.length; i++) {
//         if (sorted[i].score !== prevScore) rank = i + 1;
//         if (sorted[i].name === name) return rank;
//         prevScore = sorted[i].score;
//     }
//     return 0;
// }

exports.solution = competitionRank;