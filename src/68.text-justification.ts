/*
 * @lc app=leetcode id=68 lang=typescript
 *
 * [68] Text Justification
 */

// @lc code=start
// https://github.com/sshuvoo
function space(amont: number) {
  return Array(amont).fill(' ').join('')
}

function textJustify(words: string[], maxWidth: number, currWidth: number) {
  const spaceNums = words.length - 1
  const spaceNeed = maxWidth - currWidth
  if (words.length === 1) {
    return words[0] + space(spaceNeed)
  }
  const eachSpace = Math.trunc(spaceNeed / spaceNums)
  let extraSpaces = spaceNeed % spaceNums
  let text = words[0]
  for (let i = 1; i < words.length; i++) {
    text += space(eachSpace + Math.min(extraSpaces, 1)) + words[i]
    extraSpaces = Math.max(extraSpaces - 1, 0)
  }
  return text
}

function fullJustify(words: string[], maxWidth: number): string[] {
  const arr: string[][] = []
  const justify: string[] = []
  let lastLength = 0
  for (let i = 0; i < words.length; i++) {
    const lastElement = arr[arr.length - 1]
    if (
      lastElement &&
      lastElement.length + lastLength + words[i].length <= maxWidth
    ) {
      lastLength += words[i].length
      lastElement.push(words[i])

      if (i === words.length - 1) {
        justify.push(
          lastElement.join(' ') +
            space(maxWidth - (lastLength + lastElement.length - 1))
        )
      }
    } else {
      if (lastElement) {
        const text = textJustify(lastElement, maxWidth, lastLength)
        justify.push(text)
      }

      lastLength = words[i].length
      arr.push([words[i]])

      if (i === words.length - 1) {
        justify.push(words[i] + space(maxWidth - words[i].length))
      }
    }
  }
  return justify
}
// https://github.com/sshuvoo
// @lc code=end
