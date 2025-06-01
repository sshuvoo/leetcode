type JSONValue =
   | null
   | boolean
   | number
   | string
   | JSONValue[]
   | { [key: string]: JSONValue }
type ArrayType = { id: number } & Record<string, JSONValue>

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
   const mergedSet = new Map<number, ArrayType>()

   for (let i = 0; i < arr1.length; i++) {
      mergedSet.set(arr1[i].id, arr1[i])
   }

   for (let i = 0; i < arr2.length; i++) {
      if (mergedSet.has(arr2[i].id)) {
         mergedSet.set(arr2[i].id, { ...mergedSet.get(arr2[i].id), ...arr2[i] })
      } else mergedSet.set(arr2[i].id, arr2[i])
   }
   const mergedArr = Array.from(mergedSet.values())
   mergedArr.sort((a, b) => a.id - b.id)
   return mergedArr
}
