# Solution TypeScript

```ts
function minOperations(logs: string[]): number {
   let current = 0;
   for (let i = 0; i < logs.length; i++) {
      if (logs[i] === "./" || (logs[i] === "../" && current === 0)) continue;
      if (logs[i] === "../") current--;
      else current++;
   }
   return current;
}
```

# Explanation:

Initialize Variable:

-  let current = 0; initializes a variable current to keep track of the current depth in the folder structure. current starts at 0, representing the main folder.

Iterate Over Logs:

-  A for loop iterates over each log operation in the logs array using the index i.

Handle "./" and "../" in Main Folder:

-  If the log is "./", it means staying in the same folder, so continue to the next iteration without changing current.

-  If the log is "../" and we are already in the main folder (current === 0), continue to the next iteration without changing current since we can't move up from the main folder.

Handle "../" Operation:

-  If the log is "../" and current is not 0, decrement current by 1 to simulate moving to the parent folder.

Handle "x/" Operation:

-  If the log is neither "./" nor "../", it means moving into a child folder. Increment current by 1.

# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
