import type { NumberBoxLocalization } from "./NumberBoxLocalization";


export const numberBoxYDF_ComponentLocalization__english: NumberBoxLocalization = {
  buttons: {
    incrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `Increment value by ${ step }`
    },
    decrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `Decrement value by ${ step }`
    }
  }
};
