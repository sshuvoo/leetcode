// function possibleStringCount(word: string): number {
//   if (word.length === 1) return 1
//   let count: number = 0
//   let curr: string = ''
//   let i = 0
//   while (i < word.length) {
//     if (word[i] !== '') {
//       if (curr === word[i]) count++
//     }
//     curr = word[i]
//     i++
//   }
//   return count + 1
// }

// console.log(possibleStringCount('aaaa'))

function possibleStringCount(word: string, k: number): number {
  if (word.length === k) return 1
  let count: number = 0
  let curr: string = ''
  let i = 0
  while (i < word.length) {
    if (word[i] !== '') {
      if (curr === word[i]) count++
    }
    curr = word[i]
    i++
  }
  return count + 1
}

console.log(possibleStringCount('aaabbb', 7))

// Input: word = "aabbccdd", k = 7

// Output: 5

// Explanation:

// The possible strings are: "aabbccdd", "aabbccd", "aabbcdd", "aabccdd", and "abbccdd".

// "aaabbb", k = 3