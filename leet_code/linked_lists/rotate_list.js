const rotateList = (head, k) => {
  if (!head) return null;
  if (!head.next) return head;

  let tail = head,
      length = 1,
      step = 1;

  while (tail.next) {
    length++;
    tail = tail.next;
  }

  if ((length - k) % length === 0) return head;

  let cur = head,
      newHead = head.next;

  while (step < ((length - k) % length + length) % length ) {
    cur = cur.next;
    newHead = newHead.next;
    step++;
  }
  cur.next = null;
  tail.next = head;
  return newHead;
};
