export type TextBoxDOM_AccessResources =

    Readonly<{

      rootElement: Readonly<{

        CSS_NAMESPACE_CLASS: string;
        SELECTOR_BY_CSS_NAMESPACE_CLASS: string;

        stateDependentCSS_Classes: Readonly<{
          validInputState: string;
          invalidInputState: string;
        }>;

        dataset: Readonly<{
          [
            key in
                "instanceID" |
                "autoResizingForMultilineMode"
          ]: Readonly<{
            DATESET_KEY: string;
            DATA_ATTRIBUTE_KEY: string;
          }>
        }>;

      }>;

      inputOrTextArea: Readonly<{
        DATA_ATTRIBUTE_KEY: string;
        INTERNALLY_UNIQUE_SELECTOR: string;
      }>;

      passwordDisplayingToggle: Readonly<{

        DATA_ATTRIBUTE_KEY: string;
        INTERNALLY_UNIQUE_SELECTOR: string;

        icons: Readonly<{
          [
            key in
                "passwordDisplayingState" |
                "passwordHiddenState"
          ]: Readonly<{
            DATA_ATTRIBUTE_KEY: string;
            INTERNALLY_UNIQUE_SELECTOR: string;
          }>
        }>;

      }>;

      valueCopyingButton: Readonly<{
        DATA_ATTRIBUTE_KEY: string;
        INTERNALLY_UNIQUE_SELECTOR: string;
      }>;

    }>;


export const TextBoxDOM_AccessResources: TextBoxDOM_AccessResources = {

  rootElement: {

    CSS_NAMESPACE_CLASS: "TextBox--YDF",
    get SELECTOR_BY_CSS_NAMESPACE_CLASS(): string { return `.${ this.CSS_NAMESPACE_CLASS }`; },

    stateDependentCSS_Classes: {
      validInputState: "TextBox--YDF__ValidInputState",
      invalidInputState: "TextBox--YDF__InvalidInputState"
    },

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

  inputOrTextArea: {
    DATA_ATTRIBUTE_KEY: "data-el-ita",
    get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
  },

  passwordDisplayingToggle: {

    DATA_ATTRIBUTE_KEY: "data-el-pdt",
    get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; },

    icons: {

      passwordDisplayingState: {
        DATA_ATTRIBUTE_KEY: "data-el-pdt-i_d",
        get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
      },

      passwordHiddenState: {
        DATA_ATTRIBUTE_KEY: "data-el-pdt-i_h",
        get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
      }

    }

  },

  valueCopyingButton: {
    DATA_ATTRIBUTE_KEY: "data-el-vcb",
    get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
  }

};


export default TextBoxDOM_AccessResources;
