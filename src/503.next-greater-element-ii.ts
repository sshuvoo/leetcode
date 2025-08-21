/*
 * @lc app=leetcode id=503 lang=typescript
 *
 * [503] Next Greater Element II
 */

// @lc code=start
// https://github.com/sshuvoo
function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length
  const answer: number[] = new Array(nums.length).fill(-1)
  const stack: number[] = []
  for (let i = 2 * n - 1; i >= 0; i--) {
    const idx = i % n
    while (stack.length > 0 && nums[idx] >= stack[stack.length - 1]) {
      stack.pop()
    }
    if (stack.length > 0) answer[idx] = stack[stack.length - 1]
    stack.push(nums[idx])
  }
  return answer
}
// https://github.com/sshuvoo
// @lc code=end
