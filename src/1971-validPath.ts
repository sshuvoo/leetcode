function validPath(
   n: number,
   edges: number[][],
   source: number,
   destination: number
): boolean {
   if (source === destination) return true;
   let srcStack: number[] = [];
   let desStack: number[] = [];
   for (let i = 0; i < edges.length; i++) {
      if (
         (edges[i][0] === source && edges[i][1] === destination) ||
         (edges[i][1] === source && edges[i][0] === destination)
      )
         return true;
      if (edges[i][0] === source || srcStack.includes(edges[i][0])) {
         srcStack.push(edges[i][1]);
      } else if (edges[i][1] === source || srcStack.includes(edges[i][1])) {
         srcStack.push(edges[i][0]);
      } else if (
         edges[i][0] === destination ||
         desStack.includes(edges[i][0])
      ) {
         desStack.push(edges[i][1]);
      } else if (
         edges[i][1] === destination ||
         desStack.includes(edges[i][1])
      ) {
         desStack.push(edges[i][0]);
      }
   }
   console.log(srcStack);
   console.log(desStack);
   for (let i = 0; i < desStack.length; i++) {
      if (srcStack.includes(desStack[i])) return true;
   }
   return false;
}

console.log(
   validPath(
      10,
      [
         [4, 3],
         [1, 4],
         [4, 8],
         [1, 7],
         [6, 4],
         [4, 2],
         [7, 4],
         [4, 0],
         [0, 9],
         [5, 4],
      ],
      5,
      9
   )
);
