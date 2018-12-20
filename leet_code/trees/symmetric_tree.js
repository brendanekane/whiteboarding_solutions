const inorder = root => {
    if (!root) {
        return [];
    } else {
        const res = [];
        let depth = 0;

        const traverse = (node, depth) => {
            if (node.left) traverse(node.left, depth + 1);
            res.push([node.val, depth]);
            if (node.right) traverse(node.right, depth + 1);
        };

        traverse(root, depth);
        return res;
    }
};
const isSymmetric = root => {
    if (!root) return true;

    const left = inorder(root.left),
          right = inorder(root.right).reverse();

    if (left.length !== right.length) return false;

    for (let i = 0; i < left.length; i++) {
        const lVal = left[i][0],
              rVal = right[i][0],
              lDepth = left[i][1],
              rDepth = right[i][1];

        if (lVal !== rVal || (lVal === rVal && lDepth !== rDepth)) {
            return false;
        }
    }
    return true;
};
