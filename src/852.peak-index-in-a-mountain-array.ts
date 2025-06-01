/*
 * @lc app=leetcode id=852 lang=typescript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
// https://github.com/sshuvoo
function peakIndexInMountainArray(arr: number[]): number {
  let lp = 0, rp = arr.length - 1
  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2)
    if (arr[mid - 1] > arr[mid]) {
      rp = mid - 1
    } else if (arr[mid] < arr[mid + 1]) {
      lp = mid + 1
    } else return mid
  }
  return -1
}
// https://github.com/sshuvoo
// @lc code=end
