/*
 * @lc app=leetcode id=438 lang=typescript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
function isEqual(arr1: number[], arr2: number[]): boolean {
  return arr1.every((val, i) => val == arr2[i])
}

function findAnagrams(s: string, p: string): number[] {
  const sl = s.length,
    pl = p.length
  const ans: number[] = []
  const pf: number[] = new Array<number>(26).fill(0) // frequesncy of s
  const wf: number[] = new Array<number>(26).fill(0) // frequency of window
  for (let i = 0; i < pl; i++) {
    // 'a' = 97
    pf[p.charCodeAt(i) - 97]++
  }
  
  for (let i = 0; i < pl - 1; i++) {
    wf[s.charCodeAt(i) - 97]++
  }

  for (let i = pl - 1; i < sl; i++) {
    // decrese count if element is out of window
    if (i >= pl) {
      wf[s.charCodeAt(i - pl) - 97]--
    }

    // add new item  to window
    wf[s.charCodeAt(i) - 97]++

    if (isEqual(pf, wf)) {
      ans.push(i + 1 - pl)
    }
  }

  return ans
}
// @lc code=end
