class ListNode {
    constructor(val) {
    this.val  = val;
    this.next = null;
    }
}

const listOfDepths = root => {
    if (!root) return [];
    if (!root.left && !root.right) return [new ListNode(root.val)];

    const queue = [root],
          result = [];

    while (queue.length > 0) {
        const subArr = [],
              length = queue.length;
        for (let i = 0; i < length; i++) {
            const curNode = queue.shift(),
                  newNode = new ListNode(curNode.val);
            if (i !== 0) {
                subArr[i-1].next = newNode;
            }
            subArr.push(newNode);
            if (curNode.left) queue.push(curNode.left);
            if (curNode.right) queue.push(curNode.right);
        }
        result.push(subArr[0]);
    }
    return result;

};
