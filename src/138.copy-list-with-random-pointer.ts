/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start

// Definition for _Node.
// class _Node {
//   val: number
//   next: _Node | null
//   random: _Node | null

//   constructor(val?: number, next?: _Node, random?: _Node) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
//     this.random = random === undefined ? null : random
//   }
// }

function copyRandomList(head: _Node | null): _Node | null {
  if (head === null) return null
  const dummy = new _Node()
  let dummyCurr = dummy
  const hashMap = new Map<number, _Node>()
  let curr: _Node | null = head
  while (curr) {
    if (hashMap.has(curr.val)) {
      const hashNode = hashMap.get(curr.val)!
      if (curr.next === null) {
        hashNode.next = null
      } else {
        if (hashMap.has(curr.next.val)) {
          hashNode.next = hashMap.get(curr.next.val)!
        } else {
          const newNext = new _Node(curr.next.val)
          hashMap.set(curr.next.val, newNext)
          hashNode.next = newNext
        }
      }

      if (curr.random === null) {
        hashNode.random = null
      } else {
        if (hashMap.has(curr.random.val)) {
          hashNode.random = hashMap.get(curr.random.val)!
        } else {
          const newRandom = new _Node(curr.random.val)
          hashMap.set(curr.random.val, newRandom)
          hashNode.random = newRandom
        }
      }

      dummyCurr.next = hashNode
    } else {
      const brandNewNode = new _Node(curr.val)
      if (curr.next === null) {
        brandNewNode.next = null
      } else {
        if (hashMap.has(curr.next.val)) {
          brandNewNode.next = hashMap.get(curr.next.val)!
        } else {
          const newNext = new _Node(curr.next.val)
          hashMap.set(curr.next.val, newNext)
          brandNewNode.next = newNext
        }
      }

      if (curr.random === null) {
        brandNewNode.random = null
      } else {
        if (hashMap.has(curr.random.val)) {
          brandNewNode.random = hashMap.get(curr.random.val)!
        } else {
          const newRandom = new _Node(curr.random.val)
          hashMap.set(curr.random.val, newRandom)
          brandNewNode.random = newRandom
        }
      }
      dummyCurr.next = brandNewNode
    }
    dummyCurr = dummyCurr.next
    curr = curr.next
  }
  return dummy.next
}
// @lc code=end
