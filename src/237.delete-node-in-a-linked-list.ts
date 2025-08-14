/*
 * @lc app=leetcode id=237 lang=typescript
 *
 * [237] Delete Node in a Linked List
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

/**
 Do not return anything, modify it in-place instead.
 */
// https://github.com/sshuvoo
function deleteNode(node: ListNode): void {
  // swap the val with next node, delete the next node
  node.val = node.next!.val
  node.next = node.next!.next
}
// https://github.com/sshuvoo
// @lc code=end
