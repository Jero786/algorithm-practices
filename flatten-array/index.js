const flattenArray = (array = [], newArray = []) => {
  
  for (const number of array) {
    if (Array.isArray(number)) {
      flattenArray(number, newArray);
    } else {
      newArray.push(number);
    }
  }
  
  return newArray;
};

module.exports = {
  flattenArray
};