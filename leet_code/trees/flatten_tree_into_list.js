const preorder = root => {
  if (!root) return [];
  const preorderArr = [],
        traverse = node => {
          preorderArr.push(node);
          if (node.left) traverse(node.left);
          if (node.right) traverse(node.right);
    };
  traverse(root);
  return preorderArr;
};

const flattenTreeIntoList = root => {
  if (!root) return null;
  const traversal = preorder(root);
  for (let i = 0; i < traversal.length; i++) {
    if (i === traversal.length - 1) {
      traversal[i].left = null;
      traversal[i].right = null;
    } else {
      traversal[i].left = null;
      traversal[i].right = traversal[i+1];
    }
  }
  return root;
};
