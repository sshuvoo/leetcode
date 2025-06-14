/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
// https://github.com/sshuvoo
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1, p2 = n - 1, i = m + n - 1
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) nums1[i--] = nums1[p1--]
    else nums1[i--] = nums2[p2--]
  }
  while (p2 >= 0) nums1[i--] = nums2[p2--]
}
// https://github.com/sshuvoo
// @lc code=end
