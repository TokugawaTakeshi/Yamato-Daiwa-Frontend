import type VueComponentImplementationHasNotBeenSetError from "./VueComponentImplementationHasNotBeenSet";


const VueComponentImplementationHasNotBeenSetErrorErrorEnglishLocalization:
    VueComponentImplementationHasNotBeenSetError.Localization =
{
  defaultTitle: "Invalid Vue properties combination",
  generateMessage(
      namedParameters: VueComponentImplementationHasNotBeenSetError.Localization.GenericDescriptionPartTemplateParameters
  ): string {
    return `The implementation of the Vue component '${ namedParameters.vueComponentName }' has not been set.\n` +
        `Set it with ${ namedParameters.vueComponentName }.setImplementation(Implementation).`;
  }
};


export default VueComponentImplementationHasNotBeenSetErrorErrorEnglishLocalization;
