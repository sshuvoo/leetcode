function lemonadeChange(bills: number[]): boolean {
   const reserve = [0, 0]; // [5, 10]
   for (let i = 0; i < bills.length; i++) {
      if (bills[i] === 5) reserve[0]++;
      else if (bills[i] === 10) {
         if (reserve[0] >= 1) {
            reserve[0]--;
            reserve[1]++;
         } else return false;
      } else if (bills[i] === 20) {
         if (reserve[1] >= 1 && reserve[0] >= 1) {
            reserve[1]--;
            reserve[0]--;
         } else if (reserve[1] === 0 && reserve[0] >= 3) {
            reserve[0] = reserve[0] - 3;
         } else return false;
      }
   }
   return true;
}
