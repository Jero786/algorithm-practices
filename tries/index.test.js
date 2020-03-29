const {buildTrie, getMatchers} = require('.');

test('Tries build', () => {
  // Arrange
  const dictionary = ['ana', 'bueno', 'arbol'];
  
  // Act
  const node = buildTrie(dictionary);
  
  // Assert
  const aNodes = node.nodes.filter(n => n.text === 'a');
  const aChildNodes = aNodes[0].nodes;
  const bNodes = node.nodes.filter(n => n.text === 'b');
  expect(node.text).toBeUndefined();
  expect(node.nodes.length).toEqual(2);
  expect(aNodes.length).toEqual(1);
  expect(bNodes.length).toEqual(1);
  expect(aChildNodes.length).toEqual(2);
  expect(aChildNodes.filter(n => n.text === 'an').length).toEqual(1);
  expect(aChildNodes.filter(n => n.text === 'ar').length).toEqual(1);
  expect(aChildNodes.filter(n => n.text === 'an')[0].nodes[0].text === 'ana').toBeTruthy();
  expect(aChildNodes.filter(n => n.text === 'an')[0].nodes[0].isEnd).toBeTruthy();
});

test('Tries matcher with single letter', () => {
  // Arrange
  const dictionary = ['ana', 'bueno', 'arbol'];
  const node = buildTrie(dictionary);
  
  // Act
  const suggested = getMatchers(node, 'a');
  
  // Assert
  expect(suggested.length).toEqual(2);
  expect(suggested.indexOf('ana') > -1).toBeTruthy();
  expect(suggested.indexOf('arbol') > -1).toBeTruthy();
  expect(suggested.indexOf('bueno') === -1).toBeTruthy();
});

test('Tries matcher with more than a single letter', () => {
  // Arrange
  const dictionary = ['ana', 'brinco', 'buenudo', 'brisa'];
  const node = buildTrie(dictionary);
  
  // Act
  const suggested = getMatchers(node, 'bri');
  
  // Assert
  expect(suggested.length).toEqual(2);
  expect(suggested.indexOf('brinco') > -1).toBeTruthy();
  expect(suggested.indexOf('brisa') > -1).toBeTruthy();
  expect(suggested.indexOf('ana') === -1).toBeTruthy();
  expect(suggested.indexOf('bueno') === -1).toBeTruthy();
});
