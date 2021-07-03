/**
 * Validate if given brackets are properly balanced.
 * @param brackets
 * @returns {string|string}
 */
function isBalancedRecursiveWay(brackets, index = 0, bracketStack = []) {
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
    return isBalanced(brackets, index, bracketStack)
  }
  
  return "YES";
}

/**
 * Validate if given brackets are properly balanced.
 * @param brackets
 * @returns {string|string}
 */
function isBalanced(brackets) {
  let openCharacters = [];
  
  for (let index = 0; index < brackets.length; index++) {
    const character = brackets[index];
    
    if (isBracketOpen(character)) {
      openCharacters.unshift(character);
    } else {
      const lastOpenCharacter = openCharacters.shift();
      if (!isBracketMatch(lastOpenCharacter, character)) {
        return 'NO';
      }
    }
  }
  
  return 'YES';
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
  isBalanced,
  isBalancedRecursiveWay
};