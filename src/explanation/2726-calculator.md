# Method Chaining

বিভিন্ন লাইব্রেরী ব্যবহার করার সময় আমরা প্রায়ই Method Chaining এর সুবিধা পেয়ে থাকি, উদাহরণ - mongoose ODM

```js
await Model.find().where().equals().limit().sort().select().exec()
```

এগুলো বানায় কিভাবে, well আমি একটা প্রবলেম solve করতে গিয়ে কিছুটা আইডিয়া পেয়েছি

```js
class Calculator {
   #result

   constructor(initialValue) {
      this.#result = initialValue || 0
   }

   add(value) {
      return this.#result + value
   }

   subtract(value) {
      return this.#result - value
   }
}

const myCalc = new Calculator()

myCalc.add(10) // 10

// আমরা এখানে যেটি করতে পারবো না
myCalc.add(10).subtract(5)
// কারন myCalc.add(10) একটা number return করে।
// আমরা number এর মেথড ব্যবহার করতে পারবো,
myCalc.add(10).toFixed(2) // works fine.
```

myCalc.add(10).subtract(5) এরকম হতে হলে myCalc.add(10) এই অংশটুকুকে অবশ্যই Class এর instance কে return করতে হবে। কারন instance এই আমরা method গুলা পাই। আর কোন class ভিতর সেই class এরই instance হলো this. যেই method এ চেইন সুবিধা লাগবে সেখান থেকে this return করলেই হবে।

```ts
class Calculator {
   #result

   constructor(initialValue) {
      this.#result = initialValue || 0
   }

   add(value) {
      this.#result += value
      return this
   }

   subtract(value) {
      this.#result -= value
      return this
   }

   multiply(value) {
      this.#result *= value
      return this
   }

   divide(value) {
      if (value === 0) throw new Error('Division by zero is not allowed')
      this.#result /= value
      return this
   }

   power(value) {
      this.#result = this.#result ** value
      return this
   }

   getResult() {
      return this.#result
   }
}

const calc = new Calculator()
calc.add(10).add(20).divide(15).multiply(50).getResult() // 100
```
