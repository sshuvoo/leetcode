function maxDistance(arrays: number[][]): number {
   let max: number = arrays[0].at(-1)!
   let min: number = arrays[0][0]
   let max_dis: number = NaN
   for (let i = 1; i < arrays.length; i++) {
      let d1 = Math.abs(max - arrays[i][0])
      let d2 = Math.abs(min - arrays[i].at(-1)!)
      if ((!max_dis && max_dis !== 0) || max_dis < d1) max_dis = d1
      if (max_dis < d2) max_dis = d2
      if (max < arrays[i].at(-1)!) max = arrays[i].at(-1)!
      if (min > arrays[i][0]) min = arrays[i][0]
   }
   return max_dis
}
