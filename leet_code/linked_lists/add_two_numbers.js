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

const createNewList = (str1, str2) => {
  let sum = (parseInt(str1) + parseInt(str2)).toString();
  const head = new ListNode(parseInt(sum[0]));
  let cur = head;

  sum = sum.slice(1, sum.length);
  for (let i = 0; i < sum.length; i++) {
    newNode = new ListNode(parseInt(sum[i]));
    i === 0 ? head.next = newNode : cur.next = newNode;
    cur = newNode;
  }
  return head;
};

const addTwoNumbers = (l1, l2) => {
  const reverse1 = reverseList(l1),
        reverse2 = reverseList(l2);

  let str1 = "",
      str2 = "",
      cur = reverse1;

  while (cur) {
    str1 += cur.val.toString();
    cur = cur.next;
  }

  cur = reverse2;
  while (cur) {
    str2 += cur.val.toString();
    cur = cur.next;
  }

  let head = createNewList(str1, str2);
  return reverseList(head);
};
