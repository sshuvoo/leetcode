type F = (x: number) => number

function compose(functions: F[]): F {
   return function (x) {
      let result: number = x
      for (let i = functions.length - 1; i >= 0; i--) {
         result = functions[i](result)
      }
      return result
   }
}
