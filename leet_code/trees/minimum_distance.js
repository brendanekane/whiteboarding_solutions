const inorder = root => {
  if (!root) return [];
  else {
    const result = [],
      traverse = node => {
        if (node.left) traverse(node.left);
        result.push(node.val);
        if (node.right) traverse(node.right);
    };
    traverse(root);
    return result;
  }
};

const getMinimumDifference = (root) => {
  const traversal = inorder(root);
  let diff = Infinity;
  for (let i = 0; i < traversal.length - 1; i++) {
    const newDiff = traversal[i+1] - traversal[i];
    if (newDiff < diff) diff = newDiff;
  }
  return diff;
};
