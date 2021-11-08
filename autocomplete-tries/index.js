function autocomplete(words, targetText) {
  // build trie
  const trie = buildTrie(words);
  
  // search text on trie
  return getMatchersWords(trie, targetText);
}

function buildTrie(words) {
  let trie = {};
  
  for (const word of words) {
    trie = addWord(trie, word);
  }
  
  return trie;
}

function addWord(trie, word) {
  let node = trie;
  
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    
    if (!(letter in node)) {
      node[letter] = {};
    }
    
    node = node[letter];
  }
  
  node.isEnd = true;
  node.text = word;
  
  return trie;
}

function getMatchersWords(trie, targetText) {
  let node = trie;
  
  for (let i = 0; i < targetText.length; i++) {
    const letter = targetText[i];
    if (letter in node) {
      node = node[letter]
    }
  }
  
  return getAllChildWords(node);
}

function getAllChildWords(node, result = []) {
  if (!node) return result;
  
  for (const letter in node) {
    const nextNode = node[letter];
    if (nextNode.isEnd) {
      result.push(nextNode.text);
    } else {
      getAllChildWords(nextNode, result);
    }
  }
  
  return result;
}


module.exports = {
  autocomplete
}