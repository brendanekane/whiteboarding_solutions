// Merge k sorted linked lists and return it as one sorted list.
//
// Example:
//
// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6


const mergeKLists = arr => {
  let newHead = null,
    cur = null;

  while (arr.length > 0) {
    let nextVal = null,
      idx = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === null) {
        continue;
      }
      if (nextVal === null || arr[i].val < nextVal) {
        nextVal = arr[i].val;
        idx = i;
      }
    }
    if (arr[idx] == null ) {
      arr = arr.slice(0,idx).concat(arr.slice(idx+1, arr.length));
      continue;
    } else if (newHead === null) {
      newHead = new ListNode(nextVal);
      cur = newHead;
    } else {
      cur.next = new ListNode(nextVal);
      cur = cur.next;
    }
    arr[idx] = arr[idx].next;
  }
  return newHead;
};
