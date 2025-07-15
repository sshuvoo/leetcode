/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo
class QNode<T> {
  constructor(
    public val: T,
    public prev: QNode<T> | null = null,
    public next: QNode<T> | null = null
  ) {}
}

class Que<T> {
  constructor(
    private head: QNode<T> | null = null,
    private tail: QNode<T> | null = null
  ) {}

  public push(val: T): void {
    const newNode = new QNode(val)
    if (this.isEmpty()) {
      this.head = this.tail = newNode
    } else {
      this.tail!.next = newNode
      this.tail = newNode
    }
  }

  public get top(): T | undefined {
    if (this.isEmpty()) return
    return this.head!.val
  }

  public pop(): T | undefined {
    if (this.isEmpty()) return
    const temp = this.head!
    this.head = this.head!.next
    if (this.head === null) this.tail = null
    return temp.val
  }

  public isEmpty(): boolean {
    return this.head === null
  }
}

function firstUniqChar(s: string): number {
  const map = new Map<string, number>()
  const queue = new Que<number>()

  for (let i = 0; i < s.length; i++) {
    const index = map.get(s[i])
    if (index) map.set(s[i], index + 1)
    else {
      map.set(s[i], 1)
      queue.push(i)
    }
  }

  while (!queue.isEmpty()) {
    const top = queue.pop()!
    if (map.get(s[top])! === 1) return top
  }

  return -1
}
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo
// @lc code=end
