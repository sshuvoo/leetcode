/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  const len = heights.length
  const stack: number[] = []
  const prev: number[] = []
  const next: number[] = []
  // prev smaller
  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop()
    }

    if (stack.length == 0) prev[i] = -1
    else prev[i] = stack[stack.length - 1]

    stack.push(i)
  }

  stack.length = 0
  // next smaller
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop()
    }

    if (stack.length == 0) next[i] = -1
    else next[i] = stack[stack.length - 1]

    stack.push(i)
  }

  let maxArea: number = -Infinity

  for (let i = 0; i < len; i++) {
    if (prev[i] != -1 && next[i] != -1) {
      const width = next[i] - prev[i] - 1
      const height = heights[i]
      maxArea = Math.max(maxArea, width * height)
    } else if (prev[i] != -1) {
      const width = len - 1 - prev[i]
      maxArea = Math.max(maxArea, width * heights[i])
    } else if (next[i] != -1) {
      const width = next[i] - 0
      maxArea = Math.max(maxArea, width * heights[i])
    } else {
      const width = len
      maxArea = Math.max(maxArea, width * heights[i])
    }
  }

  return maxArea
}
// @lc code=end
