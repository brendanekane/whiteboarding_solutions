const rangeSumBST = (root, L, R) => {
  if (!root) return;
  else {
    let sum = 0;
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.val >= L && node.val <= R) sum += node.val;
      if (node.right) traverse(node.right);
    };
    traverse(root);
    return sum;
  }
};
