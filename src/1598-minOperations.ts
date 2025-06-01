function minOperations(logs: string[]): number {
   let current = 0;
   for (let i = 0; i < logs.length; i++) {
      if (logs[i] === "./" || (logs[i] === "../" && current === 0)) continue;
      if (logs[i] === "../") current--;
      else current++;
   }
   return current;
}

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
