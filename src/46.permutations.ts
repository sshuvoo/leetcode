/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function swap(nums: number[], i: number, j: number): void {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
function permute(nums: number[]): number[][] {
  const len = nums.length
  const ps: number[][] = []
  function recursiveP(i: number = 0) {
    if (i == len) {
      ps.push([...nums])
    }
    for (let j = i; j < len; j++) {
      swap(nums, i, j)
      recursiveP(i + 1)
      swap(nums, i, j)
    }
  }
  recursiveP()
  return ps
}
// [1,2,3]
// @lc code=end
