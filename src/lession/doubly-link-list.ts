class _ListNode {
  constructor(
    public val: number,
    public prev: _ListNode | null = null,
    public next: _ListNode | null = null
  ) {}
}

class DoublyLinkList {
  constructor(
    private head: _ListNode | null = null,
    private tail: _ListNode | null = null,
    private length: number = 0
  ) {}

  public unshift(val: number) {
    const newNode = new _ListNode(val)
    if (this.head == null) {
      this.head = this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
  }

  public push(val: number) {
    const newNode = new _ListNode(val)
    if (this.head == null) {
      this.head = this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail!.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  public shift() {
    if (this.head == null) return
    this.head = this.head.next
    if (this.head != null) this.head.prev = null
    this.length--
  }

  public pop() {
    if (this.tail == null) return
    this.tail = this.tail.prev
    if (this.tail != null) {
      this.tail.next = null
    }
    this.length--
  }

  public print() {
    let temp = this.head
    while (temp != null) {
      process.stdout.write(temp.val + ' <=> ')
      temp = temp.next
    }
    process.stdout.write('null\n')
  }
}

const dll = new DoublyLinkList()
dll.unshift(2)
dll.unshift(1)
dll.push(3)
dll.shift()
dll.pop()

dll.print()
console.dir(dll, { depth: null })
