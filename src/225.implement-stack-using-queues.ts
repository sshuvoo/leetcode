/*
 * @lc app=leetcode id=225 lang=typescript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
// https://github.com/sshuvoo
class QNode<T> {
  constructor(
    public val: T,
    public prev: QNode<T> | null = null,
    public next: QNode<T> | null = null
  ) {}
}

class MyQueue<T> {
  private head: QNode<T> | null
  private tail: QNode<T> | null
  private length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  public push(val: T): void {
    const node = new QNode(val)
    if (this.isEmpty()) {
      this.head = this.tail = node
      this.length++
      return
    }
    node.prev = this.tail
    this.tail!.next = node
    this.tail = node
    this.length++
  }

  public pop(): T {
    const peek = this.head!.val
    this.head = this.head!.next
    if (this.head != null) {
      this.head!.prev = null
    } else this.tail = null
    this.length--
    return peek
  }

  public peek(): T {
    return this.head!.val
  }

  public size(): number {
    return this.length
  }

  public isEmpty(): boolean {
    return this.length == 0
  }
}

class MyStack {
  private mainQ: MyQueue<number>
  private tempQ: MyQueue<number>
  constructor() {
    this.mainQ = new MyQueue()
    this.tempQ = new MyQueue()
  }

  push(x: number): void {
    while (!this.mainQ.isEmpty()) {
      this.tempQ.push(this.mainQ.pop())
    }
    this.mainQ.push(x)
    while (!this.tempQ.isEmpty()) {
      this.mainQ.push(this.tempQ.pop())
    }
  }

  pop(): number {
    return this.mainQ.pop()
  }

  top(): number {
    return this.mainQ.peek()
  }

  empty(): boolean {
    return this.mainQ.isEmpty()
  }
}
// https://github.com/sshuvoo
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
