/*
 * @lc app=leetcode id=242 lang=golang
 *
 * [242] Valid Anagram
 */

// @lc code=start
// package main

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	hashmap := make(map[rune]int)
	for i := 0; i < len(s); i++ {
		hashmap[rune(s[i])] = hashmap[rune(s[i])] + 1
		hashmap[rune(t[i])] = hashmap[rune(t[i])] - 1
	}
	for _, value := range hashmap {
		if value != 0 {
			return false
		}
	}
	return true
}

// func main() {
// 	isAnagram("abcd", "dacb")
// }

// @lc code=end
