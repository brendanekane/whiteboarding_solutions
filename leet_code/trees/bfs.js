const bfs = root => {
    if (!root) return [];
    const result = [],
          queue = [root];
    while (queue.length > 0) {
        const subArr = [],
              length = queue.length;
        for (let i = 1; i <= length; i++) {
            const node = queue.shift();
            subArr.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(subArr);
    }
    return result;
};
