# TypeScript:

```ts
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
```

## Initialization:

-  We initialize the global max and min using the first array's last and first elements, respectively.

-  We also initialize max_dis to NaN, which will later hold the maximum distance.

## Iterating Through Arrays:

-  For each array starting from the second one:

-  We compute two distances:

-  The absolute difference between the current max and the first element of the current array (d1).

-  The absolute difference between the current min and the last element of the current array (d2).

-  We then compare these distances to the current max_dis, updating it if either d1 or d2 is greater.

## Updating Global Min and Max:

-  After calculating the distances, we update the global max and min with the last and first elements of the current array, respectively, to ensure the next iteration uses the most extreme values.

## Returning the Result:

-  Once all arrays have been processed, max_dis will contain the largest distance calculated, and this is returned as the result.

## Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
