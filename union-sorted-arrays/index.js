function unionArray(arrayOne, arrayTwo) {
  const newSize = arrayOne.length + arrayTwo.length;
  let indexArrayOne = 0;
  let indexArrayTwo = 0;
  let newList = [];
  for (let i = 0; i < newSize; i++) {
    if (arrayOne[indexArrayOne] < arrayTwo[indexArrayTwo]) {
      newList.push(arrayOne[indexArrayOne])
      indexArrayOne++;
    } else {
      newList.push(arrayTwo[indexArrayTwo])
      indexArrayTwo++;
    }
  }
  
  return newList;
}

module.exports = {
  unionArray
}