/*
 * @lc app=leetcode id=430 lang=typescript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
// Definition for _Node.
// class _Node {
//   val: number
//   prev: _Node | null
//   next: _Node | null
//   child: _Node | null

//   constructor(val?: number, prev?: _Node, next?: _Node, child?: _Node) {
//     this.val = val === undefined ? 0 : val
//     this.prev = prev === undefined ? null : prev
//     this.next = next === undefined ? null : next
//     this.child = child === undefined ? null : child
//   }
// }

function flatten(head: _Node | null): _Node | null {
  if (head == null) return head
  let curr: _Node | null = head
  while (curr != null) {
    if (curr.child == null) {
      curr = curr.next
    } else {
      if (curr.next == null) {
        curr.child.prev = curr
        curr.next = curr.child
        curr.child = null
      } else {
        const restNodes = curr.next
        const flattenHead = flatten(curr.child)
        flattenHead!.prev = curr
        curr.next = flattenHead
        curr.child = null
        let flattenTemp = flattenHead
        while (flattenTemp!.next != null) {
          flattenTemp = flattenTemp!.next
        }
        restNodes.prev = flattenTemp
        flattenTemp!.next = restNodes
        curr = flattenTemp
      }
    }
  }
  return head
}

// const new11 = new _Node(11)
// const new12 = new _Node(12)
// new11.next = new12
// new12.prev = new11

// const new7 = new _Node(7)
// const new8 = new _Node(8, new7)
// const new9 = new _Node(9, new8)
// const new10 = new _Node(10, new9)
// new9.next = new10
// new8.next = new9
// new7.next = new8

// new8.child = new11

// const head = new _Node(1)
// const new2 = new _Node(2, head)
// const new3 = new _Node(3, new2)
// const new4 = new _Node(4, new3)
// const new5 = new _Node(5, new4)
// const new6 = new _Node(6, new5)

// new5.next = new6
// new4.next = new5

// new3.next = new4
// new3.child = new7

// new2.next = new3
// head.next = new2

// console.dir(flatten(head), { depth: null })
// @lc code=end
