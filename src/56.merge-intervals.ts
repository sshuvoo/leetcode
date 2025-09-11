/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
// https://github.com/sshuvoo
function merge(intervals: number[][]): number[][] {
  const n = intervals.length
  intervals.sort((a, b) => a[0] - b[0])
  const ans: number[][] = [intervals[0]]
  for (let i = 1; i < n; i++) {
    const lastIdx = ans.length - 1
    const curr = intervals[i], prev = ans[lastIdx]
    if (curr[0] <= prev[1]) {
      ans[lastIdx] = [prev[0], Math.max(curr[1], prev[1])]
    } else ans.push(curr)
  }
  return ans
}
// https://github.com/sshuvoo
// console.log(
//   merge([
//     [2, 3],
//     [4, 5],
//     [6, 7],
//     [8, 9],
//     [1, 10],
//   ])
// )
// @lc code=end
