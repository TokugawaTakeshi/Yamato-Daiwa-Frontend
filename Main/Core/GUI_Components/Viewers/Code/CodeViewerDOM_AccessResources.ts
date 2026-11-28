type CodeViewerDOM_AccessResources = Readonly<{

  [
    keys in
        "tabsFlow" |
        "tabTemplate" |
        "tab" |
        "tabPanel"
  ]:

      Readonly<{
        DATA_ATTRIBUTE_KEY: string;
        INTERNALLY_UNIQUE_SELECTOR: string;
      }>;

}>;


const CodeViewerDOM_AccessResources: CodeViewerDOM_AccessResources = {

  tabsFlow: {
    DATA_ATTRIBUTE_KEY: "data-tf--ydf",
    get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
  },

  tabTemplate: {
    DATA_ATTRIBUTE_KEY: "data-tt--ydf",
    get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
  },

  tab: {
    DATA_ATTRIBUTE_KEY: "data-tb--ydf",
    get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
  },

  tabPanel: {
    DATA_ATTRIBUTE_KEY: "data-tp--ydf",
    get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
  }

};


export default CodeViewerDOM_AccessResources;
