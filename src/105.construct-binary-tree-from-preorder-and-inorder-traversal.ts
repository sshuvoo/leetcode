/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let preIdx = 0
  function recursiveBuild(st: number,inIdx: number,en: number): TreeNode | null {
    if (preIdx == preorder.length) return null
    const rootVal = preorder[preIdx]
    const rootIdx = inorder.indexOf(rootVal, inIdx)
    const root = new TreeNode(rootVal)
    root.left = recursiveBuild(++preIdx)
  }

  return recursiveBuild(0, 0, inorder.length - 1)
}
// @lc code=end

// [3,9,20,15,7], inorder = [9,3,15,20,7]
