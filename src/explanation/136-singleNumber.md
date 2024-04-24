# Explanation:

-  It initializes a variable single to 0.
-  It iterates through the array nums and performs bitwise XOR (^) operation with each element. XOR operation between two same numbers results in 0, so for every pair of duplicate numbers, they cancel each other out, leaving only the single number.

```
   Truth Table of XOR(Exclusive-OR)
    1 ^ 1 = 0  (same bit = 0)
    0 ^ 0 = 0
    1 ^ 0 = 1  (different bit = 1)
    0 ^ 1 = 1

   // For different number
    10 (decimal) = 00000000000000000000000000001010 (32-bit Binary)
    7  (decimal) = 00000000000000000000000000000111 (32-bit Binary)
    ----------------------------------------------------------------
    10 ^ 7       = 00000000000000000000000000001101 = 13

   // For same number
   10 (decimal) = 00000000000000000000000000001010 (32-bit Binary)
   10 (decimal) = 00000000000000000000000000001010 (32-bit Binary)
    ----------------------------------------------------------------
    10 ^ 10     = 00000000000000000000000000000000 = 0
```

# Solution TypeScript

```ts
function singleNumber(nums: number[]): number {
   let single: number = 0;
   for (const num of nums) single ^= num;
   return single;
}
```

# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
