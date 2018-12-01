const evenOddList = head => {
  if (!head || !head.next) return head;

   let cur = head;
   let oddCur = head;
   let evenCur = head.next;
   const evenHead = head.next;
   let count = 1;

   while (cur) {
       let oldNext = cur.next;
       cur.next ? cur.next = cur.next.next : cur.next = null;
       count % 2 !== 0 ? oddCur = cur : evenCur = cur;
       cur = oldNext;
       count++;
   }
   oddCur.next = evenHead;
   return head;
};
