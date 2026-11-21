import type { NumberBox } from "@yamato-daiwa/frontend";


export const NumberBoxYDF_GUI_ComponentLocalization__Japanese: NumberBox.Localization = {
  buttons: {
    incrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `${ step }で増やす`
    },
    decrementing: {
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>): string => `${ step }で減らす`
    }
  }
};
