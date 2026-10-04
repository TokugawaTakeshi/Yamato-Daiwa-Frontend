import type InvalidVuePropertyError from "./InvalidVuePropertyError";


export const invalidVuePropertyErrorLocalization__english: InvalidVuePropertyError.Localization = {
  defaultTitle: "Invalid Vue Property",
  generateDescription: (
    {
      propertyName,
      componentName,
      messageSpecificPart
    }: InvalidVuePropertyError.Localization.DescriptionTemplateVariables
  ): string => `Invalid Vue property "${ propertyName }"of "${ componentName }" Vue component.\n${ messageSpecificPart }`
};


export default invalidVuePropertyErrorLocalization__english;
