function generateParentheses(n) {
  let result = [];
  backtrack(n, result);
  
  return result;
}

// WIP..https://www.techseries.dev/products/coderpro/categories/1831147/posts/6228792.
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