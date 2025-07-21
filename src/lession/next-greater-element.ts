import { Stack } from 'stl-kit'

function nextGreaterElement(nums: number[]): number[] {
  const stack = new Stack<number>()
  const res: number[] = []
  for (let i = nums.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.top! < nums[i]) {
      stack.pop()
    }
    if (stack.isEmpty()) {
      res[i] = -1
    } else {
      res[i] = stack.top!
    }
    stack.push(nums[i])
  }
  return res
}

console.log(nextGreaterElement([6, 8, 0, 1, 3]))
