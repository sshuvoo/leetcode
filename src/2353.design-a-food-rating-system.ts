/*
 * @lc app=leetcode id=2353 lang=typescript
 *
 * [2353] Design a Food Rating System
 */

// @lc code=start
class FoodRatings {
  m: Map<string, [f: string, r: number][]>
  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.m = new Map()
    for (let i = 0; i < foods.length; i++) {
      if (this.m.has(cuisines[i])) {
        const val = this.m.get(cuisines[i])!
        val.push([foods[i], ratings[i]])
        this.m.set(cuisines[i], val)
      } else {
        this.m.set(cuisines[i], [[foods[i], ratings[i]]])
      }
    }
  }

  changeRating(food: string, newRating: number): void {
    const entries = this.m.entries()
    for (const entry of entries) {
      for (const val of entry[1]) {
        if (val[0] == food) {
          const newVal = [val[0], newRating] as [f: string, r: number]
          const mv = this.m.get(entry[0])!
          const newMV = mv.map((v) => (v[0] == val[0] ? newVal : v))
          this.m.set(entry[0], newMV)
          return
        }
      }
    }
  }

  highestRated(cuisine: string): string {
    const val = this.m.get(cuisine)!
    let max = -Infinity
    let food = ''
    for (const v of val) {
      if (v[1] > max) {
        food = v[0]
        max = v[1]
      }
    }
    return food
  }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
// @lc code=end
