# Problem Description:

The problem asks to determine whether an integer is a palindrome or not. A palindrome is a number that reads the same forwards and backwards.

# Solve 1

```ts
function isPalindrome(x: number): boolean {
   const stringX: string = x.toString();
   const reverseX: string = stringX.split("").toReversed().join("");
   return stringX === reverseX;
}
```

# solve 2

```ts
function isPalindrome(x: number): boolean {
   const stringX: string = x.toString();
   const loopLength = stringX.length - 1;
   let reverseX: string = "";
   for (let i = loopLength; i >= 0; i--) {
      reverseX += stringX[i];
   }
   return stringX === reverseX;
}
```

# Solve 3

# Approach:

-  Handling Negative Numbers: If the input number is negative, it cannot be a palindrome because negative numbers do not read the same forwards and backwards. So, if x is negative, the function returns false.
-  Convert to Array of Digits: For positive numbers, the function converts the number into an array of its digits.
-  Check Palindrome: After obtaining the array of digits, the function compares the digits from the start and the end of the array to determine if the number is a palindrome. If at any point, the digits don't match, the function returns false. If all digits match, the function returns true.

```ts
// Follow up: Could you solve it without converting the integer to a string?
// Yes, I could
function isPalindrome(x: number): boolean {
   if (x < 0) return false;
   else {
      let numberX: number = x;
      const arrayX: number[] = [];
      do {
         arrayX.push(numberX % 10);
         numberX = Math.trunc(numberX / 10);
      } while (numberX);
      for (let i = 0; i < Math.trunc(arrayX.length / 2); i++) {
         if (arrayX[i] !== arrayX[arrayX.length - 1 - i]) return false;
      }
      return true;
   }
}
```

# Final Words

If you are not a fan of TypeScript, Please use a online TS to JS converter.
If you find this article useful, Let me know which country are you from? I'm from Bangladesh.
