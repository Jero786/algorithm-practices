function isSameTree(p, q) {
  if (!p && !q) {
    return true;
  } else if (!p || !q) {
    return false;
  } else if (p.value !== q.value) {
    return false;
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
}

module.exports = {
  isSameTree
};
