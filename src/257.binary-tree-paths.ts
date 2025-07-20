/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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
function dfs(root: TreeNode, paths: string[], path: string = '') {
  const newPath = path + (path == '' ? path : '->') + root.val
  if (root.left != null && root.right != null) {
    dfs(root.left, paths, newPath)
    dfs(root.right, paths, newPath)
  } else if (root.left != null) dfs(root.left, paths, newPath)
  else if (root.right != null) dfs(root.right, paths, newPath)
  else paths.push(newPath)
}

function binaryTreePaths(root: TreeNode | null): string[] {
  if (root == null) return []
  const paths: string[] = []
  dfs(root, paths)
  return paths
}
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo
// @lc code=end
