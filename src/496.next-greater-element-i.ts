/*
 * @lc app=leetcode id=496 lang=typescript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
// https://github.com/sshuvoo
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>()
  const stack: number[] = []
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      stack.pop()
    }
    map.set(nums2[i], stack.length == 0 ? -1 : stack[stack.length - 1])
    stack.push(nums2[i])
  }
  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = map.get(nums1[i])!
  }
  return nums1
}
// https://github.com/sshuvoo
// @lc code=end
