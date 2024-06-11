function relativeSortArray(arr1: number[], arr2: number[]): number[] {
   const sortedArr: number[] = [];
   for (let i = 0; i < arr2.length; i++) {
      let j = 0;
      while (j < arr1.length) {
         if (arr2[i] === arr1[j]) {
            sortedArr[sortedArr.length] = arr1[j];
            arr1.splice(j, 1);
         } else j++;
      }
   }
   const restOfItems = arr1.sort((a, b) => a - b);
   return [...sortedArr, ...restOfItems];
}
