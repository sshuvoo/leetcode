class ArrayWrapper {
   #arr: number[]
   constructor(nums: number[]) {
      this.#arr = nums
   }

   valueOf(): number {
      return this.#arr.reduce((prev, curr) => prev + curr, 0)
   }

   toString(): string {
      return `[${this.#arr.toString()}]`
   }
}