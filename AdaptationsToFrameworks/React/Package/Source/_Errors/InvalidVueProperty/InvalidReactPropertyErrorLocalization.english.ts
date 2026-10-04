import type InvalidReactPropertyError from "./InvalidReactPropertyError";


export const invalidReactPropertyErrorLocalization__english: InvalidReactPropertyError.Localization = {
  defaultTitle: "Invalid Vue Property",
  generateDescription: (
    {
      propertyName,
      componentName,
      messageSpecificPart
    }: InvalidReactPropertyError.Localization.DescriptionTemplateVariables
  ): string =>
      `Invalid React property "${ propertyName }" of "${ componentName }" React component.\n${ messageSpecificPart }`
};


export default invalidReactPropertyErrorLocalization__english;
