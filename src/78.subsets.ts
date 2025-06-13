/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function getSubsets(nums: number[], index: number, currSubset: number[], allSubsets: number[][]) {
  if (index == nums.length) {
    allSubsets.push(currSubset)
    currSubset = []
    return
  }
  currSubset.push(nums[index])
  getSubsets(nums, index + 1, currSubset, allSubsets)
  currSubset.pop()
  getSubsets(nums, index + 1, currSubset, allSubsets)
}

function subsets(nums: number[]): number[][] {
  const allSubsets: number[][] = []
  let currSubset: number[] = []
  getSubsets(nums, 0, currSubset, allSubsets)
  return allSubsets
}
// @lc code=end
