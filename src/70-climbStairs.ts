function climbStairs(n: number): number {
   let ways: number = 0
   let two = n % 2 === 0 ? n / 2 : (n - 1) / 2
   while (two >= 1) {
      if (n % 2 === 0) {
         two = n / 2
      } else {
         ways = 1 + (n - 1) + (n - 2)
      }
   }
}

console.log(climbStairs(6))

2 + 2 + 2

2 + 2 + 1 + 1
2 + 1 + 2 + 1
2 + 1 + 1 + 2
1 + 2 + 1 + 1
1 + 1 + 2 + 1
1 + 1 + 1 + 2

2 + 1 + 1 + 1 + 1
1 + 2 + 1 + 1 + 1
1 + 1 + 2 + 1 + 1
1 + 1 + 1 + 2 + 1
1 + 1 + 1 + 1 + 2

1 + 1 + 1 + 1 + 1 + 1
