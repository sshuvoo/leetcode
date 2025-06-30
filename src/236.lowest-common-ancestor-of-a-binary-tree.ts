/*
 * @lc app=leetcode id=236 lang=typescript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root == null || root == p || root == q) return root

  const leftLCA = lowestCommonAncestor(root.left, p, q)
  const rightLCA = lowestCommonAncestor(root.right, p, q)

  if (leftLCA != null && rightLCA != null) return root
  if (leftLCA != null) return leftLCA
  if (rightLCA != null) return rightLCA

  return null
}
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo
// @lc code=end
