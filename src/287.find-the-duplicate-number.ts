/*
 * @lc app=leetcode id=287 lang=typescript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
// https://github.com/sshuvoo
// Floyd's Cycle Detection, treating numbers as "next pointers."
function findDuplicate(nums: number[]): number {
  let slow = nums[0], fast = nums[0]
  while (true) {
    slow = nums[slow]
    fast = nums[nums[fast]]
    if (slow == fast) {
      slow = nums[0]
      break
    }
  }
  while (slow != fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  return slow
}
// https://github.com/sshuvoo
// @lc code=end
