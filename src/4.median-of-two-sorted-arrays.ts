/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArr: number[] = []
  const len1 = nums1.length, len2 = nums2.length
  let p1: number = 0, p2: number = 0
  while (p1 < len1 || p2 < len2) {
    if (p1 < len1 && p2 < len2) {
      if (nums1[p1] < nums2[p2]) mergedArr.push(nums1[p1++])
      else mergedArr.push(nums2[p2++])
    } else if (p1 < nums1.length) {
      mergedArr.push(nums1[p1++])
    } else mergedArr.push(nums2[p2++])
  }
  const mLen = mergedArr.length
  if (mLen % 2 === 1) {
    return mergedArr[Math.trunc(mLen / 2)]
  }
  return (mergedArr[mLen / 2] + mergedArr[mLen / 2 - 1]) / 2
}
// @lc code=end