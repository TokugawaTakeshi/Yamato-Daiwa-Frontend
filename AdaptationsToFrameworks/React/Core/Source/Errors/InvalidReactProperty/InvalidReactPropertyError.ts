import invalidReactPropertyErrorLocalization__english from "./InvalidReactPropertyErrorLocalization.english";


class InvalidReactPropertyError extends Error {

  public static readonly NAME: string = "InvalidReactPropertyError";

  public static localization: InvalidReactPropertyError.Localization = invalidReactPropertyErrorLocalization__english;


  public constructor(compoundParameter: InvalidReactPropertyError.ConstructorParameter) {

    super();

    this.name = InvalidReactPropertyError.NAME;
    this.message = InvalidReactPropertyError.localization.generateDescription(compoundParameter);

  }

}


namespace InvalidReactPropertyError {

  export type ConstructorParameter = Localization.DescriptionTemplateVariables;

  export type Localization = Readonly<{
    defaultTitle: string;
    generateDescription: (templateVariables: Localization.DescriptionTemplateVariables) => string;
  }>;

  export namespace Localization {
    export type DescriptionTemplateVariables = Readonly<{
      componentName: string;
      propertyName: string;
      messageSpecificPart: string;
    }>;
  }

}


export default InvalidReactPropertyError;
