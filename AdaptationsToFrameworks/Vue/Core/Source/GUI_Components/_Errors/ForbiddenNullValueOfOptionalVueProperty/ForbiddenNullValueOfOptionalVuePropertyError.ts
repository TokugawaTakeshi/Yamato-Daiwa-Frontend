import forbiddenNullValueOfOptionalVuePropertyErrorLocalization__english from
    "./ForbiddenNullValueOfOptionalVuePropertyErrorLocalization.english";


class ForbiddenNullValueOfOptionalVuePropertyError extends Error {

  public static readonly NAME: string = "ForbiddenNullValueOfOptionalVuePropertyError";

  public static localization: ForbiddenNullValueOfOptionalVuePropertyError.Localization =
      forbiddenNullValueOfOptionalVuePropertyErrorLocalization__english;


  public constructor(constructorParameter: ForbiddenNullValueOfOptionalVuePropertyError.ConstructorParameter) {

    super();

    this.name = ForbiddenNullValueOfOptionalVuePropertyError.NAME;

    this.message = ForbiddenNullValueOfOptionalVuePropertyError.localization.generateMessage(constructorParameter);

  }

}


namespace ForbiddenNullValueOfOptionalVuePropertyError {

  export type ConstructorParameter = Localization.DescriptionTemplateParameters;

  export type Localization = Readonly<{
    defaultTitle: string;
    generateMessage: (
      templateParameters: Localization.DescriptionTemplateParameters
    ) => string;
  }>;

  export namespace Localization {
    export type DescriptionTemplateParameters = Readonly<{
      targetComponentName?: string;
      targetPropertyName: string;
    }>;
  }

}


export default ForbiddenNullValueOfOptionalVuePropertyError;
