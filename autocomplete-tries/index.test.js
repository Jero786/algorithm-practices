const {autocomplete} = require('.');

test('auto complete with tries', () => {
  // Arrange
  const prefix = 'do';
  const words = ['dog', 'dark', 'cat', 'door', 'dodge'];
  
  // Act
  const result = autocomplete(words, prefix);
  
  // Assert
  expect(result).toEqual(['dog', 'door', 'dodge']);
});