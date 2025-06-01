function decimalToBinary(num: number): string {
  if (num === 0) return '0'
  let binary = ''
  while (num !== 0) {
    binary = (num % 2) + binary
    num = Math.trunc(num / 2)
  }
  return binary
}

console.log(decimalToBinary(999999999999999))