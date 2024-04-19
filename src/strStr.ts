// Mthod 1
function strStr(haystack: string, needle: string): number {
   return haystack.indexOf(needle);
}

// Mthod 2
function strStr1(haystack: string, needle: string): number {
   const strArr: string[] = haystack.split(needle);
   if (haystack.length === strArr[0].length) return -1;
   else return strArr[0].length;
}
