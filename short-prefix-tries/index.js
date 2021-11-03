function shortPrefix(words) {
  // build trie
  const trie = buildTrie(words);
  // search min prefix
  return getShortPrefix(trie, words)
}

function buildTrie(words) {
  return words.reduce(
    (trie, word) => insertNode(trie, word),
    {});
}

function insertNode(root, word) {
  let node = root;
  
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (letter in node) {
      node[letter].count++;
    } else {
      node[letter] = {count: 1};
    }
    node = node[letter]
  }
  
  return root;
}

function getShortPrefix(node, words = []) {
  return words.map(word => getPrefix(node, word));
}

function getPrefix(node, word, prefix = '', index = 0) {
  if (word.length === index) return prefix;
  
  const letter = word[index];
  prefix += letter;
  const nextNode = node[letter];
  if (nextNode.count === 1) {
    return prefix;
  } else {
    return getPrefix(nextNode, word, prefix, index + 1);
  }
}

module.exports = {
  shortPrefix
}