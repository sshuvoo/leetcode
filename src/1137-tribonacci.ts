function tribonacci(n: number): number {
   if (n === 0) return 0;
   if (n === 1 || n === 2) return 1;
   const series: number[] = [0, 1, 1];
   let i: number = 3;
   do {
      series[i] = series[i - 3] + series[i - 2] + series[i++ - 1];
   } while (i <= n);
   return series[n];
}
