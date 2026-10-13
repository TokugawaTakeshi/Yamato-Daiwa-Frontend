import type NumberBox from "./NumberBox";


export const NumberBoxYDF_GUI_ComponentLocalization__English: NumberBox.Localization = {
  buttons: {
    incrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `Increment value by ${ step }`
    },
    decrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `Decrement value by ${ step }`
    }
  }
};
