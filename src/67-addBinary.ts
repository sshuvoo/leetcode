function addBinary(a: string, b: string): string {
   let sum: string = "";
   let carry: number = 0;
   let i: number = a.length - 1;
   let j: number = b.length - 1;
   while (i >= 0 || j >= 0) {
      let partialSum: number =
         parseInt(a[i--] ?? "0") + parseInt(b[j--] ?? "0") + carry;
      sum = partialSum % 2 === 0 ? "0" + sum : "1" + sum;
      carry = partialSum > 1 ? 1 : 0;
   }
   return carry ? "1" + sum : sum;
}
