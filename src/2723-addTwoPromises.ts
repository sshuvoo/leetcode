type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
   const arr = await Promise.all([promise1, promise2])
   return arr[0] + arr[1]
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
