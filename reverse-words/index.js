function reverse(text) {
  let words = text.split(' ');
  for (
    let i = 0, x = words.length - 1;
    i < Math.floor(words.length / 2);
    i++, x--
  ) {
      words = swap(words, i, x);
  }
  return words.join(' ');
}

function swap(array, index, indexNew) {
  const temp = array[index];
  array[index] = array[indexNew];
  array[indexNew] = temp;
  return array;
}

module.exports = {
  reverse
}