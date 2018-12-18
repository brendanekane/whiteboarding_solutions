const inorderTraversal = (root, result = []) => {
    if (!root) return result;
    if (root.left) inorderTraversal(root.left, result);
    result.push(root.val);
    if (root.right) inorderTraversal(root.right, result);
    return result;
};


// another solution

const inorderTraversal2 = root => {
  if (!root) return [];
  else {
    const result = [];
    const traverseRec = node => {
      if (node.left) traverseRec(node.left);
      result.push(node.val);
      if (node.right) traverseRec(node.right);
    };
    traverseRec(root);
    return result;
  }
};
