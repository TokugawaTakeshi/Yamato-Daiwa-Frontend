export type PaginationLocalization = Readonly<{
  buttons: Readonly<{
    toFirstPage: Readonly<{ accessibilityGuidance: string; }>;
    toPreviousPage: Readonly<{ accessibilityGuidance: string; }>;
    toNextPage: Readonly<{ accessibilityGuidance: string; }>;
    toLastPage: Readonly<{ accessibilityGuidance: string; }>;
  }>;
}>;
