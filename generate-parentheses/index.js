function generateParentheses(n) {
  const result = []
  helperGenerateParentheses(n, n, '', result);
  return result;
}

function helperGenerateParentheses(
  leftCount = 0,
  rightCount = 0,
  partial = '',
  result = [],
) {
  if (leftCount > rightCount) return; // not valid partial
  if (leftCount === 0 && rightCount === 0) result.push(partial); // is valid
  if (leftCount > 0) helperGenerateParentheses(leftCount - 1, rightCount, partial + '(', result);
  if (rightCount > 0) helperGenerateParentheses(leftCount, rightCount - 1, partial + ')', result);
}

module.exports = {
  generateParentheses
}