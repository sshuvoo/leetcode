function searchInsert(nums: number[], target: number): number {
   if (nums.includes(target)) {
      return nums.indexOf(target);
   } else {
      let i: number = 0;
      while (i < nums.length) {
         if (nums[i] > target) return i;
         i++;
      }
      return i;
   }
}
