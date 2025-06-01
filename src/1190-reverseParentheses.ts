function reverseStr(s: string): string {
   let str = "";
   for (let i = s.length - 1; i >= 0; i--) str += s[i];
   return str;
}

function reverseParentheses(s: string): string {
   let result = "";
   const stack: string[] = [];
   for (let i = 0; i < s.length; i++) {
      if (s[i] !== "(" && s[i] !== ")") {
         if (s[i - 1] === undefined || s[i - 1] === "(") {
            stack.push(s[i]);
         } else stack[stack.length - 1] += s[i];
      } else if (s[i] === ")") {
         const partialRev = reverseStr(stack[stack.length - 1]);
         if (stack.length === 1) stack[0] = partialRev;
         else {
            stack.pop();
            stack[stack.length - 1] += partialRev;
         }
      }
   }
   return stack[0];
}

console.log(reverseParentheses("(ed(et(oc))el)"));
console.log(reverseParentheses("vdgzyj()"));

// (ed(et(oc))el)
//  le et co de
