import vueComponentNotFoundErrorLocalization__english from "./VueComponentNotFoundErrorLocalization.english";


class VueComponentNotFoundError extends Error {

  public static readonly NAME: string = "VueComponentNotFoundError";

  public static localization: VueComponentNotFoundError.Localization = vueComponentNotFoundErrorLocalization__english;

  public name: string = VueComponentNotFoundError.NAME;

  public constructor(compoundParameter: VueComponentNotFoundError.ConstructorParameter) {

    super();

    this.message = "customMessage" in compoundParameter ?
        compoundParameter.customMessage :
        VueComponentNotFoundError.localization.generateDescription(compoundParameter);

  }

}


namespace VueComponentNotFoundError {

  export type ConstructorParameter =
      Localization.DescriptionTemplateVariables |
      Readonly<{ customMessage: string; }>;

  export type Localization = Readonly<{
    defaultTitle: string;
    generateDescription: (templateVariables: Localization.DescriptionTemplateVariables) => string;
  }>;

  export namespace Localization {
    export type DescriptionTemplateVariables = Readonly<{
      vueReferenceID: string;
      messageSpecificPart?: string;
    }>;
  }

}


export default VueComponentNotFoundError;
