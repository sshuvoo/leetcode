function nthUglyNumber(n: number): number {
   const uglies: number[] = [1, 2, 3]
   let i = 1
   while (i <= n) {
      i++
   }
   const stack = new Set(uglies)
   return n
}

console.log(nthUglyNumber(10))
