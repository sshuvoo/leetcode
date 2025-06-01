type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
   let accum = init
   for (let i = 0; i < nums.length; i++) {
      accum = fn(accum, nums[i])
   }
   return accum
}
