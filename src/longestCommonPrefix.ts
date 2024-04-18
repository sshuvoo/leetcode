// With some method
function longestCommonPrefix(strs: string[]): string {
   let prefix: string = strs[0];
   while (true) {
      const isfound = strs.every((str) => str.startsWith(prefix));
      if (isfound) break;
      else prefix = prefix.slice(0, prefix.length - 1);
   }
   return prefix;
}

// With vanilla method
function longestCommonPrefix1(strs: string[]): string {
   let prefix: string = "";
   let tempPrefix: string;
   let run: boolean = true;
   let strIndex: number = 0;
   while (run) {
      tempPrefix = "";
      for (let i = 0; i < strs.length; i++) {
         if (
            i === strs.length - 1 &&
            strIndex < strs[i].length &&
            tempPrefix === strs[i][strIndex]
         ) {
            prefix += tempPrefix;
            strIndex++;
         } else if (i === 0) tempPrefix = strs[i][strIndex];
         else if (strIndex < strs[i].length && tempPrefix === strs[i][strIndex])
            continue;
         else {
            run = false;
            break;
         }
      }
   }
   return prefix;
}
