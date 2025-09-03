/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
// https://github.com/sshuvoo
class PQueue<T> {
  private heap: T[]
  private compareFn: (a: T, b: T) => number
  constructor({ compareFn }: { compareFn?: (a: T, b: T) => number } = {}) {
    this.heap = []
    if (typeof compareFn == 'function') {
      this.compareFn = compareFn
    } else this.compareFn = (a, b) => (a as number) - (b as number)
  }
  private swap(i: number, j: number): void {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
  private heapifyUp(cIdx: number): void {
    while (cIdx > 0) {
      const pIdx = Math.floor((cIdx + 1) / 2) - 1
      if (this.compareFn(this.heap[cIdx], this.heap[pIdx]) <= 0) {
        break
      }
      this.swap(cIdx, pIdx)
      cIdx = pIdx
    }
  }
  private heapifyDown(cIdx: number): void {
    const n = this.heap.length
    while (cIdx < n) {
      const lIdx = 2 * (cIdx + 1) - 1
      const rIdx = 2 * (cIdx + 1)
      let best = cIdx
      if (lIdx < n && this.compareFn(this.heap[best], this.heap[lIdx]) < 0) {
        best = lIdx
      }
      if (rIdx < n && this.compareFn(this.heap[best], this.heap[rIdx]) < 0) {
        best = rIdx
      }
      if (best == cIdx) break
      this.swap(best, cIdx)
      cIdx = best
    }
  }
  push(val: T): void {
    const idx = this.heap.push(val) - 1
    this.heapifyUp(idx)
  }
  pop(): T {
    if (this.heap.length == 1) {
      return this.heap.pop()!
    }
    const last = this.heap.pop()!
    const peek = this.heap[0]
    this.heap[0] = last
    this.heapifyDown(0)
    return peek
  }
  peek(): T {
    return this.heap[0]
  }
  size(): number {
    return this.heap.length
  }
  isEmpty(): boolean {
    return this.heap.length == 0
  }
}

function findKthLargest(nums: number[], k: number): number {
  const pq = new PQueue<number>({ compareFn: (a, b) => b - a }) //min heap
  for (const num of nums) {
    pq.push(num)
    while (pq.size() > k) pq.pop()
  }
  return pq.peek()
}
// https://github.com/sshuvoo
// @lc code=end
