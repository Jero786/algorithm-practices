const ADD_OPERATION = 1;
const DELETE_OPERATION = 2;
const PRINT_OPEARTION = 3;

/**
 * Without heap data structure.
 * Time: O(N2) worst case
 * @param input
 */
function printHeap(input) {
  const rows = input.split("-")
  const length = +rows[0];
  const data = [];
  
  for (let i = 1; i <= length; i++) { // O(n)
    const [operation, value] = rows[i].split(' ');
    operationStrategy[operation](value, data); // O(1) -> insert || O(n.log(n) --> peek min)
  }
}

/**
 * With heap data structure.
 * Time: O(n) worst case
 * @param input
 */
function printHeapPerformant(input) {
  const rows = input.split("-")
  const length = +rows[0];
  const minHeap = MinHeap();
  
  for (let i = 1; i <= length; i++) { // O(n) --> worst case
    const [operation, value] = rows[i].split(' ');
    performantOperationStrategy[operation](value, minHeap); // insert --> O log(n) || peek min --> O(i)
  }
}

const operationStrategy = {
  [ADD_OPERATION]: (value, array) => array.push(value), // O(1) because it's inserted at the end of the array.
  [DELETE_OPERATION]: (value, array) => array.splice(array.indexOf(value), 1),
  [PRINT_OPEARTION]: (_, array) => {
    // We need to print the min number of the current array
    const min = array.sort((a, b) => a - b)[0]; // O(nlog(n))
    console.log(min);
  }
}

const performantOperationStrategy = {
  [ADD_OPERATION]: (value, array) => array.insert(value), // O(log(n)) because it's inserted in the heap and then hipify
  [DELETE_OPERATION]: (value, array) => array.remove(value),
  [PRINT_OPEARTION]: (_, array) => {
    // We need to print the min number of the current array
    const min = array.peek(); //  O(log(n))
    console.log(min);
  }
}

/**
 * Heaps data structure, for full explanation let's check the video: https://www.youtube.com/watch?v=t0Cq6tVNRBA
 */
function MinHeap() {
  let items = [];
  // Helper methods
  const getLeftChildIndex = parentIndex => 2 * parentIndex + 1;
  const getRightChildIndex = parentIndex => 2 * parentIndex + 2;
  const getParentIndex = childIndex => (childIndex - 1) / 2;
  const hasLeftChild = index => getLeftChildIndex(index) < items.length;
  const hasRightChild = index => getRightChildIndex(index) < items.length;
  const hasParent = index => getParentIndex(index) < items.length;
  const leftChild = index => items[getLeftChildIndex(index)];
  const rightChild = index => items[getRightChildIndex(index)];
  const parent = index => items[getParentIndex(index)];
  
  function swap(indexOne, indexTwo) {
    const temp = items[indexOne];
    items[indexOne] = items[indexTwo];
    items[indexTwo] = temp;
  }
  
  /**
   * Start from the top of the tree/array and re-locate the top of the heap
   * into their proper bottom position. In this way we will warranty that minimum
   * value will remain at the top of the tree/array. And Higher values will remain
   * at the bottom of the tree/array.
   */
  function heapifyDown() {
    let index = 0;
    // Walk down from the top of the tree/array to the bottom (like capturing event direction).
    // only walk to left side, (if there is not left child, should not exist right side)
    while (hasLeftChild(index)) {
      let smallerChildIndex = getLeftChildIndex(index);
      
      if (hasRightChild(index) && rightChild(index) < leftChild(index)) {
        // only if exist and right child is smaller than left child
        smallerChildIndex = getRightChildIndex(index);
      }
      const isCurrentParentNodeSmallerThanMyChildren = items[index] < items[smallerChildIndex];
      if (isCurrentParentNodeSmallerThanMyChildren) {
        break;
      } else {
        swap(index, smallerChildIndex);
        index = smallerChildIndex;
      }
    }
  }
  
  function heapifyUp() {
    let index = items.length - 1;
    // Walk up from the bottom of the tree/array to the top (like bubbling event direction).
    while(hasParent(index) && parent(index) > items[index]) {
      const parentIndex = getParentIndex(index);
      swap(parentIndex, index);
      index = parentIndex;
    }
  }
  
  return {
    /**
     * Return the min element from the top of the tree/array.
     * Time: O(1)
     * @returns {*}
     */
    peek: () => items[0],
    /**
     * Extract the min element and remove from the top of the tree/array.
     * NOTE: this method is not been used in this example, but it's a common
     * operation of Heap data structure.
     * @returns {*}
     */
    poll: () => {
      const top = items.shift(); // remove top
      items[0] = items[items.length - 1]; // swap bottom item to top of the tree/array
      heapifyDown(); // O(log(n))
      return top;
    },
    /**
     * Add the item at the end of the tree/array and then re-order the heap.
     * @param item
     */
    insert: (item) => {
      items.push(item); // add latest item at the bottom of the tree/array
      heapifyUp(); // O(log(n))
    },
    remove: value => {
      items.splice(items.indexOf(value), 1);
    }
  }
}

module.exports = {
  printHeap,
  printHeapPerformant
}