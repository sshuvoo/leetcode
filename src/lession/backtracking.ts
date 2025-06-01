const sets: number[][] = []
let i = 0

function subSets(arr: number[], index: number) {
  if (i === arr.length) {
    for (const element of sets) {
      console.log(element)
    }
  }
  if (sets[i]) {
    sets[i].push(arr[i])
  } else sets.push([arr[i]])
  subSets(arr, index + 1)
  sets[i].pop()
  subSets(arr, index + 1)
}

subSets([1, 2, 3], i)

console.log(sets)
