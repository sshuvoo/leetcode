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
  let curr: ListNode | null = head
  let prev: ListNode | null = head
  let lenght = 0
  while (curr != null) {
    lenght++
    curr = curr.next
    if (lenght > n + 1) {
      prev = prev!?.next
    }
  }
  if (prev != null && prev.next != null) {
    prev.next = prev.next.next
  } else if (prev != null) prev.next = prev.next

  return head
}
// @lc code=end
