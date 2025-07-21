import { Stack } from 'stl-kit'

function prevSmallerElement(nums: number[]): number[] {
  const res: number[] = []
  const stack = new Stack<number>()
  for (let i = 0; i < nums.length; i++) {
    while (!stack.isEmpty() && stack.top! > nums[i]) {
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

console.log(prevSmallerElement([5, 6, 7, 2, 9]))
