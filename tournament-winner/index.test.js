const {createTournament} = require('.');

test('Tournament', () => {
  const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ]
  const results = [0, 0, 1];
  
  const tournament = createTournament(competitions, results);
  const result = tournament.getWinner();
  
  expect(result).toEqual('Python');
});