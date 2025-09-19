/*
 * @lc app=leetcode id=2181 lang=typescript
 *
 * [2181] Merge Nodes in Between Zeros
 */

import { ListNode } from './types.js'

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

function mergeNodes(head: ListNode | null): ListNode | null {
  function getSum(head: ListNode | null):number {

  }
  const merged = mergeNodes(head)
  const newNode = new ListNode(getSum(head))
  newNode.next = merged
  return newNode
}
// @lc code=end
