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
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo (Give me star)
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 == null || list2 == null) {
      return list1 == null ? list2 : list1
    }

    // with recursive function

    // if(list1.val < list2.val){
    //   list1.next = mergeTwoLists(list1.next, list2)
    //   return list1
    // } else {
    //   list2.next = mergeTwoLists(list1, list2.next)
    //   return list2
    // }

    // with loop

    const head : ListNode | null = new ListNode()

    let curr : ListNode | null = head

    while(list1 != null && list2 != null){
      if(list1.val<list2.val){
        
      } else {

      }
    }

    if(list1!=null)  curr!.next = list1
    if(list2!=null) curr!.next = list2

    return head.next
};
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo (Give me star)
// @lc code=end
