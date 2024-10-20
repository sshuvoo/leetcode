/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
   if (!head) return head
   let curr: ListNode | null = head
   while (curr.next) {
      console.log(curr.val)
      curr = curr.next
   }
}

// @lc code=end

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
