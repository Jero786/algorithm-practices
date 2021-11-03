const subsets = (nums) => {
  
  const subsets = [[]];
  for (const num of nums) {
    subsets.map((el) => {
      subsets.push([...el, num]);
    });
  }
  return subsets;
}

module.exports = {
  subsets
}