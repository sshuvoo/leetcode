/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
 */

import { TreeNode } from './types.js'

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
function dfs(root: TreeNode | null, ans: number[]) {
  if (root == null) return
  dfs(root.left, ans)
  dfs(root.right, ans)
  ans.push(root.val)
}
function postorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  dfs(root, ans)
  return ans
}
// @lc code=end
