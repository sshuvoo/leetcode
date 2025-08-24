/*
 * @lc app=leetcode id=1472 lang=typescript
 *
 * [1472] Design Browser History
 */

// @lc code=start
// https://github.com/sshuvoo
class BrowserHistory {
  undo: string[] // stack
  redo: string[] // stack

  constructor(homepage: string) {
    this.undo = [homepage]
    this.redo = []
  }

  visit(url: string): void {
    this.undo.push(url)
    this.redo.length = 0
  }

  back(steps: number): string {
    while (this.undo.length > 1 && steps > 0) {
      this.redo.push(this.undo.pop()!)
      steps--
    }
    return this.undo[this.undo.length - 1]
  }

  forward(steps: number): string {
    while (this.redo.length > 0 && steps > 0) {
      this.undo.push(this.redo.pop()!)
      steps--
    }
    return this.undo[this.undo.length - 1]
  }
}
// https://github.com/sshuvoo
/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end
