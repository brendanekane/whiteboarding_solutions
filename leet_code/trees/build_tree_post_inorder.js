class TreeNode{
    constructor(val){
      this.val = val;
      this.left = null;
      this.right = null;
      this.next = null;
    }
}


const buildTree = (inorder, postorder) => {
    if (inorder.length === 0) return null;

    const inLength = inorder.length - 1,
          postLength = postorder.length -1,
          idx = inorder.indexOf(postorder[postLength]),
          newNode = new TreeNode(postorder[postLength]);

    newNode.left = buildTree(inorder.slice(0,idx), postorder.slice(0,idx));
    newNode.right = buildTree(inorder.slice(idx+1,inLength+1), postorder.slice(idx, postLength));
    return newNode;
};
