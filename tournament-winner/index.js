/**
 * There's an algorithms tournament taking place in which teams of programmers compete
 * against each other to solve algorithmic problems as fast as possible. Teams compete
 * in a round robin, where each team faces off against all other teams. Only two teams
 * compete against each other at a time, and for each competition, one team is designated
 * the home team, while the other team is the away team. In each competition there's always
 * one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses.
 * The winner of the tournament is the team that receives the most amount of points.
 *
 * TC: O(N)
 * EC: O(N)
 * @param {*} teams
 * @param {*} results
 * @returns
 */
function createTournament(teams, results) {
  const resultsByTeam = {}; // {html: 0, C#: 0, Pyhton: 0}

  for (const [teamOne, teamTwo] of teams) {
    resultsByTeam[teamOne] = 0;
    resultsByTeam[teamTwo] = 0;
  }

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const isAwayTeamWinner = result === 0;

    const [homeTeam, awayTeam] = teams[i];

    if (isAwayTeamWinner) {
      resultsByTeam[awayTeam]++;
    } else {
      resultsByTeam[homeTeam]++;
    }
  }

  const tableResult = Object.entries(resultsByTeam);

  let maxScore = Number.MIN_VALUE;
  let teamWinner = '';

  for (const [teamName, score] of tableResult) {
    if (score > maxScore) {
      maxScore = score;
      teamWinner = teamName;
    }
  }

  return teamWinner;
}

module.exports = {
  createTournament
};
