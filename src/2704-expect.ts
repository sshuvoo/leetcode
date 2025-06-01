type ToBeOrNotToBe = {
   toBe: (val: any) => boolean;
   notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
   return {
      toBe: (v) => {
         if (val === v) return true;
         else throw "Not Equal";
      },
      notToBe: (v) => {
         if (val === v) return true;
         else throw "Equal";
      },
   };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
