function generateParentheses(n) {
  let result = [];
  backtrack(n, result);
  
  return result;
}

// WIP...
function backtrack(
  n,
  result = [],
  text = "",
  openCount = 0,
  closedCount = 0
) {
  if (text.length === n * 2) {
    result.push(text);
    return;
  }
  
  if (openCount < n) {
    text += '(';
    backtrack(n, result, text, openCount + 1, closedCount);
  }
  
  if (closedCount < openCount) {
    text += ')';
     backtrack(n, result, text, openCount, closedCount + 1);
  }
}

module.exports = {
  generateParentheses
}