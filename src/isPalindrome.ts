// Problem Reference
// https://leetcode.com/problems/palindrome-number/description/

// solve 1
function isPalindrome1(x: number): boolean {
   const stringX: string = x.toString();
   const loopLength = stringX.length - 1;
   let reverseX: string = "";
   for (let i = loopLength; i >= 0; i--) {
      reverseX += stringX[i];
   }
   return stringX === reverseX;
}

// Solve 2
function isPalindrome2(x: number): boolean {
   const stringX: string = x.toString();
   const reverseX: string = stringX.split("").toReversed().join("");
   return stringX === reverseX;
}

// Solve 3
// Follow up: Could you solve it without converting the integer to a string?

function isPalindrome3(x: number): boolean {
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
