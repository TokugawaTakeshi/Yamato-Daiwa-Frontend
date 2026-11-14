export type AdmonitionBlockDOM_AccessResources = Readonly<{
  dismissingButton: Readonly<{
    DATA_ATTRIBUTE_KEY: string;
    INTERNALLY_UNIQUE_SELECTOR: string;
  }>;
}>;


export const AdmonitionBlockDOM_AccessResources: AdmonitionBlockDOM_AccessResources = {

  dismissingButton: {
    DATA_ATTRIBUTE_KEY: "data-db",
    get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
  }

};


export default AdmonitionBlockDOM_AccessResources;
