const maxDepth = root => {
    if (!root) return 0;
    let answer = 0,
        depth = 0;

    const traverse = (node, depth) => {
        if (!node) return depth;
        leftDepth = traverse(node.left, depth + 1);
        rightDepth = traverse(node.right, depth + 1);
        tempMax = Math.max(leftDepth, rightDepth);

        if (tempMax > answer) answer = tempMax;
        return answer;
    };
    return traverse(root, depth);
};
