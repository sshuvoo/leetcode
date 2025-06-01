/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length === 1) return
  let pivot = -1
  let i = nums.length - 2
  while (i >= 0) {
    if (nums[i] < nums[i + 1]) {
      pivot = i
      break
    }
    i--
  }
  if (pivot === -1) {
    nums.reverse()
    return
  }

  let smallest = nums.length - 1
  for (let i = smallest; i >= pivot + 1; i--) {
    if (nums[i] > nums[smallest]) {
      smallest = i
      break
    }
  }
  ;[nums[smallest], nums[pivot]] = [nums[pivot], nums[smallest]]
  let lp = pivot + 1,
    rp = nums.length - 1
  while (lp < rp) {
    ;[nums[lp], nums[rp]] = [nums[rp], nums[lp]]
    lp++
    rp--
  }
}
// @lc code=end
