/*
 * @lc app=leetcode id=3304 lang=typescript
 *
 * [3304] Find the K-th Character in String Game I
 */

// @lc code=start
function next(char: string) {
  if (char === 'z') return 'a'
  const code = char.charCodeAt(0)
  return String.fromCharCode(code + 1)
}

function kthCharacter(k: number): string {
  let word = 'a'
  while (!word[k - 1]) {
    let subWord = ''
    let i = 0
    while (i < word.length) {
      subWord += next(word[i])
      i++
    }
    word += subWord
  }
  return word[k - 1]
}
// https://leetcode.com/u/nofaceman/
// https://github.com/sshuvoo
// @lc code=end
