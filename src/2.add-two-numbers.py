#
# @lc app=leetcode id=2 lang=python3
#
# [2] Add Two Numbers
#


# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> ListNode:
        dummy = ListNode()
        curr = dummy
        carry = 0
        while l1 or l2 or carry:
            sum = carry
            if l1:
                sum += l1.val
                l1 = l1.next
            if l2:
                sum += l2.val
                l2 = l2.next
            carry = sum // 10
            sum = sum % 10
            curr.next = ListNode(sum)
            curr = curr.next
        return dummy.next


#  https://leetcode.com/u/sshuvoo/
#  https://github.com/sshuvoo (Give me star)
# @lc code=end
