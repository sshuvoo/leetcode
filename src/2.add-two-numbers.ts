/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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
// https://github.com/sshuvoo
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode()
  let curr = dummy
  let carry = 0
  while (l1 != null || l2 != null || carry > 0) {
    let sum = carry
    if (l1 != null) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2 != null) {
      sum += l2.val
      l2 = l2.next
    }
    const newNode = new ListNode(sum % 10)
    curr.next = newNode
    curr = curr.next
    carry = Math.floor(sum / 10)
  }
  return dummy.next
}
// https://github.com/sshuvoo
// @lc code=end
