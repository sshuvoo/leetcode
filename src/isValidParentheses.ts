const getClose = (open: string): string => {
   if (open === "(") return ")";
   if (open === "{") return "}";
   if (open === "[") return "]";
   return "";
};

function isValid(s: string): boolean {
   if (s.length % 2 !== 0 || s.length < 2) return false;
   let str: string = s;
   const open: string[] = ["(", "{", "["];
   let tempStr: string = "";
   let isVal: boolean = true;
   let run: boolean = true;
   while (run) {
      for (let i = 0; i < str.length; i++) {
         if (open.includes(str[i])) tempStr += str[i];
         else {
            console.log(tempStr);
            if (tempStr) {
               tempStr += tempStr
                  .split("")
                  .reduce((prev, curr) => getClose(curr) + prev, "");
               if (str.startsWith(tempStr)) {
                  str = str.slice(tempStr.length);
                  tempStr = "";
                  if (str === "") {
                     run = false;
                     break;
                  }
               } else {
                  run = false;
                  isVal = false;
                  break;
               }
            } else {
               run = false;
               isVal = false;
               break;
            }
         }
      }
   }
   return isVal;
}

console.log(isValid("[{()}]{}((()))"));
