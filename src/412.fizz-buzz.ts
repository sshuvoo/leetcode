/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
// https://github.com/sshuvoo
function fizzBuzz(n: number): string[] {
  const ans: string[] = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) ans.push('FizzBuzz')
    else if (i % 3 == 0) ans.push('Fizz')
    else if (i % 5 == 0) ans.push('Buzz')
    else ans.push(i.toString())
  }
  return ans
}
// https://github.com/sshuvoo
// @lc code=end
