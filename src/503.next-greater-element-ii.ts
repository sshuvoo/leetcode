/*
 * @lc app=leetcode id=503 lang=typescript
 *
 * [503] Next Greater Element II
 */

// @lc code=start
// https://github.com/sshuvoo
function nextGreaterElements(nums: number[]): number[] {
  const len = nums.length
  const stack: number[] = []
  const res: number[] = []

  for (let i = 2 * len - 1; i >= 0; i--) {
    const index = i % len
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[index]) {
      stack.pop()
    }
    res[index] = stack.length == 0 ? -1 : nums[stack[stack.length - 1]]
    stack.push(index)
  }

  return res
}
// https://github.com/sshuvoo
// @lc code=end
