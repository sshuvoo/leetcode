/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0
  let maxProfit = 0
  let buy = prices[0]
  for (let i = 1; i < prices.length; i++) {
    maxProfit += Math.max(prices[i] - buy, 0)
    buy = prices[i]
  }
  return maxProfit
}
// https://github.com/sshuvoo
// @lc code=end
