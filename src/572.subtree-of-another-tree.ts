/*
 * @lc app=leetcode id=572 lang=typescript
 *
 * [572] Subtree of Another Tree
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
// https://github.com/sshuvoo
function isIdentical(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null || q == null) return p == q
  const isLSame = isIdentical(p.left, q.left)
  const isRSame = isIdentical(p.right, q.right)
  return p.val == q.val && isLSame && isRSame
}
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root == null || subRoot == null) return root == subRoot

  if (root.val == subRoot.val && isIdentical(root, subRoot)) {
    return true
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}
// @lc code=end
