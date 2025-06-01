type JSONValue =
   | null
   | boolean
   | number
   | string
   | JSONValue[]
   | { [key: string]: JSONValue }

type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
   for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length - i; j++) {
         if (fn(arr[j - 1]) > fn(arr[j])) {
            const temp = arr[j - 1]
            arr[j - 1] = arr[j]
            arr[j] = temp
         }
      }
   }
   return arr
}
