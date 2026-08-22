import type InvalidVuePropertiesCombinationError from "./InvalidVuePropertiesCombinationError";


const InvalidVuePropertiesCombinationErrorEnglishLocalization: InvalidVuePropertiesCombinationError.Localization = {
  defaultTitle: "Invalid Vue properties combination",
  generateMessage(
    namedParameters: InvalidVuePropertiesCombinationError.Localization.GenericDescriptionPartTemplateParameters
  ): string {
    return `Invalid properties combination for Vue component '${ namedParameters.vueComponentName }'.\n` +
        `${ namedParameters.messageSpecificPart }`;
  }
};


export default InvalidVuePropertiesCombinationErrorEnglishLocalization;
