/*
 * @lc app=leetcode id=2965 lang=typescript
 *
 * [2965] Find Missing and Repeated Values
 */

// @lc code=start
function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const hashSet = new Set<number>()
  const len = grid.length
  const ans: number[] = []
  let sum = (len ** 2 * (len ** 2 + 1)) / 2
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const num = grid[i][j]
      if (hashSet.has(num)) {
        ans[0] = num
      } else {
        hashSet.add(num)
        sum -= num
      }
    }
  }
  ans[1] = sum
  return ans
}
// @lc code=end
