const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function myReverse(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const [leftItem, rightItem] = [arr[left], arr[right]]
    arr[left] = rightItem
    arr[right] = leftItem
    left++
    right--
  }
}

myReverse(nums)

console.log(nums);