const isValidBST = (root) => {
  if (!root || (!root.left && !root.right)) return true;
  let result = true;
  const inorder = [],
        traverse = node => {
          if (node.left) traverse(node.left);
          inorder.push(node.val);
          const last = inorder.length - 1;
          if (inorder.length > 1 && inorder[last] <= inorder[last-1]) {
            result = false;
          }
          if (node.right) traverse(node.right);
        };
  traverse(root);
  return result;
};
