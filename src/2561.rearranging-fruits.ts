/*
 * @lc app=leetcode id=2561 lang=typescript
 *
 * [2561] Rearranging Fruits
 */

// @lc code=start
function minCost(basket1: number[], basket2: number[]): number {
  const set = new Set<number>()
  const map1 = new Map<number, number>()
  const map2 = new Map<number, number>()

  let sum1 = 0,
    sum2 = 0,
    min1 = Infinity,
    min2 = Infinity
  for (let i = 0; i < basket1.length; i++) {
    min1 = Math.min(min1, basket1[i], basket2[i])
    min2 = Math.min(min2, basket2[i])
    map1.set(basket1[i], (map1.get(basket1[i]) ?? 0) + 1)
    map2.set(basket2[i], (map2.get(basket2[i]) ?? 0) + 1)
    sum1 += basket1[i]
    sum2 += basket2[i]
    if (set.has(basket1[i])) set.delete(basket1[i])
    else set.add(basket1[i])
    if (set.has(basket2[i])) set.delete(basket2[i])
    else set.add(basket2[i])
  }
  if (set.size != 0) return -1
  if (sum1 == sum2) return 0
  const s1: number[] = []
  const s2: number[] = []

  for (let i = 0; i < basket1.length; i++) {
    const hasIn1 = map1.get(basket1[i])
    const hasIn2 = map2.get(basket1[i])

    const has2In1 = map1.get(basket2[i])
    const has2In2 = map2.get(basket2[i])

    if ((hasIn1 || 0) > (hasIn2 || 0)) {
      s1.push(...Array((hasIn1! - (hasIn2 || 0)) / 2).fill(basket1[i]))
      map1.delete(basket1[i])
      map2.delete(basket1[i])
    }

    if ((has2In2 || 0) > (has2In1 || 0)) {
      s2.push(...Array((has2In2! - (has2In1 || 0)) / 2).fill(basket2[i]))
      map1.delete(basket2[i])
      map2.delete(basket2[i])
    }
  }

  s1.sort((a, b) => a - b)
  s2.sort((a, b) => b - a)

  let cost = 0, cost2 = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] != min1) {
      cost += min1
    }
    if (s2[i] != min1) {
      cost += min1
    }
    cost2 += Math.min(s1[i], s2[i])
  }

  return Math.min(cost, cost2)
}

console.log(
  minCost([2, 2, 2, 2, 2, 4, 10, 10, 12, 12], [1, 1, 1, 1, 2, 4, 5, 5, 20, 20])
)
// 6

// console.log(minCost([4, 4, 4, 4, 3], [5, 5, 5, 5, 3]))

// 8

// { s1: [ 2, 2, 10, 12 ], s2: [ 1, 1, 5, 20 ] }
// { min1: 2, min2: 1 }

// [1, 2, 10, 12] [2, 1, 5, 20] cost - 1

// s1 [2, 2] s2 [68, 42, 32]
// s1 [43, 80, 32] s2 [68, 42, 88]

// @lc code=end
