function climbStairs(n: number): number {
   let ways: number = 0;
   if (n % 2 === 0) {
      ways += 2;
   } else {
      ways = 1 + (n - 1) + (n - 2);
   }
}

console.log(climbStairs(5));

1111111;

111112;
111121;
111211;
112111;
121111;
211111;

11122;
11221;
12211;
22111;

1222
2221
