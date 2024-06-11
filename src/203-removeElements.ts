class ListNode {
   val: number;
   next: ListNode | null;
   constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
   }
}

const linkedList = new ListNode(1);
// linkedList.next = new ListNode(1);
linkedList.next = new ListNode(2);
linkedList.next.next = new ListNode(6);
linkedList.next.next.next = new ListNode(3);
linkedList.next.next.next.next = new ListNode(4);
linkedList.next.next.next.next.next = new ListNode(5);
linkedList.next.next.next.next.next.next = new ListNode(6);

function removeElements(head: ListNode | null, val: number): ListNode | null {
   let current = head;
   let prev = null;
   while (current) {
      if (current.val === val) {
         if (prev === null) head = current.next;
         else prev.next = current.next;
      } else prev = current;
      current = current.next;
   }
   return head;
}
