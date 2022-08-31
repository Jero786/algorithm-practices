const { createTournament } = require('.');

test('Tournament', () => {
  const competitions = [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML']
  ];
  const results = [0, 0, 1];

  const tournament = createTournament(competitions, results);

  expect(tournament).toEqual('Python');
});
