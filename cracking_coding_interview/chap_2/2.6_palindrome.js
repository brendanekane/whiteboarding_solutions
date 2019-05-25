const findLength = head => {
  let length = 1,
      curNode = head;

  while (curNode.next) {
    length++;
    curNode = curNode.next;
  }
  return length;
};

const linkedListPalindrom = head => {
  if (!head) return false;
  if (!head.next) return true;

  let length = findLength(head),
      count = 0,
      curNode = head;
  const stack = [];

  // create stack with first half of list
  while (count < Math.floor(length/2)) {
    stack.push(curNode.val);
    curNode = curNode.next;
    count++;
  }

  // skip middle node if the list is an odd length
  if (length % 2 !== 0) curNode = curNode.next;

  // compare first half of list with second half of list
  while (stack.length > 1) {
    const curStack = stack.pop();
    if (curStack !== curNode.val) return false;
    curNode = curNode.next;
  }
  return true;
};
