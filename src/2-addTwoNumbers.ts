// Definition for singly-linked list.
class ListNode {
   val: number;
   next: ListNode | null;
   constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
   }
}

const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);

const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

function addTwoNumbers(
   l1: ListNode | null,
   l2: ListNode | null
): ListNode | null {
   let str1 = "";
   let str2 = "";
   let next1 = l1;
   let next2 = l2;
   while (next1) {
      str1 = next1.val + str1;
      next1 = next1.next;
   }
   while (next2) {
      str2 = next2.val + str2;
      next2 = next2.next;
   }
   const arr1 = str1.split("");
   const arr2 = str2.split("");
   const total: number[] = [];
   let i = arr1.length - 1;
   let j = arr2.length - 1;
   let carry = 0;
   while (i >= 0 || j >= 0) {
      let sum = parseInt(arr1[i--] ?? "0") + parseInt(arr2[j--] ?? "0") + carry;
      total.push(sum > 9 ? sum % 10 : sum);
      carry = sum > 9 ? 1 : 0;
   }
   if (carry) total.push(carry);
   let newList = new ListNode(total[0]);
   let current = newList;
   for (let i = 1; i < total.length; i++) {
      current.next = new ListNode(total[i]);
      current = current.next;
   }
   return newList;
}

console.log(addTwoNumbers(list1, list2));
