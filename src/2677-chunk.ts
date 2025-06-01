type JSONValue =
   | null
   | boolean
   | number
   | string
   | JSONValue[]
   | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | Array<JSONValue>

function chunk(arr: Obj[], size: number): Obj[][] {
   const chunked: Obj[][] = []
   let index: number = 0
   for (let i = 0; i < arr.length; i++) {
      if (i !== 0 && i % size === 0) index++
      if (!chunked[index]) chunked[index] = []
      chunked[index].push(arr[i])
   }
   return chunked
}
