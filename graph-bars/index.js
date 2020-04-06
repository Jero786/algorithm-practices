/**
 *
 * Given a graph bar, finds the largest rectangle area.
 *
 */
function getMaxAreaGivenSquares(graph) {
  let higherAreaFound = Number.MIN_VALUE;
  
  for (let i = 0; i < graph.length; i++) {
    const currentArea = getRectangleArea(i, graph);
    if (currentArea > higherAreaFound) {
      higherAreaFound = currentArea;
    }
  }
  
  return higherAreaFound;
}

function getRectangleArea(index, graph = []) {
  const graphValue = graph[index];
  for (let i = index + 1; i < graph.length; i++) {
    const bar = graph[i];
    if (bar === graphValue) {
      return i * bar;
    }
  }
  return graphValue;
}

module.exports = {
  getMaxAreaGivenSquares
};