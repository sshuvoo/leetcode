/*
 * @lc app=leetcode id=2095 lang=typescript
 *
 * [2095] Delete the Middle Node of a Linked List
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

function deleteMiddle(head: ListNode | null): ListNode | null {
   let curr = head
   let large: number = 1
   while (curr) {
      if (curr.val > large) large = curr.val
      curr = curr.next
   }
   let middleIndex = Math.floor(large / 2)
   if (middleIndex === 0 && head) return head.next
   let i = 0
   curr = head
   while (curr && i <= middleIndex) {
      curr = curr.next
      if (i === middleIndex) {
      }
      i++
   }
   return head
}
// @lc code=end
