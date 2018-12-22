class TreeNode{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTree = (preorder, inorder) => {
    if (preorder.length === 0) return null;

    const pLength = preorder.length,
          iLength = inorder.length,
          idx = inorder.indexOf(preorder[0]),
          newNode = new TreeNode(preorder[0]);

    newNode.left = buildTree(preorder.slice(1,idx+1), inorder.slice(0,idx));
    newNode.right = buildTree(preorder.slice(idx+1, pLength), inorder.slice(idx+1, iLength));
    return newNode;

};
