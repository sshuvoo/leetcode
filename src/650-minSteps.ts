function minSteps(n: number): number {
   let steps: number = 0
   for (let i = 2; i * i <= n; i++) {
      while (n % i === 0) {
         n /= i
         steps += i
      }
   }
   if (n > 1) steps += n
   return steps
}

console.log(minSteps(100))
