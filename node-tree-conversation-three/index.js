function buildConversationalTree(text = '') {
  const lines = text.split('\n');
  return buildTree(lines);
}

const IDENTATION = 4;

function readChat(
  node,
  answers,
  index = 0,
  indentation = '',
  result = [],
  headNode = node
) {
  
  if (index === 0) {
    headNode = node;
  }
  
  if (!node || !node.messages || node.messages.length === 0) {
    return result.reduce((total, textLine) => {
      total += textLine;
      return total;
    }, '');
  }
  
  if (node.goto) {
    const nextNode = dfs(headNode, node.goto);
    return readChat(nextNode, answers, index + 1, indentation, result, headNode);
  } else {
    result.push(getMessages(node.messages, indentation));
    indentation = incrementIdentation(indentation);
    result.push(getAnswers(answers, index, indentation));
    indentation = incrementIdentation(indentation);
    let nextNode;
    if (hasUserSaidYes(answers[index])) {
      nextNode = node.right;
    } else {
      nextNode = node.left;
    }
    return readChat(nextNode, answers, index + 1, indentation, result, headNode)
  }
}


function dfs(node, labelTarget) {
  if (hasLabel(node, labelTarget)) {
    return node;
  }
  if (node.left) {
    dfs(node.left)
  }
  if (node.right) {
    dfs(node.right);
  }
}

function hasLabel(node = {messages: []}, label = '') {
  if (node.messages && node.messages.length > 0) {
    return node.messages.some(messageHasLabel(label))
  }
  return false;
}

function messageHasLabel(message) {
  return (label = '') => String(message.label) === String(label);
}

function incrementIdentation(indentation) {
  return `${' '.repeat(IDENTATION)}${indentation}`
}

function getAnswers(answers, index, identation) {
  const answer = answers[index];
  return `${identation}-${answer}\n`;
}

function getMessages(messages, identation) {
  let output = '';
  for (const message of messages) {
    let goToLabel = '';
    if (hasGoTo(message)) {
      goToLabel = `${message.goto}:`;
    }
    output += `${identation}${goToLabel}${message.text}\n`;
  }
  
  return output;
}

function buildTree(
  textLines,
  node = {},
  index = 0,
  headNode
) {
  if (textLines.length === index) return node;
  
  if (index === 0) {
    headNode = node;
  }
  
  if (!node.messages) node.messages = [];
  
  const text = textLines[index];
  let nextNode = node;
  
  if (isOutput(text) || isConclusion(text)) {
    const label = getLabel(text);
    node.messages.push({
      text,
      ...(label && {label})
    });
  } else if (isAnswer(text)) {
    if (hasUserSaidYes(text)) {
      node.right = {};
      nextNode = node.right;
    } else {
      node.left = {};
      nextNode = node.left;
    }
  } else if (isGoTo(text)) {
    node.goto = getGoTo(text);
  }
  
  buildTree(textLines, nextNode, index + 1, headNode);
  
  return headNode;
}

function isConclusion(text = '') {
  return text[0] === '=';
}

function isOutput(text = '') {
  return !isAnswer(text) && !isGoTo(text);
}

function isAnswer(text = '') {
  return text[0] === '-';
}

function hasGoTo(message) {
  return message && message.goto;
}

function getLabel(text = '') {
  if (text.length > 2 && text.includes(':')) {
    return text.substring(0, text.indexOf(':'));
  }
}

function hasUserSaidYes(text = '') {
  return !!text.match(/yes/i);
}

function isGoTo(text = '') {
  return text[0] === '>';
}

function getGoTo(text = '') {
  return text.substring(0, text.indexOf('>'))
}

// INPUTS:
//    conversationTree | user answers

// OUTPUTS:
//    print Agent output
//    print User answers
//    Identantion (4 spaces for level)
//    Output -> Identation + Answer
//    Answer ->  Identation + Ouput | Conclusion | GOTO
//    GOTO | Conclusion ->

module.exports = {
  buildConversationalTree,
  readChat,
}