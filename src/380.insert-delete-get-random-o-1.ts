/*
 * @lc app=leetcode id=380 lang=typescript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start
// https://github.com/sshuvoo
class RandomizedSet {
  private set: Map<number, number>
  private list: number[]

  constructor() {
    this.set = new Map()
    this.list = []
  }

  insert(val: number): boolean {
    if (this.set.has(val)) return false
    this.set.set(val, this.list.length)
    this.list.push(val)
    return true
  }

  remove(val: number): boolean {
    if (!this.set.has(val)) return false
    const index = this.set.get(val)
    // Placed the list's last element, into the deleted one's
    // So Gap will be filled
    this.list[index!] = this.list[this.list.length - 1]
    // update the index value in map
    this.set.set(this.list[index!], index!)
    // delete the list's last element
    this.list.pop()
    this.set.delete(val)
    return true
  }

  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)]
  }
}
// https://github.com/sshuvoo
// @lc code=end
