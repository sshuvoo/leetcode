const nums = [5, 10, 6, -6, 8, 4, 6, 7, 3, 2]

function bubble_sort(arr: number[]) {
  if (arr.length === 1) return arr
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (nums[j - 1] > nums[j]) {
        const temp = nums[j]
        nums[j] = nums[j - 1]
        nums[j - 1] = temp
      }
    }
  }
}

bubble_sort(nums)

console.log(nums)
