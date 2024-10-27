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
function middleNode(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
//    [1, 2, 3, 4, 5] odd(n)
// 1st    s  f
// 2nd       s     f

//    [1, 2, 3, 4] even(n)
// 1st    s  f
// 2nd       s    f = null

// https://leetcode.com/u/nofaceman/
// https://github.com/sshuvoo (Give me star)
// @lc code=end
