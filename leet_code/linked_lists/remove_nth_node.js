const removeNthNode = (head, n) => {
  if (!head) return head;

  let length = 0;
  let cur = head;

  while (cur) {
    length += 1;
    cur = cur.next;
  }

  if (n === length) {
    head = head.next;
    return head;
  }

  let count = 1;
  cur = head;

  while (count < (length - n)) {
    cur = cur.next;
    count += 1;
  }
  cur.next = cur.next.next;
  return head;
};
