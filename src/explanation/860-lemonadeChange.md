# Approach:

## Tracking Bills:

### We maintain a reserve array where:

-  reserve[0] keeps track of the number of \$5 bills.

-  reserve[1] keeps track of the number of \$10 bills.

### Iterating Through Customers:

-  If a customer pays with a \$5 bill, no change is needed, so we simply increment reserve[0].

-  If a customer pays with a \$10 bill, we need to provide \$5 as change. We check if we have a \$5 bill available in reserve[0]. If we do, we decrement it and increment reserve[1] (since we now have an additional \$10 bill). If we don't have a \$5 bill, we return false.

-  If a customer pays with a \$20 bill, we prefer to give change using one \$10 and one \$5 bill (to minimize the impact on our \$5 reserves). If this is possible, we decrement both reserve[0] and reserve[1]. If we don't have a \$10 bill but we have at least three \$5 bills, we give change using three \$5 bills by decrementing reserve[0] by 3. If neither option is possible, we return false.

### Final Check:

-  If we successfully provide change for all customers, we return true.

This approach ensures that we always try to give the largest denomination change first, which helps preserve smaller bills for future customers.

# Solution TypeScript

```ts
function lemonadeChange(bills: number[]): boolean {
   const reserve = [0, 0]; // [\$5, \$10]
   for (let i = 0; i < bills.length; i++) {
      if (bills[i] === 5) reserve[0]++;
      else if (bills[i] === 10) {
         if (reserve[0] >= 1) {
            reserve[0]--;
            reserve[1]++;
         } else return false;
      } else if (bills[i] === 20) {
         if (reserve[1] >= 1 && reserve[0] >= 1) {
            reserve[1]--;
            reserve[0]--;
         } else if (reserve[1] === 0 && reserve[0] >= 3) {
            reserve[0] = reserve[0] - 3;
         } else return false;
      }
   }
   return true;
}
```

# Final Words

If you're still struggling with this code, don't hesitate to reach out in the comments below. Your feedback and questions are always welcome.

If you found this solution helpful, I'd love to hear where you're tuning in from! Drop a comment sharing your country! I'm from Bangladesh.
