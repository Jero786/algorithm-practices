const ScheduleWork = (() => {
  let queue = [];
  
  return {
    queue(operation) {
      queue.unshift(operation)
    },
    dequeue() {
      return queue.pop();
    },
    flush() {
      const newQueue = [...queue];
      queue = [];
      return newQueue;
    }
  }
})();

function setState(change) {
  ScheduleWork.queue(change)
}


module.exports = {
  setState
};