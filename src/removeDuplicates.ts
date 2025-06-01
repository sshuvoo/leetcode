// Method 1
function removeDuplicates(nums: number[]): number {
   let i: number = 0;
   while (i < nums.length) {
      if (i !== 0 && nums[i - 1] === nums[i]) {
         nums.splice(i, 1);
      } else i++;
   }
   return nums.length;
}

// // Method 2
function removeDuplicates1(nums: number[]): number {
   let j: number = 0;
   for (let i = 0; i < nums.length; i++) {
      if (i !== 0 && nums[i - 1] === nums[i]) {
         continue;
      } else {
         nums[j++] = nums[i];
      }
   }
   return nums.length;
}
