/*
 * @lc app=leetcode id=328 lang=typescript
 *
 * [328] Odd Even Linked List
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

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next || !head.next.next) return head
  let pointer = 1
  let curr: ListNode | null = head
  const dummyOdd = new ListNode()
  const dummyEven = new ListNode()
  let currOdd = dummyOdd
  let currEven = dummyEven
  while (curr) {
    if (pointer % 2 === 1) {
      currOdd.next = curr
      currOdd = currOdd.next
    } else {
      currEven.next = curr
      currEven = currEven.next
    }
    pointer++
    curr = curr.next
  }
  currOdd.next = dummyEven.next
  return dummyOdd.next
}
// @lc code=end
