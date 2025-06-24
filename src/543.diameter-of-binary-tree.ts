/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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
function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter: number = 0
  function maxHeight(curr: TreeNode | null): number {
    if (curr == null) return 0
    const lh = maxHeight(curr.left)
    const rh = maxHeight(curr.right)
    diameter = Math.max(diameter, lh + rh)
    return Math.max(lh, rh) + 1
  }
  maxHeight(root)
  return diameter
}
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo
// @lc code=end
