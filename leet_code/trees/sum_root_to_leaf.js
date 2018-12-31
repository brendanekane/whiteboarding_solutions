const sumRootToLeaf = (root) => {
  if (!root) return 0;
  let sum = 0;
  const traverse = (node, strNum = "") => {
    strNum += node.val;
    if (!node.left && !node.right) sum += parseInt(strNum);
    if (node.left) traverse(node.left, strNum);
    if (node.right) traverse(node.right, strNum);
  };
  traverse(root);
  return sum;
};
