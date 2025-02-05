/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) return list2
  if (list2 === null) return list1
  let pointer1: ListNode | null = list1
  let pointer2: ListNode | null = list2
  let mergedList: ListNode = new ListNode()
  let currML = mergedList
  while (pointer1 !== null && pointer2 !== null) {
    if (pointer1.val < pointer2.val) {
      currML.next = pointer1
      pointer1 = pointer1.next
    } else {
      currML.next = pointer2
      pointer2 = pointer2.next
    }
    currML = currML.next
  }
  if (pointer1 !== null) currML.next = pointer1
  if (pointer2 !== null) currML.next = pointer2
  return mergedList.next
}
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// @lc code=end
