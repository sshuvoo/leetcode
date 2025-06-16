/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: _Node | null): _Node | null {
  if (head == null) return null
  let currHead = head
  const map = new Map<_Node, _Node>()
  const newHead = new _Node()
  let newCurr = newHead
  while (currHead != null) {
    const newNode = new _Node(currHead.val)
    map.set(currHead, newNode)
    newCurr.next = newNode
    newCurr = newCurr.next
    currHead = currHead.next
  }

  currHead = head
  newCurr = newHead.next
  while (currHead != null) {
    newCurr.random = map.get(currHead.random)
    newCurr = newCurr.next
    currHead = currHead.next
  }

  return newHead.next
}
// @lc code=end
