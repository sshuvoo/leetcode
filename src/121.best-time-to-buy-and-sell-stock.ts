/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0
  let maxProfit = 0
  let buy = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i]
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - buy)
    }
  }
  return maxProfit > 0 ? maxProfit : 0
}
// https://github.com/sshuvoo
// @lc code=end
