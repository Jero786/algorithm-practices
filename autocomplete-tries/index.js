function autocomplete(words, prefix) {
  // build trie
  const trie = buildTrie(words);
  
  // search prefix
  return searchPrefix(trie, prefix);
}

function buildTrie(words) {
  let trie = {};
  for (const word of words) {
    trie = insertNode(trie, word);
  }
  return trie;
}

function insertNode(trie, word) {
  let node = trie;
  
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!(letter in node)) node[letter] = {};
    node = node[letter];
  }
  
  node.isEnd = true;
  node.text = word;
  
  return trie;
}

function searchPrefix(trie, prefix) {
  let node = trie; // this is the key to make it work!
  
  // look-up into tree until find the starting prefix node.
  for (let i = 0; i < prefix.length; i++) {
    const letter = prefix[i];
    if (letter in node) {
      node = node[letter];
    }
  }
  
  return node ? getAllWords(node) : [];
}

function getAllWords(trie, result = []) {
  if (trie.isEnd) {
    result.push(trie.text);
  } else {
    for (const letter in trie) {
       getAllWords(trie[letter], result);
    }
  }
  return result;
}


module.exports = {
  autocomplete
}