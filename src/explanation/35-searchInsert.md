```ts
function plusOne(digits: number[]): number[] {
   for (let i = digits.length - 1; i >= 0; i--) {
      // If the current digit is less than 9,
      // increment it by one and return the array
      if (digits[i] < 9) {
         digits[i] = digits[i] + 1;
         return digits;
      } else {
         // If the current digit is 9,
         // set it to 0
         digits[i] = 0;
      }
   }
   // If all digits are 9,
   // add 1 at the beginning of the array
   digits.unshift(1);
   return digits;
}
```

# Solution JavaScript

```js
function plusOne(digits) {
   for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
         digits[i] = digits[i] + 1;
         return digits;
      } else digits[i] = 0;
   }
   digits.unshift(1);
   return digits;
}
```
# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.