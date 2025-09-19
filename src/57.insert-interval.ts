/*
 * @lc app=leetcode id=57 lang=typescript
 *
 * [57] Insert Interval
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = []
  let i = 0
  while (newInterval[0] > intervals[i][1]) {
    result.push(intervals[i++])
  }
  if (intervals.length == i) {
    result.push(newInterval)
    return result
  }
  result.push([intervals[i][0], Math.max(intervals[i][1], newInterval[1])])
  let j = i + 1
  while (++i < intervals.length) {
    const lastIn = result[j - 1]
    if (intervals[i][0] < lastIn[1]) {
      result[j] = [intervals[i][0], Math.max(lastIn[1], intervals[i][1])]
    } else {
      result.push(intervals[i])
      j++
    }
  }
  return result
}
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// @lc code=end
// [1, 2], []
