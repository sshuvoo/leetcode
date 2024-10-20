function uncommonFromSentences(s1: string, s2: string): string[] {
   const arr1 = s1.split(' ')
   const arr2 = s2.split(' ')
   for (let i = 0; i < arr1.length; i++) {
      const index = arr2.findIndex((word) => word === arr1[i])
      if (index !== -1) {
         arr2.slice(index, 1)
      }
   }
   for (let i = 0; i < arr2.length; i++) {
      const index = arr1.findIndex((word) => word === arr1[i])
      if (index !== -1) {
         arr2.splice(index, 1)
      }
   }
   return arr2
}

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'))
