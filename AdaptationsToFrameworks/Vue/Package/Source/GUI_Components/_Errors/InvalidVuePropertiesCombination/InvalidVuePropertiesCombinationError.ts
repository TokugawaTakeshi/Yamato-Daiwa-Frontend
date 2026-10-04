import InvalidVuePropertiesCombinationErrorEnglishLocalization from "./InvalidVuePropertiesCombinationErrorLocalization.english";


class InvalidVuePropertiesCombinationError extends Error {

  public static readonly NAME: string = "InvalidVuePropertiesCombinationError";
  public static localization: InvalidVuePropertiesCombinationError.Localization =
      InvalidVuePropertiesCombinationErrorEnglishLocalization;

  public constructor(namedParameters: InvalidVuePropertiesCombinationError.ConstructorNamedParameters) {

    super();

    this.name = InvalidVuePropertiesCombinationError.NAME;
    this.message = InvalidVuePropertiesCombinationError.localization.generateMessage(namedParameters);
  }
}


namespace InvalidVuePropertiesCombinationError {

  export type ConstructorNamedParameters = Localization.GenericDescriptionPartTemplateParameters;

  export type Localization = Readonly<{
    defaultTitle: string;
    generateMessage: (
      compoundParameter: Localization.GenericDescriptionPartTemplateParameters
    ) => string;
  }>;

  export namespace Localization {
    export type GenericDescriptionPartTemplateParameters = Readonly<{
      vueComponentName: string;
      messageSpecificPart?: string;
    }>;
  }
}


export default InvalidVuePropertiesCombinationError;
