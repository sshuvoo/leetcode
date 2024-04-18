// Method 1

function romanToInt1(s: string): number {
   const primes: Record<string, number> = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
   };
   let int: number = 0;
   let preValue: number = 0;
   let currValue: number = 0;
   for (let i = s.length - 1; i >= 0; i--) {
      currValue = primes[s[i]];
      if (currValue >= preValue) int += currValue;
      else int -= currValue;
      preValue = currValue;
   }
   return int;
}

console.log(romanToInt1("MMCLXVIII")); // 2168

// Method 2

function romanToInt(s: string): number {
   const reserves: Record<string, number> = { I: 1, X: 10, C: 100 };
   let int: number = 0;
   let reserve: null | string = null;
   for (let i = 0; i < s.length; i++) {
      if (s[i] === "I") {
         if (reserve) {
            int += reserves[reserve];
            reserve = null;
         }
         if (s.length - 1 > i) {
            reserve = "I";
            continue;
         } else int += 1;
      } else if (s[i] === "V") {
         if (reserve && reserve !== "I") {
            int += reserves[reserve];
            reserve = null;
         }
         if (reserve === "I") {
            int += 4;
            reserve = null;
         } else int += 5;
      } else if (s[i] === "X") {
         if (reserve && reserve !== "I") {
            int += reserves[reserve];
            reserve = null;
         }
         if (reserve === "I") {
            int += 9;
            reserve = null;
         } else if (s.length - 1 > i) {
            reserve = "X";
            continue;
         } else int += 10;
      } else if (s[i] === "L") {
         if (reserve && reserve !== "X") {
            int += reserves[reserve];
            reserve = null;
         }
         if (reserve === "X") {
            int += 40;
            reserve = null;
         } else int += 50;
      } else if (s[i] === "C") {
         if (reserve && reserve !== "X") {
            int += reserves[reserve];
            reserve = null;
         }
         if (reserve === "X") {
            int += 90;
            reserve = null;
         } else if (s.length - 1 > i) {
            reserve = "C";
            continue;
         } else int += 100;
      } else if (s[i] === "D") {
         if (reserve && reserve !== "C") {
            int += reserves[reserve];
            reserve = null;
         }
         if (reserve === "C") {
            int += 400;
            reserve = null;
         } else int += 500;
      } else if (s[i] === "M") {
         if (reserve && reserve !== "C") {
            int += reserves[reserve];
            reserve = null;
         }
         if (reserve === "C") {
            int += 900;
            reserve = null;
         } else int += 1000;
      }
   }
   return int;
}
