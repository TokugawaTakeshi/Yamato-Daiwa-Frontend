export type AccordionDOM_AccessResources = Readonly<{

  rootElement: Readonly<{
    CSS_NAMESPACE_CLASS: string;
    SELECTOR_BY_CSS_NAMESPACE_CLASS: string;
  }>;

  button: Readonly<{
    DATA_ATTRIBUTE_KEY: string;
    INTERNALLY_UNIQUE_SELECTOR: string;
  }>;

  panel: Readonly<{
    DATA_ATTRIBUTE_KEY: string;
    INTERNALLY_UNIQUE_SELECTOR: string;
  }>;

}>;

export const AccordionDOM_AccessResources: AccordionDOM_AccessResources = {

  rootElement: {
    CSS_NAMESPACE_CLASS: "Accordion--YDF",
    get SELECTOR_BY_CSS_NAMESPACE_CLASS(): string { return `.${ this.CSS_NAMESPACE_CLASS }`; }
  },

  button: {
    DATA_ATTRIBUTE_KEY: "data-bt--ydf",
    get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
  },

  panel: {
    DATA_ATTRIBUTE_KEY: "data-pn--ydf",
    get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
  }

};

export default AccordionDOM_AccessResources;
