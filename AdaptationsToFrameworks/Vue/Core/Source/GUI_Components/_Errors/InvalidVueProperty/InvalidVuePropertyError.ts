import invalidVuePropertyErrorLocalization__english from "./InvalidVuePropertyErrorLocalization.english";


class InvalidVuePropertyError extends Error {

  public static readonly NAME: string = "InvalidVuePropertyError";

  public static localization: InvalidVuePropertyError.Localization = invalidVuePropertyErrorLocalization__english;


  public constructor(compoundParameter: InvalidVuePropertyError.ConstructorParameter) {

    super();

    this.name = InvalidVuePropertyError.NAME;
    this.message = InvalidVuePropertyError.localization.generateDescription(compoundParameter);

  }

}


namespace InvalidVuePropertyError {

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


export default InvalidVuePropertyError;
