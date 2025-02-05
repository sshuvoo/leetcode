/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//   if (headA === null || headB === null) return null
//   const hashMap = new Map<ListNode, number>()
//   let currA: ListNode | null = headA
//   let currB: ListNode | null = headB
//   while (currA) {
//     hashMap.set(currA, currA.val)
//     currA = currA.next
//   }
//   while (currB) {
//     if (hashMap.has(currB)) return currB
//     currB = currB.next
//   }
//   return null
// }

function getIntersectionNode(headA: ListNode, headB: ListNode): ListNode | null {
  let currA: ListNode | null = headA
  let currB: ListNode | null = headB
  while(currA !== currB) {
    currA = currA ? currA.next : headB
    currB = currB ? currB.next : headA
  }
  return currA
}

// @lc code=end
