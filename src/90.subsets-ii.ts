/*
 * @lc app=leetcode id=90 lang=typescript
 *
 * [90] Subsets II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  const len = nums.length
  nums.sort((a, b) => a - b)
  const ss: number[][] = []
  const cc: number[] = []
  function recursiveSS(i: number = 0): void {
    ss.push([...cc])
    for (let j = i; j < len; j++) {
      if (j > i && nums[j] == nums[j - 1]) continue
      const cv = nums[j]
      cc.push(cv)
      recursiveSS(j + 1)
      cc.pop()
    }
  }
  recursiveSS()
  return ss
}
// @lc code=end
