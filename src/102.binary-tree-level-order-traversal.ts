/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  if (root == null) return []
  const result: number[][] = []
  const queue: (TreeNode | null)[] = []
  let temp: number[] = []
  queue.push(root)
  queue.push(null)
  while (queue.length > 0) {
    const curr = queue.pop()
    if (curr == null) {
      result.push(temp)
      temp = []
      if (queue.length != 0) {
        queue.push(null)
      }
    } else {
      temp.push(curr.val)
      if (curr.left != null) queue.push(curr.left)
      if (curr.right != null) queue.push(curr.right)
    }
  }
  return result
}
// @lc code=end
