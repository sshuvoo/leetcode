/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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

function minDepth(root: TreeNode | null): number {
  function dfs(root: TreeNode | null, depth: number): number {
    if (root == null) return depth
    const lDepth = dfs(root.left, depth + 1)
    const rDepth = dfs(root.right, depth + 1)
    return Math.min(lDepth, rDepth)
  }
  return dfs(root, 0)
}
// @lc code=end
