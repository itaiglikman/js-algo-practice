/*
Create a function that takes an array of football clubs with properties: 
name, wins, loss, draws, scored, conceded, 
and returns the team name with the highest number of points. 
If two teams have the same number of points, return the team with the largest goal difference.
How to Calculate Points and Goal Difference
team = {name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
Examples
champions([
 {
 name: "Manchester United",
 wins: 30,
 loss: 3,
 draws: 5,
 scored: 88,
 conceded: 20,
 },
 {
 name: "Arsenal",
 wins: 24,
 loss: 6,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
 {
 name: "Chelsea",
 wins: 22,
 loss: 8,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
])
➞ "Manchester United"
*/

const championsArr = ([
    {
        name: "Manchester United",
        wins: 30,
        loss: 3,
        draws: 5,
        scored: 88,
        conceded: 20,
    },
    {
        name: "Arsenal",
        wins: 24,
        loss: 6,
        draws: 8,
        scored: 98,
        conceded: 29,
    },
    {
        name: "Chelsea",
        wins: 22,
        loss: 8,
        draws: 8,
        scored: 98,
        conceded: 29,
    }
]);

function champions(championsArr) {
    const maxObj = { points: 0, balance: 0, name: '' };
    for (const team of championsArr) {
        const points = getPoints(team.wins, team.draws);
        const balance = getScoreBalance(team.scored, team.conceded);
        if (maxObj.points < points) {
            maxObj.points = points;
            maxObj.balance = balance;
            maxObj.name = team.name;
        } else if (maxObj.points === points && maxObj.balance < balance) {
            maxObj.points = points;
            maxObj.balance = balance;
            maxObj.name = team.name;
        }
    }

    return maxObj.name;
}

const getPoints = (wins, draws) => wins * 3 + draws;
const getScoreBalance = (scored, conceded) => scored - conceded;

exports.solution = champions;