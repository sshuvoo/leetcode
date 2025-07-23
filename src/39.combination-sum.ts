/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
// https://github.com/sshuvoo
function combinationSum(candidates: number[], target: number): number[][] {
  const len = candidates.length
  const c: number[][] = []
  const cc: number[] = []
  function recursiveCS(t: number, i: number = 0): void {
    if (i >= len || t < 0) return
    if (t == 0) {
      c.push([...cc])
      return
    }
    const cv = candidates[i]
    // include same eliment
    cc.push(cv)
    recursiveCS(t - cv, i)
    // exclude the element
    cc.pop()
    recursiveCS(t, i + 1)
  }
  recursiveCS(target)
  return c
}
// [2,3,6,7]
// https://github.com/sshuvoo
// @lc code=end
