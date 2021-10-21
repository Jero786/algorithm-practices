module.exports = {
  readChat: (tree, userAnswers) => {
    return conversationTree(tree, userAnswers);
  }
}

function conversationTree(
  tree,
  userAnswers,
  result = '',
  identationLevel = 0,
  answerIndex = 0,
  originalParent,
) {
  if (!originalParent) {
    originalParent = tree;
  }
  
  if (tree.goto) {
    const targetNode = searchDFS(originalParent, tree.goto);
    if (targetNode) {
      result += `${getIdentationText(identationLevel)}Output(text=">${tree.goto}")\n`
      
      const targetNodeWithMessageChanged = {
        ...targetNode,
        messages: filterUnneededMessages(targetNode, tree)
      }
      
      return conversationTree(
        targetNodeWithMessageChanged,
        userAnswers,
        result,
        identationLevel,
        answerIndex,
        originalParent,
      );
    }
  }
  
  tree.messages
    .map(node => getOutputText(tree, identationLevel, node.text))
    .forEach(output => {result += `${output}\n`});
  
  const userSaidText = userAnswers[answerIndex];
  const userSaid = getAnswerUser(userSaidText);
  const nextNode = userSaid ? tree.right : tree.left;
  
  if (nextNode) {
    answerIndex++;
    identationLevel += 4;
    
    const answerText = getAnswerText(identationLevel, userSaidText);
    result += `${answerText}\n`
    identationLevel += 4;
    
    return conversationTree(
      nextNode,
      userAnswers,
      result,
      identationLevel,
      answerIndex,
      originalParent,
    );
  } else {
    return result;
  }
}

function filterUnneededMessages(targetNode, tree) {
  return targetNode.messages
    .slice(targetNode.messages
    .findIndex(msg => msg.label === tree.goto), targetNode.messages.length);
}

function getIdentationText(identation) {
  return identation
    ? " ".repeat(identation)
    : "";
}

function getAnswerUser(text = '') {
  return !!text.match(/yes/i);
}

function getOutputText(conversationTree, identationLevel, text) {
  const labelText = !conversationTree.left && !conversationTree.right
    ? 'Conclusion='
    : 'Output';
  return `${getIdentationText(identationLevel)}${labelText}(text="${text}"${
    conversationTree.label
      ? `, label=${conversationTree.label}`
      : ''
  })`;
}

function getAnswerText(identationLevel, text) {
  return `${getIdentationText(identationLevel)}- Answer(text="${text}")`;
}

function searchDFS(tree, labelTarget) {
  if (hasMessageLabel(tree, labelTarget)) {
    return tree;
  }
  
  if (tree.left) {
    return searchDFS(tree.left);
  }
  if (tree.right) {
    return searchDFS(tree.right);
  }
}

function hasMessageLabel(tree, labelTarget) {
  if (tree && tree.messages && tree.messages.length) {
    return tree.messages.some(msg => msg.label === labelTarget);
  }
}

