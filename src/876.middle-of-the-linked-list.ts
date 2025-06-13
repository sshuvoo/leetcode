/*
 * @lc app=leetcode id=876 lang=typescript
 *
 * [876] Middle of the Linked List
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
function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  while (fast != null && fast.next != null) {
    slow = slow!.next
    fast = fast.next.next
  }
  return slow
}
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo (Give me star)
// @lc code=end
