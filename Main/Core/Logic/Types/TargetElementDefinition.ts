export type TargetElementDefinition = Readonly<
  {
    targetElement: Readonly<{ selector: string; }>;
    contextElement?: ParentNode | Readonly<{ selector: string; }>;
  } |
  {
    targetElement: Element;
    contextElement?: never;
  }
>;
