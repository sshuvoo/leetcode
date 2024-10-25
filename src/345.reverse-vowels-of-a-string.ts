/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function isVowel(char: string): boolean {
  const c = char.toLowerCase()
  return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'
}

function reverseVowels(s: string): string {
  let left = 0
  let right = s.length - 1
  let leftPart = ''
  let rightPart = ''
  while (left <= right) {
    if (!isVowel(s[left])) {
      leftPart += s[left]
      left++
      continue
    }
    if (!isVowel(s[right])) {
      rightPart = s[right] + rightPart
      right--
      continue
    }
    if (left === right) {
      leftPart += s[right]
    } else {
      leftPart += s[right]
      rightPart = s[left] + rightPart
    }
    left++
    right--
  }
  return leftPart + rightPart
}
// https://leetcode.com/u/nofaceman/
// https://github.com/sshuvoo
// @lc code=end
