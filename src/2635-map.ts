function map(arr: number[], fn: (n: number, i: number) => number): number[] {
   const newArr: number[] = []
   for (let i = 0; i < arr.length; i++) {
      newArr[i] = fn(arr[i], i)
   }
   return newArr
}

console.log(map([1, 2, 3], (n: number, i: number) => n + 1))
