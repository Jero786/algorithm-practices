const ADD_OPERATION = 1;
const DELETE_OPERATION = 2;
const PRINT_OPEARTION = 3;

const operationStrategy = {
  [ADD_OPERATION]: (value, array) => array.push(value),
  [DELETE_OPERATION]: (value, array) => array.splice(array.indexOf(value), 1),
  [PRINT_OPEARTION]: (_, array) => {
    // for each value that need to print we need to sort the array
    // and get the top O(nlog(n))
    const min = array.sort((a, b) => a - b)[0];
    console.log(min);
  }
}

/**
 * Without heap data structure.
 * Time: O(N)
 * @param input
 */
function printHeap(input) {
  const rows = input.split("-")
  const length = +rows[0];
  const data = [];
  
  for (let i = 1; i <= length; i++) { // O(n)
    const [operation, value] = rows[i].split(' ');
    // make a sort for each time that need to show the min
    // O (N * N(log(n)) == O(N2)
    operationStrategy[operation](value, data);
  }
}

function printHeapPerformant() {
  // TODO: In progress
}


module.exports = {
  printHeap,
  printHeapPerformant
}