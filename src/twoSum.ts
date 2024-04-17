// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
   let isStop: boolean = false;
   const output: number[] = [];
   for (let i = 0; i < nums.length; i++) {
      if (isStop) break;
      for (let j = 0; j < nums.length; j++) {
         if (i !== j && nums[i] + nums[j] === target) {
            output.push(i, j);
            isStop = true;
            break;
         }
      }
   }
   return output;
}
