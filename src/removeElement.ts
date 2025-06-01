function removeElement(nums: number[], val: number): number {
   let i: number = 0;
   while (i < nums.length) {
      if (nums[i] === val) {
         nums.splice(i, 1);
      } else i++;
   }
   return nums.length;
}
