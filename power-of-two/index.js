function isPowerOfTwo(number) {
  let i = 1;
  while(i < number) {
    i *= 2;
  }
  
  return i === number;
}

module.exports = {
  isPowerOfTwo
};