# Solve TypeScript

```ts
function strStr(haystack: string, needle: string): number {
   return haystack.indexOf(needle);
}
```

# Solve JavaScript

```ts
function strStr(haystack, needle) {
   return haystack.indexOf(needle);
}
```

# Mathod 2

```ts
function strStr(haystack: string, needle: string): number {
   const strArr: string[] = haystack.split(needle);
   if (haystack.length === strArr[0].length) return -1;
   else return strArr[0].length;
}
```
