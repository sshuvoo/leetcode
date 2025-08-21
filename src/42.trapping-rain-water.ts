/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(height: number[]): number {
  const n = height.length
  const l: number[] = []
  const r: number[] = []
  l[0] = height[0]
  r[n - 1] = height[n - 1]
  for (let i = 1, j = n - 2; i < n; i++, j--) {
    l[i] = Math.max(l[i - 1], height[i])
    r[j] = Math.max(height[j], r[j + 1])
  }
  let t = 0
  for (let i = 0; i < n; i++) {
    t += Math.min(l[i], r[i]) - height[i]
  }
  return t
}
// @lc code=end
