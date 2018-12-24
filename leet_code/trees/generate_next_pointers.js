const connectNext = root => {
    if (!root) return;

    let queue = [root];

    while (queue.length > 0) {
        const len = queue.length,
              newQueue = [];
        for (let i = 0; i < len; i++) {
            const cur = queue.shift();
            queue.length === 0 ? cur.next = null : cur.next = queue[0];
            if (cur.left) newQueue.push(cur.left);
            if (cur.right) newQueue.push(cur.right);
        }
        queue = queue.concat(newQueue);
    }
};
