type Callback = (...args: any[]) => any
type Subscription = {
   unsubscribe: () => void
}

class EventEmitter {
   #subcribes = new Map<string, Callback[]>()
   subscribe(eventName: string, callback: Callback): Subscription {
      this.#subcribes.set(eventName, [
         ...(this.#subcribes.get(eventName) || []),
         callback,
      ])

      return {
         unsubscribe: () => {
            const filtered = this.#subcribes
               .get(eventName)
               ?.filter((cb) => cb !== callback)
            if (filtered) this.#subcribes.set(eventName, filtered)
         },
      }
   }

   emit(eventName: string, args: any[] = []): any[] {
      const callbacks = this.#subcribes.get(eventName)
      if (callbacks && callbacks.length > 0) {
         const output: any[] = []
         for (let i = 0; i < callbacks.length; i++) {
            output[i] = callbacks[i](...args)
         }
         return output
      }
      return []
   }
}
