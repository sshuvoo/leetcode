# Explanation:

-  It first checks if the length of the string is less than 2 or odd, in which case it can't be valid, so it returns false.

-  It defines a mapping pair where each opening bracket is mapped to its corresponding closing bracket.

-  It initializes a stack to store opening brackets encountered during iteration.

-  It iterates through each character in the string:

   -  If the character is an opening bracket, it is pushed onto the stack.

   -  If the character is a closing bracket, it checks if it matches the corresponding opening bracket at the top of the stack. If matched, it pops the opening bracket from the stack. If not matched, the string is invalid, so it returns false.

-  After iterating through the entire string, if the stack is empty, it means all opening brackets have been matched with closing brackets, and the string is valid. Otherwise, it returns false.

# Solution TypeScript

```ts
function isValid(s: string): boolean {
   // If the length of the string is less than 2
   // or odd, it can't be valid
   if (s.length < 2 || s.length % 2 === 1) return false;
   const pair: Record<string, string> = { "(": ")", "{": "}", "[": "]" };

   // Initialize a stack to store opening brackets encountered
   const stack: string[] = [];

   for (let i = 0; i < s.length; i++) {
      // If the current character is an opening bracket,
      // push it onto the stack at first position
      if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
         stack.unshift(s[i]);
      } else {
         // If the current character is a closing bracket
         // Check if it matches the corresponding opening bracket
         // at the top of the stack
         if (pair[stack[0]] === s[i]) {
            // If matched, removed the first element from the stack
            stack.shift();
         } else {
            return false; // If not matched, the string is invalid
         }
      }
   }
   // After iterating through the entire string,
   // if the stack is empty, the string is valid
   return stack.length === 0;
}
```

# Solution JavaScript

```js
function isValid(s) {
   if (s.length < 2 || s.length % 2 === 1) return false;
   const pair = { "(": ")", "{": "}", "[": "]" };
   const stack = [];
   for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
         stack.unshift(s[i]);
      } else {
         if (pair[stack[0]] === s[i]) stack.shift();
         else return false;
      }
   }
   return stack.length === 0;
}
```

# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
