/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo (Give me star)
class MinStack {
  constructor(private stack: { val: number; min: number }[] = []) {}

  push(val: number): void {
    const min = this.stack.length == 0 ? val : Math.min(val, this.getMin())
    this.stack.push({ val, min })
  }

  pop(): void {
    this.stack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1].val
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min
  }
}
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo (Give me star)
// @lc code=end
