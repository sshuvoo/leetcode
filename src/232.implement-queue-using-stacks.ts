/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
// https://github.com/sshuvoo
class LLNode<T> {
  val: T
  prev: LLNode<T> | null
  next: LLNode<T> | null
  constructor(val: T, prev: LLNode<T> | null = null, next: LLNode<T> | null = null
  ) {
    this.val = val
    this.prev = prev
    this.next = next
  }
}

class Stack<T> {
  #head: LLNode<T> | null
  #tail: LLNode<T> | null
  #length: number

  constructor() {
    this.#head = this.#tail = null
    this.#length = 0
  }

  push(val: T): void {
    const node = new LLNode(val)
    if (this.isEmpty()) {
      this.#head = this.#tail = node
      this.#length++
      return
    }
    node.prev = this.#tail
    this.#tail!.next = node
    this.#tail = node
    this.#length++
  }

  pop(): T {
    if (this.isEmpty()) throw new Error('Empty Stack')
    const tail = this.#tail!
    const prev = tail.prev
    if (prev != null) {
      prev.next = null
      this.#tail = prev
    } else {
      this.#head = this.#tail = null
    }
    this.#length--
    return tail.val
  }

  peek(): T {
    if (this.isEmpty()) throw new Error('Empty Stack')
    return this.#tail!.val
  }

  isEmpty(): boolean {
    return this.#length == 0
  }
}

class MyQueue {
  private queue: Stack<number>
  private stack: Stack<number>

  constructor() {
    this.queue = new Stack()
    this.stack = new Stack()
  }

  push(x: number): void {
    while (!this.queue.isEmpty()) {
      this.stack.push(this.queue.pop())
    }

    this.queue.push(x)

    while (!this.stack.isEmpty()) {
      this.queue.push(this.stack.pop())
    }
  }

  pop(): number {
    return this.queue.pop()
  }

  peek(): number {
    return this.queue.peek()
  }

  empty(): boolean {
    return this.queue.isEmpty()
  }
}
// https://github.com/sshuvoo
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
