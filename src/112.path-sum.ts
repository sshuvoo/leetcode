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

function hasPathSum(
  root: TreeNode | null,
  targetSum: number,
  i: number = 0
): boolean {
  if (i != 0 && root == null && targetSum == 0) return true
  if (root == null) return false
  const left = hasPathSum(root.left, targetSum - root.val, i + 1)
  const right = hasPathSum(root.right, targetSum - root.val, i + 1)
  return left || right
}
// @lc code=end
