# Explanations

To solve this problem, we use a two-pointer approach. We initialize an index variable i to 0, which will represent the current position in the array. We then iterate through the array using a while loop until we reach the end of the array.

During each iteration, we check if the current element at index i is equal to the value val that we want to remove. If it is, we use the splice() method to remove that element from the array.

If the current element is not equal to val, we increment the index i to move to the next element in the array.

By the end of the iteration, the array will be modified such that all occurrences of val are removed, and the remaining elements will be shifted to the beginning of the array. We then return the length of the modified array, which represents the number of elements in the array that are not equal to val.

# Solution TypeScript

```ts
function removeElement(nums: number[], val: number): number {
   // Initialize index variable
   let i: number = 0;
   // Loop through the array
   while (i < nums.length) {
      // If current element is equal to val
      if (nums[i] === val) {
         // Remove the element from the array
         nums.splice(i, 1);
      } else {
         // Move to the next element
         i++;
      }
   }
   // Return the length of the modified array
   return nums.length;
}
```

# Solution JavaScript

```js
function removeElement(nums, val) {
   let i = 0;
   while (i < nums.length) {
      if (nums[i] === val) {
         nums.splice(i, 1);
      } else i++;
   }
   return nums.length;
}
```

# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
