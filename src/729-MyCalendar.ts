class MyCalendar {
   stack: number[][]
   constructor() {
      this.stack = [] // [47, 50] [33, 41] 
   }

   book(start: number, end: number): boolean {
      const isBookable = this.stack.every(([s, e]) => e <= start || s > end)
      if (isBookable || this.stack.length === 0) {
         this.stack.push([start, end])
         return true
      }
      return false
   }
}

const myCalendar = new MyCalendar() // null
myCalendar.book(47, 50) //true  [47, 50]
myCalendar.book(33, 41) //true [10, 20]
myCalendar.book(39, 45) //false [20, 30]

// [[],[47,50],[33,41],[39,45],[33,42],[25,32],[26,35],[19,25],[3,8],[8,13],[18,27]]

// [null,true,true,false,false,true,false,true,true,true,false]
