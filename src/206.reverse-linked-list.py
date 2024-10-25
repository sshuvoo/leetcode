#
# @lc app=leetcode id=206 lang=python3
#
# [206] Reverse Linked List
#


# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev: Optional[ListNode] = None
        curr: Optional[ListNode] = head
        next: Optional[ListNode] = None
        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        return prev


#  https://leetcode.com/u/nofaceman/
#  https://github.com/sshuvoo (Give me star)
# @lc code=end
