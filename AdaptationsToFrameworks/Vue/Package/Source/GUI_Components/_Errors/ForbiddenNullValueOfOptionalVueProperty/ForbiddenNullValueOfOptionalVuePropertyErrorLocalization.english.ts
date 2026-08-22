import type ForbiddenNullValueOfOptionalVuePropertyError from "./ForbiddenNullValueOfOptionalVuePropertyError";
import { isNonEmptyString } from "@yamato-daiwa/es-extensions";


const forbiddenVuePropertyNullValueErrorLocalization__english: ForbiddenNullValueOfOptionalVuePropertyError.Localization = {
  defaultTitle: "Forbidden Null Value of Optional Vue Property Error",
  generateMessage(
    {
      targetPropertyName,
      targetComponentName
    }: ForbiddenNullValueOfOptionalVuePropertyError.Localization.DescriptionTemplateParameters
  ): string {
    return `Although the "${ targetPropertyName }" property is optional ` +
      (
        isNonEmptyString(targetComponentName) ?
            `for "${ targetComponentName }" component or its inheritor` :
            "(`name` not specified for target component)"
      ) +
      ", the `null` value is not allowed because it neither accessible from `validator` nor substitutable by `default`.";
  }
};


export default forbiddenVuePropertyNullValueErrorLocalization__english;
