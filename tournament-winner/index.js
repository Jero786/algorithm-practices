function createTournament(games, results) {
  if (!games || games.length < 2) throw new Error('A Tournamen must have at least two games');
  if (games.length !== results.length) throw new Error('The amount of games and result should be match');
  
  const playScoreMap = {};
  
  for (let gameIndex = 0; gameIndex < games.length; gameIndex++) {
    const game = games[gameIndex];
    const [homeTeam, awayTeam] = game;
    const result = results[gameIndex];
    const playerWin = result === 1 ? homeTeam : awayTeam;
    
    if (!playScoreMap[playerWin]) playScoreMap[playerWin] = 0;
    
    playScoreMap[playerWin]++
  }
  
  return {
    getWinner: function () {
      const playerWon = Object.entries(playScoreMap).sort((playerOne, playerTwo) => {
        return playerOne[1] === playerTwo[1]
          ? 0
          :  playerOne[1] > playerTwo[1]
          ? -1
          : 1
      })[0];
      return playerWon[0];
    }
  }
  
}

module.exports = {
  createTournament
}