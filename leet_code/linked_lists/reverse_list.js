const reverseList = head => {
  if (!head) return null;
  if (!head.next) return head;

  let finalHead = head;
  let nextNode = head.next;

  while (nextNode) {
    head.next = nextNode.next;
    nextNode.next = finalHead;
    finalHead = nextNode;
    nextNode = head.next;
  }
  return finalHead;
};
