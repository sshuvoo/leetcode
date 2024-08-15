function multiplyCount(str: string, multiplyer: number): string {
   let multiplied = "";
   for (let i = 0; i < str.length; i++) {
      if (isNaN(parseInt(str[i]))) {
         if (str[i + 1]) {
            if (
               isNaN(parseInt(str[i + 1])) &&
               str[i + 1] === str[i + 1].toUpperCase()
            ) {
               multiplied += str[i] + multiplyer;
            } else multiplied += str[i];
         } else multiplied += str[i] + multiplyer;
      } else {
         multiplied += parseInt(str[i]) * multiplyer;
      }
   }
   return multiplied;
}

function countOfAtoms(formula: string): string {
   const stack: string[] = [];
   let temp: string = "";
   let isMultiplyAble = false;
   for (let i = 0; i < formula.length; i++) {
      if (
         formula[i] !== "(" &&
         formula[i] !== ")" &&
         isNaN(parseInt(formula[i]))
      ) {
         temp += formula[i];
      } else if (formula[i] === "(") {
         stack.push(temp);
         temp = "";
      } else if (formula[i] === ")") {
         stack[stack.length - 1] = multiplyCount(
            stack[stack.length - 1],
            parseInt(formula[i + 1])
         );
      }
   }
   console.log(stack);
}

console.log(countOfAtoms("K4(ON(SO3)2)2"));

// K4N2O14S4
