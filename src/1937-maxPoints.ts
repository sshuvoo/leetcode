function maxPoints(points: number[][]): number {
   if (points.length === 1) return Math.max(...points[0])
   for (let i = 1; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
         let large: number = NaN
         for (let k = 0; k < points[i - 1].length; k++) {
            const sum = points[i][j] + points[i - 1][k] - Math.abs(j - k)
            if (!large || sum > large) large = sum
         }
         points[i][j] = large
      }
   }
   return Math.max(...points.at(-1)!)
}

console.log(
   maxPoints([
      [1, 2, 3],
      [1, 5, 1],
      [3, 1, 1],
   ])
)
