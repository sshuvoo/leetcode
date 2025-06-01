// https://leetcode.com/problems/island-perimeter/description/

function islandPerimeter(grid: number[][]): number {
   let perimeter: number = 0;
   for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
         const island: boolean = grid[i][j] === 1;
         const isTopLand: boolean = i - 1 >= 0 && grid[i - 1][j] === 1;
         const isBottomLand: boolean =
            i + 1 < grid.length && grid[i + 1][j] === 1;
         const isLeftLand: boolean = j - 1 >= 0 && grid[i][j - 1] === 1;
         const isRightLand: boolean =
            j + 1 < grid[i].length && grid[i][j + 1] === 1;
         if (island) perimeter += 4;
         if (island && isTopLand) perimeter--;
         if (island && isBottomLand) perimeter--;
         if (island && isLeftLand) perimeter--;
         if (island && isRightLand) perimeter--;
      }
   }
   return perimeter;
}
