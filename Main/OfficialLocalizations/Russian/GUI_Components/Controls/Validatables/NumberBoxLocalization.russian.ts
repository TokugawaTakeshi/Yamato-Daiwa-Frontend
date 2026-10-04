import type { NumberBox } from "@yamato-daiwa/frontend";


export const NumberBoxYDF_GUI_ComponentLocalization__Russian: NumberBox.Localization = {
  buttons: {
    incrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `Увеличить значение на ${ step }`
    },
    decrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `Уменьшить значение на ${ step }`
    }
  }
};
