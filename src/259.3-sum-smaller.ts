function threeSumSmaller(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  let count: number = 0
  for (let i = 0; i < nums.length-2; i++) {
    let lp = i + 1, rp = nums.length - 1
    while (lp < rp) {
      const sum = nums[i] + nums[lp] + nums[rp]
      if (sum < target) {
        count += rp - lp
        lp++
      } else rp--
    }
  }
  return count
}

console.log(threeSumSmaller([-5, -4, -3, -2, -1], -6))

// nums = [-2, 0, 1, 3], target = 2
