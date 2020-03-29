/**
 * Validate if given brackets are properly balanced.
 * @param brackets
 * @returns {string|string}
 */
function isBalanced(brackets) {
  return isBalancedAllBrackets(brackets.split(''));
}

function isBalancedAllBrackets(brackets, index = 0, bracketStack = []) {
  if (index <= brackets.length) {
    const bracket = brackets[index];
    if (isBracketOpen(bracket)) {
      bracketStack.unshift(bracket);
    } else {
      const topBracket = bracketStack.shift();
      if (!isBracketMatch(topBracket, bracket)) {
        return "NO";
      }
    }
    index++;
    return isBalancedAllBrackets(brackets, index, bracketStack)
  }
  
  return "YES";
}

function isBracketOpen(bracket) {
  return !!OPEN_BRACKETS[bracket];
}

function isBracketMatch(bracketOpen, bracketClose) {
  return OPEN_BRACKETS[bracketOpen] === bracketClose;
}

const OPEN_BRACKETS = {
  "[":"]",
  "(":")",
  "{":"}",
};

module.exports = {
  isBalanced
};