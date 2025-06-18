class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val: number) {
    this.val = val
    this.next = null
  }
}

class List {
  private head: ListNode | null
  private tail: ListNode | null
  private length: number
  constructor() {
    this.head = this.tail = null
    this.length = 0
  }

  public push_front(val: number) {
    const newNode = new ListNode(val)
    if (this.head != null) {
      newNode.next = this.head
      this.head = newNode
    } else this.head = this.tail = newNode

    this.length++
  }

  public push_back(val: number) {
    const newNode = new ListNode(val)
    if (this.tail != null) {
      this.tail.next = newNode
      this.tail = newNode
    } else this.head = this.tail = newNode

    this.length++
  }

  public pop_front() {
    if (this.head == null) return

    if (this.head.next == null) {
      this.tail = null
    }
    this.head = this.head.next
    this.length--
  }

  public pop_back() {
    if (this.head == null) return
    let curr: ListNode | null = this.head
    while (curr != null && curr.next != this.tail) {
      if (curr == this.tail) {
        this.head = this.tail = null
        this.length--
        return
      } else curr = curr.next
    }
    curr!.next = null
    this.tail = curr
    this.length--
  }

  public insert_at(val: number, at: number) {
    if (at < 0) return
    else if (at == 0) this.push_front(val)
    else {
      const newNode = new ListNode(val)
      let curr: ListNode | null = this.head
      for (let i = 0; i < at - 1; i++) {
        if (curr != null) curr = curr.next
      }
      if (curr != null) {
        newNode.next = curr.next
        curr.next = newNode
        this.length++
      }
    }
  }

  public search(key: number) {
    if (this.head == null) return -1
    let i = 0
    let curr: ListNode | null = this.head
    do {
      if (curr.val == key) {
        return i
      }
      curr = curr.next
      i++
    } while (curr != null)
    return -1
  }

  public print() {
    let curr = this.head
    while (curr != null) {
      process.stdout.write(curr.val + ' -> ')
      // console.log(curr.val + ' => ')
      curr = curr.next
    }
    process.stdout.write('null\n')
  }
}

const ll = new List()

ll.push_front(3)
ll.push_front(2)
ll.push_front(1)
ll.push_back(4)
ll.insert_at(55, 4)
console.log(ll.search(1))
// ll.print()
// console.dir(ll, { depth: null })