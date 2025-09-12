/*
 * @lc app=leetcode id=57 lang=typescript
 *
 * [57] Insert Interval
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = []
  // let lastS = intervals[0][0], lastE = intervals[0][1]
  for (const [s, e] of intervals) {
    if(newInterval[1]<s) {
      intervals.unshift([s, e])
      return intervals
    }

  }
  return result
}
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// @lc code=end
