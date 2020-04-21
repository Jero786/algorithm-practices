const getUniqueNumber = (numbers) => {
  const dictionary = {};
  
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (!dictionary[number]) {
      dictionary[number] = i;
    } else {
      delete dictionary[number];
    }
  }
  // Always will have that map only one.
  return +Object.keys(dictionary)[0]
};

module.exports = {
  getUniqueNumber
};