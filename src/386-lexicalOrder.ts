function lexicalOrder(n: number): number[] {
   const order: number[] = []
   let current: number = 0
   for (let i = 0; i < n; i++) {
      if (current * i * 10 <= 9 * i * 10) {
         current++
         order.push(current)
      }
   }
   return order
}

console.log(lexicalOrder(35))
