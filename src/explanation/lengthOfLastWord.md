# Explanation:

-  This function takes a string s as input and returns the length of the last word in the string.

-  It first trims the input string s using the trim() method to remove any leading and trailing spaces. This ensures that any leading or trailing spaces don't affect the calculation of the last word's length.

-  Then, it splits the trimmed string into an array of words using the split(" ") method. This splits the string at each space character, effectively separating individual words.

-  After splitting, the function retrieves the last element of the resulting array (which represents the last word) using words[words.length - 1].

-  Finally, it returns the length of the last word by accessing its length property: words[words.length - 1].length.

# Solution 1

```ts
function lengthOfLastWord(s: string): number {
   const strs: string[] = s.trim().split(" ");
   return strs[strs.length - 1].length;
}
```

# Solution 2

```ts
function lengthOfLastWord(s: string): number {
   const str: string = s.trim();
   let length: number = 0;
   for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] !== " ") length++;
      else break;
   }
   return length;
}
```

# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
