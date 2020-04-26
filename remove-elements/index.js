const removeNumAndGetLength = (nums, value) => {
  
  if (!Array.isArray(nums)) {
    return 0;
  }
  
  return nums.reduce((total, num) => {
    if (num !== value) {
      total++;
    }
    return total;
  }, 0)
  
};

module.exports = {
  removeNumAndGetLength
};