/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
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

function dfs(root: TreeNode | null, targetSum: number): boolean {
  if (root == null && targetSum == 0) return true
  if ((root == null && targetSum != 0) || targetSum <= 0) return false
  const nextTarget = targetSum - root!.val
  return dfs(root!.left, nextTarget) || dfs(root!.right, nextTarget)
}
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root == null) return false
  return dfs(root, targetSum)
}
// @lc code=end
