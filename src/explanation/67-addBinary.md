# Explanation:

-  The function iterates from the least significant digit to the most significant digit of both binary strings a and b.
-  At each step, it calculates the sum of the current digits from both strings and the carry from the previous step.
-  It appends the appropriate digit (0 or 1) to the result string sum based on the sum modulo 2.
-  It updates the carry for the next iteration based on whether the sum is greater than 1.
-  After processing all digits, if there's still a carry, it appends it to the beginning of the result string.
-  Finally, it returns the resulting binary sum.

# Solution TypeScript

```ts
function addBinary(a: string, b: string): string {
   // Initialize the result string
   let sum: string = "";
   // Initialize the carry to 0
   let carry: number = 0;
   // Initialize the index for string 'a' and 'b'
   let i: number = a.length - 1;
   let j: number = b.length - 1;

   // Iterate from the LSB to the MSB
   while (i >= 0 || j >= 0) {
      // Get the current digits sum
      let partialSum: number =
         parseInt(a[i--] ?? "0") + parseInt(b[j--] ?? "0") + carry;
      // Calculate the result string
      sum = partialSum % 2 === 0 ? "0" + sum : "1" + sum;
      // Update the carry for the next position
      carry = partialSum > 1 ? 1 : 0;
   }
   // If there's a carry after processing all digits,
   // add it to the result
   return carry ? "1" + sum : sum;
}
```

# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
