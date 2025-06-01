/*
 * @lc app=leetcode id=217 lang=golang
 *
 * [217] Contains Duplicate
 */
// @lc code=start
package main

import "fmt"

func containsDuplicate(nums []int) bool {
	hashmap := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		if hashmap[nums[i]] == 1 {
			return true
		} else {
			hashmap[nums[i]] = 1
		}
	}
	return false
}

func main() {
	result := containsDuplicate([]int{1, 2, 3, 4, 5, 11, 6, 7, 8, 9})
	fmt.Println(result)
}

// @lc code=end
