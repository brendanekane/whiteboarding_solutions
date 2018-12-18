const postorderTraversal = (root, result = []) => {
    if (!root) return result;
    if (root.left) postorderTraversal(root.left, result);
    if (root.right) postorderTraversal(root.right, result);
    result.push(root.val);
    return result;
};


// another solution

const postorderTraversal2 = root => {
  if (!root) return [];
  else {
    const result = [];
    const traverseRec = node => {
      if (node.left) traverseRec(node.left);
      if (node.right) traverseRec(node.right);
      result.push(node.val);
    };
    traverseRec(root);
    return result;
  }
};
