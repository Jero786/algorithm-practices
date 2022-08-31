const { isValidParentheses } = require('.');

describe('valid parentheses', () => {
  test.each([
    ['()', true],
    ['([{}])', true],
    ['(()())', true],
    [')(', false],
    ['{]', false],
    ['{]}', false],
    ['(]}', false]
  ])('should be valid', (text, expectedResult) => {
    const result = isValidParentheses(text);

    expect(result).toEqual(expectedResult);
  });
});
