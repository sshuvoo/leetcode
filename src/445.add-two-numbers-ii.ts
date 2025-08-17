/*
 * @lc app=leetcode id=445 lang=typescript
 *
 * [445] Add Two Numbers II
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
  const s1: number[] = []
  const s2: number[] = []
  while (l1 != null || l2 != null) {
    if (l1 != null) {
      s1.push(l1.val)
      l1 = l1.next
    }
    if (l2 != null) {
      s2.push(l2.val)
      l2 = l2.next
    }
  }
  let result: ListNode | null = null
  let carry = 0
  while (s1.length > 0 || s2.length > 0 || carry > 0) {
    let sum = carry
    if (s1.length > 0) {
      sum += s1.pop()!
    }
    if (s2.length > 0) {
      sum += s2.pop()!
    }
    const newNode = new ListNode(sum % 10)
    newNode.next = result
    result = newNode
    carry = Math.floor(sum / 10)
  }

  return result
}
// https://github.com/sshuvoo
// @lc code=end
