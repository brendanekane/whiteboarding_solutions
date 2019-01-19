// Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
//
// Note: If the given node has no in-order successor in the tree, return null.
//
// Example 1:
//
// Input: root = [2,1,3], p = 1
//
//   2
//  / \
// 1   3
// 
// Output: 2

const inorder = root => {
  if (!root) return [];
  const result = [],
        traverse = node => {
          if (node.left) traverse(node.left);
          result.push(node);
          if (node.right) traverse(node.right);
        };
  traverse(root);
  return result;
};

const inorderSuccessor = (root, p) => {
  const dfsArr = inorder(root);
  let idx = -1;

  for (let i = 0; i < dfsArr.length; i++) {
    if (dfsArr[i].val === p.val) {
      idx = i;
      break;
    }
  }

  if (idx === -1 || !dfsArr[idx+1]) return null;
  else return dfsArr[idx+1];
};
