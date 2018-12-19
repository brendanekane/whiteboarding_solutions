const maxDepth = root => {
    if (!root) return 0;
    let ans = 0,
        depth = 0;

    const traverse = (node, depth) => {
        if (!node) return depth;
        const left = traverse(node.left, depth + 1);
        const right = traverse(node.right, depth + 1);
        const tempMax = Math.max(left, right);
        if (tempMax > ans) ans = tempMax;
    };
    traverse(root, depth);
    return ans;
};
