function minOperations(s: string): number {
  const counts = new Array<number>(26).fill(0)
  const n = s.length
  let count = 0
  for (let i = 0; i < n; i++) {
    const code = s.charCodeAt(i)
    counts[code - 97]++
  }
  for (let i = 1; i < 26; i++) {
    if (i < 25) {
      const nextCount = s.charCodeAt(i + 1)
      if (code == nextCode) continue
      if (code < nextCode) {
        count += nextCode - code
      } else {
        count += 123 - code
      }
    } else {
      count += 123 - code
    }
  }
  return count
}

console.log(minOperations('sn'))
