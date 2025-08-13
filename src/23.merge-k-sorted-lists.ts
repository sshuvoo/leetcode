/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// Priority queue (min heap)
// https://github.com/sshuvoo
class PQueue {
  heap: ListNode[]
  constructor() {
    this.heap = []
  }
  isEmpty(): boolean {
    return this.heap.length == 0
  }
  swap(i: number, j: number): void {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
  push(val: ListNode): void {
    let cIdx = this.heap.push(val) - 1
    while (cIdx > 0) {
      const pIdx = Math.floor((cIdx + 1) / 2) - 1
      if (this.heap[pIdx].val <= this.heap[cIdx].val) break
      this.swap(pIdx, cIdx)
      cIdx = pIdx
    }
  }
  pop(): ListNode {
    if (this.heap.length == 1) return this.heap.pop()!
    const root = this.heap[0]
    this.heap[0] = this.heap.pop()!
    let cIdx = 0
    while (true) {
      const lIdx = 2 * cIdx + 1
      const rIdx = 2 * (cIdx + 1)
      let min = cIdx
      const len = this.heap.length
      if (lIdx < len && this.heap[lIdx].val < this.heap[min].val) {
        min = lIdx
      }
      if (rIdx < len && this.heap[rIdx].val < this.heap[min].val) {
        min = rIdx
      }
      if (min == cIdx) break
      this.swap(min, cIdx)
      cIdx = min
    }
    return root
  }
}

function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
  const pQue = new PQueue()
  for (const head of lists) {
    if (head != null) pQue.push(head)
  }

  const dummy = new ListNode()
  let tail = dummy
  while (!pQue.isEmpty()) {
    const peek = pQue.pop()
    tail.next = peek
    tail = tail.next
    if (peek.next != null) pQue.push(peek.next)
  }
  return dummy.next
}
// https://github.com/sshuvoo
// @lc code=end
