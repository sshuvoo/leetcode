/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
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
function reverseBetween(head: ListNode | null,left: number,right: number): ListNode | null {
  if (left == right) return head
  const dummy = new ListNode(0, head)
  let preTail: ListNode | null = dummy

  for (let i = 1; i < left; i++) {
    preTail = preTail!.next
  }

  let rHead: ListNode | null = preTail!.next // reverse part head

  let prev: ListNode | null = null
  let curr: ListNode | null = rHead

  for (let i = 1; curr != null && i <= right - left + 1; i++) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  rHead!.next = curr
  preTail!.next = prev

  return dummy.next
}
// https://github.com/sshuvoo
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// @lc code=end
