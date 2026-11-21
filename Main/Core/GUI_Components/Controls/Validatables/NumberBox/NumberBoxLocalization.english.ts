import type NumberBox from "./NumberBox.base";


export const NumberBoxLocalization__English: NumberBox.Localization = {
  buttons: {
    incrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `Increment value by ${ step }`
    },
    decrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `Decrement value by ${ step }`
    }
  }
};


export default NumberBoxLocalization__English;
