type JSONValue =
   | null
   | boolean
   | number
   | string
   | JSONValue[]
   | { [key: string]: JSONValue }
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
   let isCallable = true
   return function (...args) {
      if (isCallable) {
         isCallable = false
         return fn(...args)
      }
   }
}

let fn = (a, b, c) => a + b + c
let onceFn = once(fn)

console.log(onceFn(1, 2, 3)) // 6
console.log(onceFn(2, 3, 6)) // returns undefined without calling fn
