function lengthOfLastWord1(s) {
   const str = s.trim();
   let length = 0;
   for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] !== " ") length++;
      else break;
   }
   return length;
}

console.log(lengthOfLastWord1("World       dbhdb      Bangladesh        "));
