/*
 * @lc app=leetcode id=496 lang=typescript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>()
  const stack: number[] = []
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
      stack.pop()
    }
    if (stack.length == 0) {
      map.set(nums2[i], -1)
    } else {
      map.set(nums2[i], stack[stack.length - 1])
    }
    stack.push(nums2[i])
  }

  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      nums1[i] = map.get(nums1[i])!
    }
  }

  return nums1
}
// @lc code=end
