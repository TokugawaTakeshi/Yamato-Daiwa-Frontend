export type NumberBoxLocalization = Readonly<{
  buttons: Readonly<{
    incrementing: Readonly<{
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>) => string;
    }>;
    decrementing: Readonly<{
      generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>) => string;
    }>;
  }>;
}>;
