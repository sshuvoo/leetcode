/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s.length % 2 != 0) return false
  const map = new Map<string, string>([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])
  const stack: string[] = []
  for (const char of s) {
    if (char == ')' || char == '}' || char == ']') {
      const len = stack.length
      if (len == 0) return false
      const peek = stack[len - 1]!
      if (char != map.get(peek)!) return false
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.length == 0
}
// @lc code=end
