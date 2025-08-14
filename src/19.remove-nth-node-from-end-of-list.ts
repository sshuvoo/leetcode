/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode()
  dummy.next = head
  let slow: ListNode | null = dummy
  let fast: ListNode | null = dummy
  for (let i = 0; i <= n; i++) {
    fast = fast!.next
  }
  while (fast != null) {
    fast = fast.next
    slow = slow!.next
  }
  slow!.next = slow!.next!.next
  return dummy.next
}
// @lc code=end
