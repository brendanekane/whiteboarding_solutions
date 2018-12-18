const postorderTraversal = (root, result = []) => {
    if (!root) return result;
    if (root.left) postorderTraversal(root.left, result);
    if (root.right) postorderTraversal(root.right, result);
    result.push(root.val);
    return result;
};
