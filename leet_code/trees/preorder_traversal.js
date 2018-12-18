const preorderTraversal = (root, result = []) => {
    if (!root) return result;

    result.push(root.val);
    if (root.left) preorderTraversal(root.left, result);
    if (root.right) preorderTraversal(root.right, result);
    return result;
};
