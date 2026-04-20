import type Accordion from "./Accordion";


const AccordionYDF_GUI_ComponentDOM_AccessResources: Accordion.DOM_AccessResources = {

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


export default AccordionYDF_GUI_ComponentDOM_AccessResources;
