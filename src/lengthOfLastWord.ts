// Method 1
function lengthOfLastWord(s: string): number {
   const strs: string[] = s.trim().split(" ");
   return strs[strs.length - 1].length;
}

// Method 2
function lengthOfLastWord1(s: string): number {
   const str: string = s.trim();
   let length: number = 0;
   for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] !== " ") length++;
      else break;
   }
   return length;
}
