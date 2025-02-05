#
# @lc app=leetcode id=160 lang=python3
#
# [160] Intersection of Two Linked Lists
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        currA: Optional[ListNode] = headA
        currB: Optional[ListNode] = headB
        while currA != currB:
            currA = currA.next if currA != None else headB
            currB = currB.next if currB != None else headA
        return currA
# @lc code=end

