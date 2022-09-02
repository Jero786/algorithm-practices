const transverseBFS = (head) => {
  let result = [];
  let stack = [head];

  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode && currentNode.value) result.push(currentNode.value);

    if (currentNode.childrens) {
      for (const child of currentNode.childrens) {
        stack.unshift(child);
      }
    }
  }

  return result;
};

module.exports = {
  transverseBFS
};
