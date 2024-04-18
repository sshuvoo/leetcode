# Explanations

This code converts a Roman numeral string to its corresponding integer value by iterating through each character from right to left, determining whether to add or subtract its value based on the comparison with the previous character. Finally, it returns the accumulated integer result.

I made line-by-line explanations - So first try to understand to problem.

# Method 1 (iterating string from right to left)

```ts
function romanToInt(s: string): number {
   // Roman numerals
   const primes: Record<string, number> = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
   };

   // Initialize the integer result
   let int: number = 0;

   // Initialize variables to keep track of
   // the previous and current values
   let preValue: number = 0;
   let currValue: number = 0;

   // Iterate through each character in the input string
   //  (from right to left)
   for (let i = s.length - 1; i >= 0; i--) {
      // Get the current character numeric value
      currValue = primes[s[i]];

      // If the current value is greater than or
      // equal to the previous value, add it to the result
      if (currValue >= preValue) int += currValue;
      // If the current value is less than the previous value,
      // subtract it from the result
      else int -= currValue;

      // Update the previous value for the next iteration
      preValue = currValue;
   }

   // Return the final integer result
   return int;
}
```

# Method 2 (iterating string from left to right)

```ts
function romanToInt(s: string): number {
   const reserves: Record<string, number> = { I: 1, X: 10, C: 100 };

   // Initialize the integer result
   let int: number = 0;

   // Initialize a variable to track reserved numerals
   // (such as 'I' before 'V' or 'X') available I, X, C
   // reserve charactaer will be calculated in next iteration based on
   // next iteration character
   let reserve: null | string = null;

   // Iterate through each character in the input string
   for (let i = 0; i < s.length; i++) {
      // Handling 'I' (1)
      if (s[i] === "I") {
         // If there is a reserved numeral,
         // add its value to the result
         if (reserve) {
            int += reserves[reserve];
            reserve = null;
         }
         // If there are more characters after 'I',
         // mark 'I' as reserved
         if (s.length - 1 > i) {
            reserve = "I";
            continue;
         } else int += 1; // If 'I' is the last character
      }
      // Handling 'V' (5)
      else if (s[i] === "V") {
         // If there is a reserved numeral and it's not 'I',
         // add its value to the result
         if (reserve && reserve !== "I") {
            int += reserves[reserve];
            reserve = null;
         }
         // If 'I' was reserved before 'V', add 4 to the result
         // and clear the reservation
         if (reserve === "I") {
            int += 4;
            reserve = null;
         } else int += 5; // Otherwise, add 5 to the result
      }
      // Handling 'X' (10)
      else if (s[i] === "X") {
         // If there is a reserved numeral and it's not 'I',
         // add its value to the result
         if (reserve && reserve !== "I") {
            int += reserves[reserve];
            reserve = null;
         }
         // If 'I' was reserved before 'X',
         // add 9 to the result and clear the reservation
         if (reserve === "I") {
            int += 9;
            reserve = null;
         }
         // If there are more characters after 'X',
         // mark 'X' as reserved
         // If 'X' is at the end, add its value (10) to the result
         else if (s.length - 1 > i) {
            reserve = "X";
            continue;
         } else int += 10;
      }
      // Handling 'L' (50)
      else if (s[i] === "L") {
         // If there is a reserved numeral and it's not 'X',
         // add its value to the result
         if (reserve && reserve !== "X") {
            int += reserves[reserve];
            reserve = null;
         }
         // If 'X' was reserved before 'L',
         // add 40 to the result and clear the reservation
         if (reserve === "X") {
            int += 40;
            reserve = null;
         } else int += 50; // Otherwise, add 50 to the result
      }
      // Handling 'C' (100)
      else if (s[i] === "C") {
         // If there is a reserved numeral and it's not 'X',
         // add its value to the result
         if (reserve && reserve !== "X") {
            int += reserves[reserve];
            reserve = null;
         }
         // If 'X' was reserved before 'C',
         // add 90 to the result and clear the reservation
         if (reserve === "X") {
            int += 90;
            reserve = null;
         }
         // If there are more characters after 'C',
         // mark 'C' as reserved
         // If 'C' is at the end, add its value (100) to the result
         else if (s.length - 1 > i) {
            reserve = "C";
            continue;
         } else int += 100;
      }
      // Handling 'D' (500)
      else if (s[i] === "D") {
         // If there is a reserved numeral and
         // it's not 'C', add its value to the result
         if (reserve && reserve !== "C") {
            int += reserves[reserve];
            reserve = null;
         }
         // If 'C' was reserved before 'D',
         // add 400 to the result and clear the reservation
         if (reserve === "C") {
            int += 400;
            reserve = null;
         } else int += 500; // Otherwise, add 500 to the result
      }
      // Handling 'M' (1000)
      else if (s[i] === "M") {
         // If there is a reserved numeral and
         // it's not 'C', add its value to the result
         if (reserve && reserve !== "C") {
            int += reserves[reserve];
            reserve = null;
         }
         // If 'C' was reserved before 'M',
         // add 900 to the result and clear the reservation
         if (reserve === "C") {
            int += 900;
            reserve = null;
         } else int += 1000; // Otherwise, add 1000 to the result
      }
   }
   // Return the final integer result
   return int;
}
```
