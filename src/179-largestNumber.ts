function largestNumber(nums: number[]): string {
   nums.sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`))
   return nums.join('')
}

console.log(largestNumber([3, 30, 34, 5, 9]))

// 9534330
