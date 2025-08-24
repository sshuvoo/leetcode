/*
 * @lc app=leetcode id=239 lang=typescript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
// https://github.com/sshuvoo
class QNode<T> {
  public val: T
  public prev: QNode<T> | null
  public next: QNode<T> | null
  constructor(
    val: T,
    prev: QNode<T> | null = null,
    next: QNode<T> | null = null
  ) {
    this.val = val
    this.prev = prev
    this.next = next
  }
}

class Dequeue<T> {
  private head: QNode<T> | null
  private tail: QNode<T> | null
  private length: number
  constructor() {
    this.head = this.tail = null
    this.length = 0
  }

  public pushFront(val: T): void {
    const node = new QNode(val)
    if (this.isEmpty()) {
      this.head = this.tail = node
    } else {
      this.head!.prev = node
      node.next = this.head
      this.head = node
    }
    this.length++
  }

  public pushBack(val: T): void {
    const node = new QNode(val)
    if (this.isEmpty()) {
      this.head = this.tail = node
    } else {
      node.prev = this.tail
      this.tail!.next = node
      this.tail = node
    }
    this.length++
  }

  public popFront(): T {
    const peekFront = this.head!
    this.head = this.head!.next
    if (this.head != null) {
      this.head.prev = null
    } else {
      this.tail = null
    }
    this.length--
    return peekFront.val
  }

  public popBack(): T {
    const peekBack = this.tail!
    const prev = this.tail!.prev
    if (prev != null) {
      prev.next = null
      this.tail = prev
    } else {
      this.head = this.tail = null
    }
    this.length--
    return peekBack.val
  }

  public peekFront(): T {
    return this.head!.val
  }

  public peekBack(): T {
    return this.tail!.val
  }

  public size(): number {
    return this.length
  }

  public isEmpty(): boolean {
    return this.length == 0
  }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length
  const dq = new Dequeue<number>()
  const ans: number[] = []
  for (let i = 0; i < n; i++) {
    // removing if not belongs to curr window
    while (!dq.isEmpty() && i >= k && dq.peekFront() <= i - k) {
      dq.popFront()
    }
    // removing if curr item is larger than peekBack
    while (!dq.isEmpty() && nums[dq.peekBack()] <= nums[i]) {
      dq.popBack()
    }
    dq.pushBack(i)
    // skip until k-1 iteration
    if (i >= k - 1) {
      ans.push(nums[dq.peekFront()])
    }
  }
  return ans
}
// https://github.com/sshuvoo
// @lc code=end
