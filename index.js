function removeDuplicates(nums) {
   if (nums.length === 0) return 0;

   let k = 1; // Initialize unique elements count

   // Iterate through the array starting from the second element
   for (let i = 1; i < nums.length; i++) {
      // If current element is different from previous unique element
      if (nums[i] !== nums[i - 1]) {
         // Move this unique element to the next position
         nums[k] = nums[i];
         // Increment unique elements count
         k++;
      }
   }

   return k;
}

// Test cases
let nums1 = [1, 1, 2];
removeDuplicates(nums1);
console.log(nums1); // Output: 2, nums: [1, 2, _, _, _, ...]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums2);
console.log(nums2); // Output: 5, nums: [0, 1, 2, 3, 4, _, _, _, _, ...]
