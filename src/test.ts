class ListNode1 {
   value: number
   prev: ListNode1 | null
   next: ListNode1 | null
   constructor(
      value: number,
      prev: ListNode1 | null = null,
      next: ListNode1 | null = null
   ) {
      this.value = value
      this.prev = prev
      this.next = next
   }
}

class LinkedList {
   head: ListNode1
   tail: ListNode1
   length: number
   constructor(value: number) {
      const newNode = new ListNode1(value)
      this.head = this.tail = newNode
      this.length = 1
   }

   append(value: number) {
      const newNode = new ListNode1(value, this.tail)
      this.tail.next = newNode
      this.tail = newNode
      this.length++
   }
   prepend(value: number) {
      const newNode = new ListNode1(value, null, this.head)
      this.head.prev = newNode
      this.head = newNode
      this.length++
   }
}

const list = new LinkedList(10)
list.append(20)
list.prepend(1)
console.log(list)
