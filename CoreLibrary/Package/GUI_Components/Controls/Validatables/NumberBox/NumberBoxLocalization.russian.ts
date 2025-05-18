import type { NumberBoxLocalization } from "./NumberBoxLocalization";


export const numberBoxYDF_ComponentLocalization__english: NumberBoxLocalization = {
  buttons: {
    incrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `Увеличить значение на ${ step }`
    },
    decrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `Уменьшить значение на ${ step }`
    }
  }
};
