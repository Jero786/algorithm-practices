function getMinimumWaitingTime(queries) {
  if (!queries || queries.length === 0) return 0;
  
  // we need to sort, in order to wait as minimum
  // as possible at the beginning
  // The key here is the last one, it doesn't count.
  // So for that, we should kep it as the last one.
  queries.sort((a,b) => a - b);
  
  let result = [];
  let count = 0;
  
  for (let i = 1; i < queries.length; i++) {
    count += queries[i - 1]; // calculate each waiting time
    result.push(count);
  }
  
  return result.reduce((a,b) => a + b, 0);
}

module.exports = {
  getMinimumWaitingTime
}