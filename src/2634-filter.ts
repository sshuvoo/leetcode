type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
   const filteredArr: number[] = []
   let j = 0
   for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
         filteredArr[j] = arr[i]
         j++
      }
   }
   return filteredArr
}
