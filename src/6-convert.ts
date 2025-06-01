function convert(s: string, numRows: number): string {
   if (numRows === 1) return s;
   const zigzag: string[] = Array(numRows).fill("");
   let col = 0;
   let isIncrement = true;
   for (let i = 0; i < s.length; i++) {
      zigzag[col] += s[i];
      if (isIncrement) {
         if (col < numRows - 1) col++;
         else {
            col--;
            isIncrement = false;
         }
      } else {
         if (col > 0) col--;
         else {
            col++;
            isIncrement = true;
         }
      }
   }
   return zigzag.join("");
}

// P   A   H   N
// A P L S I I G
// Y   I   R

console.log(convert("AB", 1));
