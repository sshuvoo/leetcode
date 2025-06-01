function longestIdealString(s: string, k: number): number {
   const index: Record<string, number> = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25,
   };
   let strs: string[] = [];
   let i = 0;
   let j = 0;
   while (i < s.length) {
      if (i === 0) {
         strs[j] = s[i];
      } else if (Math.abs(index[s[i]] - index[s[i - 1]]) <= k) {
         strs[j] = strs[j] ? strs[j] + s[i] : s[i];
      } else strs[++j] = s[i];
      i++;
   }
   console.log(strs);
}

console.log(longestIdealString("acfgbd", 2));
