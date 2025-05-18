import type { NumberBoxLocalization } from "./NumberBoxLocalization";


export const numberBoxYDF_ComponentLocalization__english: NumberBoxLocalization = {
  buttons: {
    incrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `${ step }で増やす`
    },
    decrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `${ step }で減らす`
    }
  }
};
