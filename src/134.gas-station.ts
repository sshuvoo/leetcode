function printSubArray(nums: number[]) {
  let maxSum = -Infinity
  for (let i = 0; i < nums.length; i++) {
    let temp: number = 0
    for (let j = i; j < nums.length; j++) {
      temp += nums[j]
      maxSum = Math.max(maxSum, temp)
    }
  }
  return maxSum
}

console.log(printSubArray([3, -4, 5, 4, -1, 7, -8]))
