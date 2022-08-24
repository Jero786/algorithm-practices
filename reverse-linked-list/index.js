/**
 *
 * Remember the hands movements:
 *
 *
 * Current next -> Next
 * Prev -> Current next
 * Current -> Prev
 * Next -> Current
 *
 * or draw in the air with your hands:
 *
 *                      (0)
 *                .  Curr-next    #
 *               /                  \
 *            (2)                    (1)
 *           /                         \
 *          #                            .
 *       Prev . - (3) - # Curr . - (4)- # Next
 *
 * @param {*} headNode
 * @returns
 */
const reverseLinkedList = (headNode) => {
  let previous;
  let current = headNode;
  let next;

  while (current !== undefined) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

module.exports = {
  reverseLinkedList
};
