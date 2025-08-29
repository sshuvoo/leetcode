/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
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
// https://github.com/sshuvoo
function dfs(root: TreeNode | null, ans: number[]) {
  if (root == null) return
  ans.push(root.val)
  dfs(root.left, ans)
  dfs(root.right, ans)
}
function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  dfs(root, ans)
  return ans
}
// https://github.com/sshuvoo
// @lc code=end
