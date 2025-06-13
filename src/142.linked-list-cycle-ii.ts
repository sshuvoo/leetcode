/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
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
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo (Give me star)
function detectCycle(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  let hasCycle = false
  while (fast != null && fast.next != null) {
    slow = slow!.next
    fast = fast.next.next
    if (slow == fast) {
      hasCycle = true
      break
    }
  }
  if (hasCycle) {
    slow = head
    while (slow != fast) {
      slow = slow!.next
      fast = fast!.next
    }
    return slow
  } else return null
}
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo (Give me star)
// @lc code=end
