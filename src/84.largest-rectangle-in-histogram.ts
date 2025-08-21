/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
// https://github.com/sshuvoo
function largestRectangleArea(heights: number[]): number {
  const len = heights.length
  const stack: number[] = []
  const prev: number[] = []
  const next: number[] = []
  // prev smaller
  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
      stack.pop()
    }
    prev[i] = stack.length > 0 ? stack[stack.length - 1] : -1
    stack.push(i)
  }

  stack.length = 0
  // next smaller
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
      stack.pop()
    }
    next[i] = stack.length > 0 ? stack[stack.length - 1] : len
    stack.push(i)
  }

  let maxArea: number = 0

  for (let i = 0; i < len; i++) {
    const width = next[i] - prev[i] - 1
    maxArea = Math.max(maxArea, width * heights[i])
  }

  return maxArea
}
// https://github.com/sshuvoo
// @lc code=end
