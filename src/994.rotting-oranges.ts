/*
 * @lc app=leetcode id=994 lang=typescript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
class QNode<T> {
  val: T
  next: QNode<T> | null
  constructor(val: T) {
    this.val = val
    this.next = null
  }
}

class Que<T> {
  private head: QNode<T> | null
  private tail: QNode<T> | null
  private length: number
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  isEmpty(): boolean {
    return this.length == 0
  }

  push(val: T): void {
    const newNode = new QNode(val)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (this.tail) this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  pop(): T {
    if (!this.head) throw new Error('Queue is empty')
    const head = this.head
    const headVal = head.val
    this.head = head.next
    if (!this.head) this.tail = null
    this.length--
    return headVal
  }
}
// https://github.com/sshuvoo
function orangesRotting(grid: number[][]): number {
  const row = grid.length
  const col = grid[0].length
  const que = new Que<[number, number, number]>()

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 2) {
        que.push([i, j, 0])
      }
    }
  }

  let times = 0

  while (!que.isEmpty()) {
    const [r, c, t] = que.pop()
    times = Math.max(times, t)

    if (r - 1 >= 0 && grid[r - 1][c] == 1) {
      que.push([r - 1, c, t + 1])
      grid[r - 1][c] = 2
    }

    if (r + 1 < row && grid[r + 1][c] == 1) {
      que.push([r + 1, c, t + 1])
      grid[r + 1][c] = 2
    }

    if (c - 1 >= 0 && grid[r][c - 1] == 1) {
      que.push([r, c - 1, t + 1])
      grid[r][c - 1] = 2
    }

    if (c + 1 < col && grid[r][c + 1] == 1) {
      que.push([r, c + 1, t + 1])
      grid[r][c + 1] = 2
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        return -1
      }
    }
  }

  return times
}
// https://github.com/sshuvoo
// @lc code=end
