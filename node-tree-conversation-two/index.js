module.exports = {
  readChat: (tree, userAnswers) => {
    return conversationTree(tree, userAnswers);
  }
}

function conversationTree(
  node,
  userAnswers = [],
  result = '',
  identation = '',
  answerIndex = 0,
  parentNode
) {
  
  if (!parentNode) parentNode = node;
  
  if (node.goto) {
    const nextNode = searchDFSNode(parentNode, node.goto);
    return conversationTree(
      nextNode,
      userAnswers,
      result,
      identation,
      answerIndex,
      parentNode
    );
  }
  
  if (answerIndex > 0) {
    identation = incrementIdentation(identation);
  }
  
  result = addCSMessages(node, result, identation);
  
  if (answerIndex < userAnswers.length) {
    const userAnswer = userAnswers[answerIndex];
    identation = incrementIdentation(identation);
    result = addUserMessages(result, identation, userAnswer);
    answerIndex++
    
    const userSaid = !!userAnswer.match(/yes/i);
    const nextNode = userSaid ? node.right : node.left;
    
    return conversationTree(
      nextNode,
      userAnswers,
      result,
      identation,
      answerIndex,
      parentNode
    );
  } else {
    return result;
  }
}

function incrementIdentation(identation) {
  identation += " ".repeat(4);
  return identation;
}

function addCSMessages(node, result, identation, answerIndex) {
  if (node.messages && node.messages.length) {
      node.messages.forEach(message => {
        const isConclusion = !node.left && !node.right;
        result += `${identation}${isConclusion ? '=' : ''}${message.text}\n`;
      });
  }
  
  return result;
}

function addUserMessages(result, identation, userAnswer) {
  result += `${identation}-${userAnswer}\n`;
  return result;
}

function searchDFSNode(node, targetLabel) {
   if (hasMessages(node, targetLabel)) {
     return node;
   }
   
   if (node.left) {
     return searchDFSNode(node.left, targetLabel);
   }
   
   if (node.right) {
     return searchDFSNode(node.right, targetLabel);
   }
}

function hasMessages(node = {messages: []}, targetLabel) {
  return node.messages.some(message => message.label === targetLabel);
}
