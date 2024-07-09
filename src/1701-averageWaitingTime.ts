function averageWaitingTime(customers: number[][]): number {
   let totalWaitingTime: number = 0;
   let currentTime: number = 0;
   for (let i = 0; i < customers.length; i++) {
      const arrivalTime = customers[i][0];
      const cookTime = customers[i][1];
      if (currentTime >= arrivalTime) {
         totalWaitingTime += currentTime + cookTime - arrivalTime;
         currentTime += cookTime;
      } else {
         totalWaitingTime += cookTime;
         currentTime = arrivalTime + cookTime;
      }
   }
   return totalWaitingTime / customers.length;
}
