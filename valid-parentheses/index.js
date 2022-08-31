function isValidParentheses(string) {
  const stack = [];

  for (const char of string) {
    if (isOpen(char)) {
      stack.unshift(char);
    } else {
      const lastOpen = stack.shift();
      if (MATCH_PARENTHESES[lastOpen] === char) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
}

const isOpen = (char) => char in MATCH_PARENTHESES;

const MATCH_PARENTHESES = {
  '(': ')',
  '{': '}',
  '[': ']'
};

module.exports = {
  isValidParentheses
};
