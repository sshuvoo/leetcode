# Explanations

This code iterates through each cell of the grid, checking each cell's neighbors to determine the perimeter of the island. It adds 4 to the perimeter for each land cell and subtracts 1 for each neighboring land cell. Finally, it returns the calculated perimeter of the island.

I made line-by-line explanations - So first try to understand the problem.

# Solve - TypeScript

```ts
function islandPerimeter(grid: number[][]): number {
   // Initialize the perimeter counter to 0
   let perimeter: number = 0;

   // Loop through each row of the grid
   for (let i = 0; i < grid.length; i++) {
      // Loop through each column of the current row
      for (let j = 0; j < grid[i].length; j++) {
         // Check if the current cell is land
         const island: boolean = grid[i][j] === 1;

         // Check if the top neighbor cell is also land
         const isTopLand: boolean = i - 1 >= 0 && grid[i - 1][j] === 1;

         // Check if the bottom neighbor cell is also land
         const isBottomLand: boolean =
            i + 1 < grid.length && grid[i + 1][j] === 1;

         // Check if the left neighbor cell is also land
         const isLeftLand: boolean = j - 1 >= 0 && grid[i][j - 1] === 1;

         // Check if the right neighbor cell is also land
         const isRightLand: boolean =
            j + 1 < grid[i].length && grid[i][j + 1] === 1;

         // If the current cell is land, add 4 to the perimeter
         if (island) perimeter += 4;

         // If the current cell is land and it has a top neighbor,
         // subtract 1 from the perimeter
         if (island && isTopLand) perimeter--;

         // If the current cell is land and it has a bottom neighbor,
         // subtract 1 from the perimeter
         if (island && isBottomLand) perimeter--;

         // If the current cell is land and it has a left neighbor,
         // subtract 1 from the perimeter
         if (island && isLeftLand) perimeter--;

         // If the current cell is land and it has a right neighbor,
         // subtract 1 from the perimeter
         if (island && isRightLand) perimeter--;
      }
   }
   return perimeter;
}
```

# Solve - JavaScript

```ts
function islandPerimeter(grid) {
   let perimeter = 0;
   for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
         const island = grid[i][j] === 1;
         const isTopLand = i - 1 >= 0 && grid[i - 1][j] === 1;
         const isBottomLand = i + 1 < grid.length && grid[i + 1][j] === 1;
         const isLeftLand = j - 1 >= 0 && grid[i][j - 1] === 1;
         const isRightLand = j + 1 < grid[i].length && grid[i][j + 1] === 1;
         if (island) perimeter += 4;
         if (island && isTopLand) perimeter--;
         if (island && isBottomLand) perimeter--;
         if (island && isLeftLand) perimeter--;
         if (island && isRightLand) perimeter--;
      }
   }
   return perimeter;
}
```

# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
