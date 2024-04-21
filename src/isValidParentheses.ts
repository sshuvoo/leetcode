function isValid(s: string): boolean {
   if (s.length < 2 || s.length % 2 === 1) return false;
   const pair: Record<string, string> = { "(": ")", "{": "}", "[": "]" };
   const stack: string[] = [];
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
