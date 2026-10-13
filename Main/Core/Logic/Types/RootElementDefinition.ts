export type RootElementDefinition = Readonly<
  {
    rootElement: Readonly<{ selector: string; }>;
    contextElement?: ParentNode | Readonly<{ selector: string; }>;
  } |
  {
    rootElement: Element;
    contextElement?: never;
  }
>;
