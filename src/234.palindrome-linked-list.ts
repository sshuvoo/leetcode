/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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
function findMid(head: ListNode): ListNode | null {
  if (head.next === null) return head
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

function reverseList(head: ListNode): ListNode | null {
  if (head.next === null) return head
  let left: ListNode | null = null
  let curr: ListNode | null = head
  let right: ListNode | null = null
  while (curr) {
    right = curr.next
    curr.next = left
    left = curr
    curr = right
  }
  return left
}

function isPalindrome(head: ListNode): boolean {
  if (head.next === null) return true
  let curr: ListNode | null = head
  const mid = findMid(head)
  let rList = reverseList(mid)
  while (rList !== null && curr !== null) {
    if (rList.val !== curr.val) return false
    rList = rList.next
    curr = curr.next
  }
  return true
}
// https://leetcode.com/u/sshuvoo
// https://github.com/sshuvoo (Give me star)
// @lc code=end
