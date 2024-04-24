function tribonacci(n) {
   if (n === 0) return 0;
   else if (n === 1) return 1;
   else if (n === 2) return 2;
   else return tribonacci(n + 3) - tribonacci(n + 1) - tribonacci(n + 2);
}

console.log(tribonacci(4));
