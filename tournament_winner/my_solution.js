const HOME_WINNER = 1;
const AWAY_WINNER = 0;

function tournamentWinner(competitions, results) {
  const teamsResults = {};
  let tournamentWinner = null;

  for (let i=0; i < competitions.length; i += 1) {
    const match = competitions[i];
    const result = results[i];

    let matchWinner = null;
    if (result == HOME_WINNER) {
      matchWinner = match[0];
    } else {
      matchWinner = match[1];
    }

    const matchWinnerPoints = (teamsResults[matchWinner] || 0) + 3;
    teamsResults[matchWinner] = matchWinnerPoints;

    if (tournamentWinner == null) {
      tournamentWinner = matchWinner;
    } else {
      const tournamentWinnerPoints = teamsResults[tournamentWinner];
      if (tournamentWinnerPoints < matchWinnerPoints) {
        tournamentWinner = matchWinner;
      }
    }
  }

  return tournamentWinner;
}



tournamentWinner({
  "competitions": [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"]
  ],
  "results": [0, 1, 1, 1, 0, 1]
});
