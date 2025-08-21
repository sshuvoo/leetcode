/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = new Array(temperatures.length).fill(0)
  const stack: number[] = []
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop()
    }
    if (stack.length > 0) answer[i] = stack[stack.length - 1] - i
    stack.push(i)
  }
  return answer
}
// @lc code=end
