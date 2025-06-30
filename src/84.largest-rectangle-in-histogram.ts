/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  let area = 0
  for (let i = 0; i < heights.length; i++) {
    const maxHeight = heights[i]
    let maxWidth = 1
    let j = i - 1
    while (j >= 0 && heights[j] >= maxHeight) {
      maxWidth++
      j--
    }
    j = i + 1
    while (j < heights.length && heights[j] >= maxHeight) {
      maxWidth++
      j++
    }
    area = Math.max(area, maxWidth * maxHeight)
  }
  return area
}
// @lc code=end
