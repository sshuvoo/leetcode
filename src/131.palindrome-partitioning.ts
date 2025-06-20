/*
 * @lc app=leetcode id=131 lang=typescript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
function isPalindrome(s: string, lp: number, rp: number): boolean {
  while (lp < rp) {
    if (s[lp++] != s[rp--]) return false
  }
  return true
}

function getPartition(s: string, palindromes: string[], result: string[][]) {
  if (s.length == 0) {
    result.push([...palindromes])
    return
  }
  for (let i = 0; i < s.length; i++) {
    if (isPalindrome(s, 0, i)) {
      palindromes.push(s.slice(0, i + 1))
      getPartition(s.slice(i + 1), palindromes, result)
      palindromes.pop()
    }
  }
}

function partition(s: string): string[][] {
  const result: string[][] = []
  const palindromes: string[] = []
  getPartition(s, palindromes, result)
  return result
}
// @lc code=end
