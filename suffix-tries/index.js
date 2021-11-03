class SuffixTrie {
  
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }
  
  populateSuffixTrieFrom(text) {
    for (let i = 0; i < text.length; i++) {
      this.buildNode(text, i);
    }
  }
  
  contains(text) {
    let node = this.root;
    for (const letter of text) {
      if (!(letter in node)) return false;
      
      node = node[letter];
    }
    
    return this.endSymbol in node;
  }
  
  buildNode(text, initialIndex) {
    let node = this.root;
    for (let i = initialIndex; i < text.length; i++) {
      const letter = text[i];
      if (!(letter in node)) {
        node[letter] = {};
      }
      node = node[letter]
    }
    node[this.endSymbol] = true;
  }
}

module.exports = {
  SuffixTrie
}