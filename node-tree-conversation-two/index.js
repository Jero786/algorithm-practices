module.exports = {
  readChat: (tree, userAnswers) => {
    return conversationTree(tree, userAnswers);
  }
}

const IDENTATION_AMOUNT = 4;

// INPUTS:
//    conversationTree | user answers

// OUTPUTS:
//    print Agent output
//    print User answers
//    Identantion (4 spaces for level)
//    Output -> Identation + Answer
//    Answer ->  Identation + Ouput | Conclusion | GOTO
//    GOTO | Conclusion ->

function conversationTree(
  node,
  userAnswer,
  // recursion
  result = '',
  conversationIndex = 0,
  parentNode = null,
  identation = '',
) {
  
  if (conversationIndex === 0) {
    parentNode = node;
  }
  
  const isConclusionNode = !node.left && !node.right;
  
  if (isConclusionNode) {
    return result;
  } else {
    if (hasLabelGoTo(userAnswer, conversationIndex)) {
      const labelTarget = getLabelTo(userAnswer, conversationIndex);
      const nextNode = searchGoToNode(labelTarget, parentNode);
      
      return conversationTree(nextNode, userAnswer, result, conversationIndex + 1, parentNode, identation);
    } else {
      result = appendAgentMessages(node, result, identation);
      identation = incrementIdentation(identation);
      
      result = appendUserAnswerMessage(userAnswer, conversationIndex, result, identation);
      identation = incrementIdentation(identation);
      
      const nextNode = userSaid(userAnswer, conversationIndex)
        ? node.right
        : node.left;
      
      return conversationTree(nextNode, userAnswer, result, conversationIndex + 1, parentNode, identation);
    }
  }
}

function appendAgentMessages(node, result, identation) {
  const isConclusion = !node.left && !node.right;
  node.messages.forEach(message => {
    result += `${identation}${isConclusion
      ? '='
      : message.label
      ? `${message.label}:`
      : ''}${message.text}\n`;
  });
  return result;
}

function appendUserAnswerMessage(userAnswers, conversationIndex, result, indentation) {
  result += `${indentation}-${userAnswers[conversationIndex]}\n`;
  return result;
}

function userSaid(userAnswer, conversationIndex) {
  return userAnswer[conversationIndex].match(/yes/i);
}

function hasLabelGoTo(userAnswer, conversationIndex) {
  return userAnswer[conversationIndex].match(/>/);
}

function getLabelTo(userAnswer, conversationIndex) {
  const answer = userAnswer[conversationIndex];
  return answer.substring(answer.length - 1);
}

function searchGoToNode(labelTarget, node) {
  if (hasLabel(node)) {
    return node;
  }
  
  if (node.left) {
    return searchGoToNode(labelTarget, node.left);
  }
  
  if (node.right) {
    return searchGoToNode(labelTarget, node.right);
  }
}

function hasLabel(node, labelTarget) {
  return node.messages.some(message => message.label === labelTarget);
}

function incrementIdentation(identation) {
  identation += `${' '.repeat(IDENTATION_AMOUNT)}`;
  return identation;
}
