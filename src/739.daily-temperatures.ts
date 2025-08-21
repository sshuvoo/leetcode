/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = []
  const stack: number[] = []
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop()
    }
    answer[i] = stack.length == 0 ? 0 : stack[stack.length - 1] - i
    stack.push(i)
  }
  return answer
}
// @lc code=end
