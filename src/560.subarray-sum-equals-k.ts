/*
 * @lc app=leetcode id=560 lang=typescript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  let count = 0, ps = 0 // prefix sum
  const map = new Map<number, number>([[0, 1]])
  for (const num of nums) {
    ps += num
    if (map.has(ps - k)) {
      count += map.get(ps - k)!
    }
    map.set(ps, (map.get(ps) || 0) + 1)
  }
  return count
}
// @lc code=end
