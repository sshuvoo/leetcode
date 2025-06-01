function reverse(x: number): number {
   let num =
      x > 0
         ? Number(x.toString().split("").reverse().join(""))
         : -1 * Number((-1 * x).toString().split("").reverse().join(""));

   if (num > 2 ** 31 - 1 || num < -1 * 2 ** 31) return 0;
   return num;
}
