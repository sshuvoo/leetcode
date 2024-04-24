/**
 Do not return anything, modify nums1 in-place instead.
 */
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//    for (let i = m; i < nums1.length; i++) {
//       nums1[i] = nums2[i - m];
//    }
//    nums1.sort((a, b) => a - b);
// }

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
   for (let i = m; i < nums1.length; i++) {
      nums1[i] = nums2[i - m];
   }
   nums1.sort((a, b) => a - b);
}

const n1: number[] = [1, 2, 3, 0, 0, 0];
const n2: number[] = [1, 4, 5];
merge(n1, 3, n2, 3);
console.log(n1);
