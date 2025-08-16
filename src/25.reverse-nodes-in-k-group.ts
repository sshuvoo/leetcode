/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let curr = head
  let count = 0
  while (curr != null && count < k) {
    count++
    curr = curr.next
  }
  if (count < k) return head
  let rList = reverseKGroup(curr, k)
  count = 0
  while (count < k) {
    const next = head!.next
    head!.next = rList
    rList = head
    head = next
    count++
  }
  return rList
}
// https://github.com/sshuvoo
// @lc code=end
