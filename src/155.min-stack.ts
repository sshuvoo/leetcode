/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
  constructor(private stack: number[][] = [], private min: number = Infinity) {}

  push(val: number): void {
    this.stack.push([val, this.min])
    this.min = Math.min(this.min, val)
  }

  pop(): void {
    this.min = this.stack.pop()![1]
  }

  top(): number {
    return this.stack[this.stack.length - 1][0]
  }

  getMin(): number {
    return this.min
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
