/*
 * @lc app=leetcode id=452 lang=typescript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
function findMinArrowShots(points: number[][]): number {
  if (points.length === 0) return 0
  points.sort((a, b) => a[1] - b[1])
  let arrows: number = 1
  let lastArrow = points[0][1]

  for (let i: number = 1; i < points.length; i++) {
    if (points[i][0] > lastArrow) {
      arrows++
      lastArrow = points[i][1]
    }
  }

  return arrows
}
// @lc code=end
