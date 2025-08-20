/*
 * @lc app=leetcode id=844 lang=typescript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
  function getRest(str: string): string {
    const stack: string[] = []
    for (const char of str) {
      if (char == '#') stack.pop()
      else stack.push(char)
    }
    return stack.join('')
  }
  return getRest(s) == getRest(t)
}
// @lc code=end
