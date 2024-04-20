# Explanation:

-  This function takes an array of integers nums as input and returns the number of unique elements in nums.

-  It initializes a variable i to keep track of the current index while iterating through the array.

-  Inside the while loop, it checks if the current element is a duplicate of the previous one. It does this by comparing the current element nums[i] with the previous one nums[i - 1]. However, it skips this check for the first element (i.e., when i is 0) since there is no previous element to compare with.

-  If the current element is a duplicate, it removes it from the array using the splice method.

-  If the current element is not a duplicate, it moves to the next element by incrementing i.

-  Finally, it returns the length of the modified array, which represents the number of unique elements remaining after removing duplicates.

# Solution TypeScript

```ts
function removeDuplicates(nums: number[]): number {
   let i: number = 0;
   while (i < nums.length) {
      if (i !== 0 && nums[i - 1] === nums[i]) {
         nums.splice(i, 1);
      } else i++;
   }
   return nums.length;
}
```

# Solution JavaScript

```js
function removeDuplicates(nums) {
   let i = 0;
   while (i < nums.length) {
      if (i !== 0 && nums[i - 1] === nums[i]) {
         nums.splice(i, 1);
      } else i++;
   }
   return nums.length;
}
```

# Another Solution that meet the description

# But not accepted by leetcode

```ts
function removeDuplicates(nums: number[]): number {
   let j: number = 0;
   for (let i = 0; i < nums.length; i++) {
      if (i !== 0 && nums[i - 1] === nums[i]) {
         continue;
      } else {
         nums[j++] = nums[i];
      }
   }
   return nums.length;
}
```

# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
