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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head == null) return head
  let temp: ListNode | null = head
  let count = 0
  while (count < k && temp != null) {
    count++
    temp = temp.next
  }

  if (count < k) return head
  let restNodes = reverseKGroup(temp, k)

  temp = head
  count = 0

  while (count < k) {
    const nextNode: ListNode | null = temp!.next
    temp!.next = restNodes
    restNodes = temp
    temp = nextNode
    count++
  }

  return restNodes
}
// @lc code=end
