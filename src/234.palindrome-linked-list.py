#
# @lc app=leetcode id=234 lang=python3
#
# [234] Palindrome Linked List
#


# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def findMid(self, head: ListNode) -> ListNode:
        if head.next == None:
            return head
        slow: Optional[ListNode] = head
        fast: Optional[ListNode] = head
        while fast != None and fast.next != None:
            slow = slow.next
            fast = fast.next.next
        return slow

    def reverse(self, head: ListNode) -> ListNode:
        if head.next == None:
            return head
        prev: Optional[ListNode] = None
        curr: Optional[ListNode] = head
        next: Optional[ListNode] = None
        while curr != None:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        return prev

    def isPalindrome(self, head: ListNode) -> bool:
        if head.next == None:
            return True
        mid = self.findMid(head)
        rList = self.reverse(mid)
        curr: Optional[ListNode] = head
        while rList != None:
            if rList.val != curr.val:
                return False
            curr = curr.next
            rList = rList.next
        return True


#  https://leetcode.com/u/sshuvoo
#  https://github.com/sshuvoo (Give me star)
# @lc code=end
