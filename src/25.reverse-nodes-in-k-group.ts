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
  let curr: ListNode | null = head
  let count = 0
  while (curr != null && count<=k) {
    count++
    curr = curr.next
  }
  if (count != k) {
    return head
  }

 const revNodes = reverseKGroup(curr, k)

  count = 0
  curr = head

  while(count<=k){
    const restNode = curr.next
    curr.next = revNodes
    curr = restNode
  }


 
}
// @lc code=end
