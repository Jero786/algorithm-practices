const {generateParentheses} = require('.');

/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 */
test("generate parentheses, should be one", () => {
  // Arrange
  const n = 1;
  // Act
  const result = generateParentheses(n);
  
  // Assert
  expect(result).toEqual(["()"]);
});

test("generate parentheses, should be one", () => {
  // Arrange
  const n = 3;
  // Act
  const result = generateParentheses(n);
  
  // Assert
  expect(result).toEqual([
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()",
  ]);
});