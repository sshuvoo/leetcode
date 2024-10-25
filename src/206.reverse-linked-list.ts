/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let curr: ListNode | null = head
  let next: ListNode | null = null
  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
// https://leetcode.com/u/nofaceman/
// https://github.com/sshuvoo (Give me star)
// @lc code=end
