/**
 * Validate if given brackets are properly balanced.
 * @param brackets
 * @returns {string|string}
 */
function isBalancedRecursiveWay(brackets, stack = [], index = 0) {
    if (index === brackets.length) {
      return "YES";
    }
    const currentChar = brackets[index];
    if (isOpenCharacter(currentChar)) {
      stack.unshift(currentChar);
      return isBalancedRecursiveWay(brackets, stack, index + 1);
    } else {
      const prevChar = stack.shift();
      if (isMatchingCharacter(prevChar, currentChar)) {
        return isBalancedRecursiveWay(brackets, stack, index + 1);
      } else {
        return 'NO';
      }
    }
}

const CHARACTER = {
  '{':'}',
  '[':']',
  '(':')',
}

function isMatchingCharacter(char, compare) {
  return CHARACTER[char] === compare;
}

/**
 * Validate if given brackets are properly balanced.
 * @param string
 * @returns {string|string}
 */
function isBalanced(string) {
  if (!string) return false;
  
  const stack = [];
  const characters = string.split('');
  
  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    if (isOpenCharacter(char)) {
      stack.unshift(char);
    } else {
      const lastOpenCharacter = stack.shift();
      if (CHARACTERS_MAP[lastOpenCharacter] !== char) {
        return "NO";
      }
    }
  }
  
  return isOpenCharacter(string.slice(-1)) === false ?  "YES" : "NO"
}

function isOpenCharacter(char) {
  return char in CHARACTERS_MAP;
}


const CHARACTERS_MAP = {
  "[":"]",
  "(":")",
  "{":"}",
};

module.exports = {
  isBalanced,
  isBalancedRecursiveWay
};