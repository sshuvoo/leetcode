# Solution TypeScript

```ts
function averageWaitingTime(customers: number[][]): number {
   // the total waiting time of all customers
   let totalWaitingTime = 0;
   // the current time as the chef works through the orders
   let currentTime = 0;

   // Loop through each customer in the array
   for (let i = 0; i < customers.length; i++) {
      const arrivalTime = customers[i][0];
      const cookTime = customers[i][1];

      // If the chef is already busy when the customer arrives
      if (currentTime >= arrivalTime) {
         // Update total waiting time
         totalWaitingTime += currentTime + cookTime - arrivalTime;
         // Update current time after finishing the order
         currentTime += cookTime;
      } else {
         // If the chef is idle when the customer arrives
         totalWaitingTime += cookTime;
         // Update current time to the time after finishing this order
         currentTime = arrivalTime + cookTime;
      }
   }
   return totalWaitingTime / customers.length;
}
```

# Explanation:

-  totalWaitingTime is initialized to 0 to keep track of the sum of waiting times for all customers.

-  currentTime is initialized to 0 to keep track of the chef's working time.

-  We iterate over each customer using a for loop.

-  For each customer, we get the arrival time (arrivalTime) and the time needed to prepare their order (cookTime).

Check Chef's Availability:

-  If the chef is busy when the customer arrives (currentTime >= arrivalTime), we:
   Add the waiting time for this customer to totalWaitingTime.

-  Update currentTime by adding the cook time.

-  If the chef is idle when the customer arrives (currentTime < arrivalTime), we:
   Add the cook time to totalWaitingTime (since the customer waits for the exact cook time).

-  Update currentTime to the time after finishing this order.

# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
