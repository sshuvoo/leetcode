## Initialize the Result Array:

-  sortedArr: An array to store the elements of arr1 in the order defined by arr2.

## Process Elements of arr2:

-  Loop through each element in arr2.
-  For each element in arr2, loop through arr1 and find matching elements.
-  If a match is found, add the element to sortedArr and remove it from arr1.

## Sort Remaining Elements:

-  After processing all elements in arr2, sort the remaining elements in arr1 in ascending order.

## Combine Results:

-  Concatenate sortedArr with the sorted remaining elements from arr1 and return the result.
-  This approach ensures that elements of arr1 are arranged according to the order defined by arr2, and any elements not present in arr2 are sorted in ascending order and placed at the end of the result.

# Solve Using TypeScript

```ts
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
   const sortedArr: number[] = [];

   // Loop through each element in arr2
   for (let i = 0; i < arr2.length; i++) {
      let j = 0;
      // Loop through each element in arr1
      while (j < arr1.length) {
         // If element in arr2 matches element in arr1, add it to sortedArr
         if (arr2[i] === arr1[j]) {
            sortedArr[sortedArr.length] = arr1[j];
            arr1.splice(j, 1); // Remove element from arr1
         } else j++; // Move to the next element in arr1
      }
   }

   // Sort the remaining elements in arr1 that are not in arr2
   const restOfItems = arr1.sort((a, b) => a - b);

   // Combine sortedArr with the sorted remaining elements
   return [...sortedArr, ...restOfItems];
}
```

# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
