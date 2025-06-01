/*
 * @lc app=leetcode id=1593 lang=typescript
 *
 * [1593] Split a String Into the Max Number of Unique Substrings
 */

// @lc code=start
function isExist(target: string, arr: string[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true
  }
  return false
}

function maxUniqueSplit(s: string): number {
  const stack: string[] = []
  let i = 0
  let substring = ''
  while (i < s.length) {
    if (i === 0) stack.push(s[i])
    else {
      substring += s[i]
      if (!isExist(substring, stack)) {
        stack.push(substring)
        substring = ''
      }
    }
    i++
  }
  console.log(stack)
  return stack.length
}

maxUniqueSplit('wwwzfvedwfvhsww')     ["w", "ww", "z", "f", "v", "e", "d", "wf", "vh", "sww"]
// @lc code=end

// ;('"wwwzfvedwfvhsww"')

// https://leetcode.com/u/nofaceman/
// https://github.com/sshuvoo
