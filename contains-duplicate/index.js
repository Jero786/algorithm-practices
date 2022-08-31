function hasDuplicate(numbers) {
  const dictionary = {};

  for (const number of numbers) {
    if (dictionary[number]) {
      return true;
    } else {
      dictionary[number] = 1;
    }
  }

  return false;
}

module.exports = {
  hasDuplicate
};
