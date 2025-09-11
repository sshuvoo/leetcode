/*
 * @lc app=leetcode id=2785 lang=typescript
 *
 * [2785] Sort Vowels in a String
 */

// @lc code=start
function isVowel(c: string): boolean {
  return (
    c == 'A' ||
    c == 'E' ||
    c == 'I' ||
    c == 'O' ||
    c == 'U' ||
    c == 'a' ||
    c == 'e' ||
    c == 'i' ||
    c == 'o' ||
    c == 'u'
  )
}
function sortVowels(s: string): string {
  const map = new Map<string, number>()
  for (const char of s) {
    if (isVowel(char)) {
      map.set(char, (map.get(char) || 0) + 1)
    }
  }
  const vs = 'AEIOUaeiou'
  let ans = '', j = 0
  for (const char of s) {
    if (isVowel(char)) {
      while ((map.get(vs[j]) || 0) == 0) {
        j++
      }
      ans += vs[j]
      map.set(vs[j], map.get(vs[j])! - 1)
    } else ans += char
  }
  return ans
}
// @lc code=end
