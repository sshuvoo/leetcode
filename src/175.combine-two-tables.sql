--
-- @lc app=leetcode id=175 lang=mysql
--
-- [175] Combine Two Tables
--

-- @lc code=start
# Write your MySQL query statement below
select person.firstName, person.lastName, address.city, address.state from person
left join address on person.personId = address.personId;
-- @lc code=end