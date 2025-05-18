import type TextBox from "./TextBox";


const textBoxDOM_AccessResources: TextBox.DOM_AccessResources = {

  rootElement: {

    CSS_NAMESPACE_CLASS: "TextBox--YDF",
    get SELECTOR_BY_CSS_NAMESPACE_CLASS(): string { return `.${ this.CSS_NAMESPACE_CLASS }`; },

    dataset: {

      instanceID: {
        DATESET_KEY: "instance_id",
        get DATA_ATTRIBUTE_KEY(): string { return `data-${ this.DATESET_KEY }`; }
      },

      autoResizingForMultilineMode: {
        DATESET_KEY: "auto_resizing_for_multiline_mode",
        get DATA_ATTRIBUTE_KEY(): string { return `data-${ this.DATESET_KEY }`; }
      }

    }

  },

  inputOrTextAreaElement: {
    CSS_CLASS: "TextBox--YDF-InputOrTextAreaElement",
    get SELECTOR_BY_CSS_CLASS(): string { return `.${ this.CSS_CLASS }`; }
  }

};


export default textBoxDOM_AccessResources;
