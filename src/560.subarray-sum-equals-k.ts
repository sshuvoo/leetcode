/*
 * @lc app=leetcode id=560 lang=typescript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  let count = 0
  let i = 0
  let j = 0
  let sum = 0
  for(let i = 0; i<nums.length;i++){
    if(sum>k) {
      j++
      sum
    }
    sum += nums[i]
    if(sum===k) count++

  }
}
// @lc code=end

// [1,2,3, 5, 8, 9, 4] k=8
