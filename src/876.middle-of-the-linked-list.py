#
# @lc app=leetcode id=876 lang=python3
#
# [876] Middle of the Linked List
#


# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None or head.next == None:
            return head
        slow: Optional[ListNode] = head
        fast: Optional[ListNode] = head
        while fast != None and fast.next != None:
            slow = slow.next
            fast = fast.next.next
        return slow


# https://leetcode.com/u/sshuvoo/
# https://github.com/sshuvoo (Give me star)
# @lc code=end
