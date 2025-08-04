function isInc(nums: number[], start: number, end: number): boolean {
  for (let i = start + 1; i <= end; i++) {
    if (nums[i - 1] >= nums[i]) return false
  }
  return true
}

function isDec(nums: number[], start: number, end: number): boolean {
  for (let i = start + 1; i <= end; i++) {
    if (nums[i - 1] <= nums[i]) return false
  }
  return true
}

function isTrionic(nums: number[]): boolean {
  if (nums.length <= 3) return false
  let p = 1,
    q = nums.length - 2
  while (p < q) {
    if (!isInc(nums, 0, p)) {
      return false
    }

    if (!isInc(nums, q, nums.length - 1)) {
      return false
    }

    if (isDec(nums, p, q)) {
      return true
    } else {
      if (nums[p + 1] > nums[p]) {
        p++
      }
      if (nums[q - 1] < nums[q]) {
        q--
      }
    }
  }
  return false
}

console.log([6, 8, 2, 5, 9])

// p = 2, q = 3
