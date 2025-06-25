/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
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
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo (Give me star)
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null || q == null) return p == q
  const isLSame = isSameTree(p.left, q.left)
  const isRSame = isSameTree(p.right, q.right)
  return p.val == q.val && isLSame && isRSame
}
// @lc code=end
