const findIntersection = (headA, headB) => {
  if (!headA || !headB) return null;
  else if (headA == headB) return headA;

  let listOne = headA;
  let listTwo = headB;

  while (listOne && listTwo && (listOne != listTwo)) {
    listOne = listOne.next;
    listTwo = listTwo.next;

    if (listOne == listTwo) return listOne;
    if (!listOne) listOne = headB;
    if (!listTwo) listTwo = headA;
  }
  return listOne;
};
