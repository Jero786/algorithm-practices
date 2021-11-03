function getPiramid(high) {
  let result = '';
  let amountSpaces = high - 1;
  let amountStarts = 1;
  
  for (let floorIndex = 0; floorIndex < high; floorIndex++) {
    
    const starts = '*'.repeat(amountStarts);
    const spaces = ' '.repeat(amountSpaces);
    
    amountSpaces -= 1;
    amountStarts += 2;
    
    result += `${spaces}${starts}\n`;
  }
  
  return result;
}

module.exports = {
  getPiramid
}