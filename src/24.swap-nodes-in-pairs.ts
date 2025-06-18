/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
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
function swapPairs(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head
  const node1 = head
  const node2 = head.next
  const restHead = head.next.next
  node1.next = swapPairs(restHead)
  node2.next = node1
  return node2
}
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo (Give me star)
// @lc code=end
