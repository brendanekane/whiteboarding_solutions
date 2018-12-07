const numConnectComponents = (head, G) => {
  let cur = head,
      count = 0,
      found = false;

  while (cur) {
    if (G.includes(cur.val)) found = true;
    else if (found && !G.includes(cur.val)) {
      found = !found;
      count++;
    }
    cur = cur.next;
  }
  if (found) count++;
  return count;
};
