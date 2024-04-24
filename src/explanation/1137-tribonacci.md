# Explanation:

-  The first two base cases handle the situations where n is 0, 1, or 2, returning the predefined values of the sequence.
-  For n greater than 2, the function initializes an array series with the initial values of the Tribonacci sequence (0, 1, 1).
-  It then iterates starting from index 3 up to n, calculating each Tribonacci number using the recurrence relation Tn = Tn-3 + Tn-2 + Tn-1.
-  After the loop, it returns the value of Tn at index n.

# Solution TypeScript

```ts
function tribonacci(n: number): number {
   if (n === 0) return 0;
   if (n === 1 || n === 2) return 1;
   const series: number[] = [0, 1, 1];
   let i: number = 3;
   do {
      series[i] = series[i - 3] + series[i - 2] + series[i++ - 1];
   } while (i <= n);
   return series[n];
}
```

# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
