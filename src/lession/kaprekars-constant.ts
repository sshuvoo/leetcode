function toSort(num: number, isDesc: boolean = false): number {
  const digits = []
  while (num > 0) {
    digits.push(num % 10)
    num = Math.floor(num / 10)
  }

  digits.sort((a, b) => (isDesc ? b - a : a - b))

  let result = 0
  let i = 1
  while (digits.length > 0) {
    result += digits.pop()! * i
    i *= 10
  }
  return result
}

function kaprekarsConst(num: number, count: number = 1): void {
  const asce = toSort(num)
  const desc = toSort(num, true)
  const subtract = Math.abs(asce - desc)
  console.log(`${count}: ${desc} - ${asce} = ${subtract}`)
  if (subtract == num) return
  kaprekarsConst(subtract, count + 1)
}

// To test any number i.e 4867
kaprekarsConst(4867)
