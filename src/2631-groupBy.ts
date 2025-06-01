interface Array<T> {
   groupBy(fn: (item: T) => string): Record<string, T[]>
}

Array.prototype.groupBy = function (fn) {
   const group: Record<string, any> = {}
   for (let i = 0; i < this.length; i++) {
      if (!group[fn(this[i])]) group[fn(this[i])] = []
      group[fn(this[i])].push(this[i])
   }
   return group
}

console.log([1, 2, 3, 1].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}
