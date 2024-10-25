/*
 * @lc app=leetcode id=1106 lang=typescript
 *
 * [1106] Parsing A Boolean Expression
 */

// @lc code=start
function parseOR(expression: string): 't' | 'f' {
  let i = 0
  while (i < expression.length) {
    if (expression[i] === 't') return 't'
    i++
  }
  return 'f'
}

function parseAND(expression: string): 't' | 'f' {
  let i = 0
  while (i < expression.length) {
    if (expression[i] === 'f') return 'f'
    i++
  }
  return 't'
}

function parseNOT(char: string): 't' | 'f' {
  return char === 't' ? 'f' : 't'
}

function parseBoolExpr(expression: string): boolean {
  const stack: string[] = []
  let i = 0
  while (i < expression.length) {
    if (expression[i] === ')') {
      let subExp = ''
      while (true) {
        const char = stack.pop()
        if (char === 't' || char === 'f') subExp += char
        else if (char === '&') {
          stack.push(parseAND(subExp))
          break
        } else if (char === '|') {
          stack.push(parseOR(subExp))
          break
        } else if (char === '!') {
          stack.push(parseNOT(subExp))
          break
        }
      }
    } else stack.push(expression[i])
    i++
  }
  return stack[0] === 't' ? true : false
}
// @lc code=end
