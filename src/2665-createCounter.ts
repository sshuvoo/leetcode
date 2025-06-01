type Counter = {
   increment: () => number;
   decrement: () => number;
   reset: () => number;
};

function createCounter(init: number): Counter {
   let initial = init;
   return {
      increment: () => ++initial,
      decrement: () => --initial,
      reset: () => {
         initial = init;
         return initial;
      },
   };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
