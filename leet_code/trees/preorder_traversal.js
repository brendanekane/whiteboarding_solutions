const preorderTraversal = (root, result = []) => {
    if (!root) return result;
    result.push(root.val);
    if (root.left) preorderTraversal(root.left, result);
    if (root.right) preorderTraversal(root.right, result);
    return result;
};

// another solution

const preorderTraversal2 = root => {
  if (!root) return [];
  else {
    const result = [];
    const traverseRec = node => {
      result.push(node.val);
      if (node.left) traverseRec(node.left);
      if (node.right) traverseRec(node.right);
    };
    traverseRec(root);
    return result;
  }
};
