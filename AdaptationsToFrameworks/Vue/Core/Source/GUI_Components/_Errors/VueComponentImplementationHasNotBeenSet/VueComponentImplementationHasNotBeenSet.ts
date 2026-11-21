import VueComponentImplementationHasNotBeenSetErrorEnglishLocalization from
    "./VueComponentImplementationHasNotBeenSetErrorLocalization.english";


class VueComponentImplementationHasNotBeenSetError extends Error {

  public static readonly NAME: string = "VueComponentImplementationHasNotBeenSetError";
  public static localization: VueComponentImplementationHasNotBeenSetError.Localization =
      VueComponentImplementationHasNotBeenSetErrorEnglishLocalization;

  public constructor(namedParameters: VueComponentImplementationHasNotBeenSetError.ConstructorNamedParameters) {

    super();

    this.name = VueComponentImplementationHasNotBeenSetError.NAME;
    this.message = VueComponentImplementationHasNotBeenSetError.localization.generateMessage(namedParameters);
  }

}


namespace VueComponentImplementationHasNotBeenSetError {

  export type ConstructorNamedParameters = Localization.GenericDescriptionPartTemplateParameters;

  export type Localization = Readonly<{
    defaultTitle: string;
    generateMessage: (
      parametersObject: Localization.GenericDescriptionPartTemplateParameters
    ) => string;
  }>;

  export namespace Localization {
    export type GenericDescriptionPartTemplateParameters = Readonly<{ vueComponentName: string; }>;
  }
}


export default VueComponentImplementationHasNotBeenSetError;
