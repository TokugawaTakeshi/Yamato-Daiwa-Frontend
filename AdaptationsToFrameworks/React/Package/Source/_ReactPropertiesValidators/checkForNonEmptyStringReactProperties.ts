import InvalidReactPropertyError from "../_Errors/InvalidVueProperty/InvalidReactPropertyError";
import { isUndefined } from "@yamato-daiwa/es-extensions";


export default function checkForNonEmptyStringReactProperties(
  {
    componentName,
    propertiesData
  }: Readonly<{
    componentName: string;
    propertiesData: ReadonlyArray<{
      name: string;
      value: string | undefined;
      isRequiredOrHasDefaultValue: boolean;
    }>;
  }>
): void {

  for (const { name: propertyName, value: propertyValue, isRequiredOrHasDefaultValue: isPropertyRequired } of propertiesData) {

    if (isUndefined(propertyValue)) {

      if (isPropertyRequired) {
        throw new InvalidReactPropertyError({
          componentName,
          propertyName,
          messageSpecificPart: "This property is required while omitted or has explicit `undefined` value."
        });
      }

      return;

    }


    if (propertyValue.length === 0) {
      throw new InvalidReactPropertyError({
        componentName,
        propertyName,
        messageSpecificPart:
            isPropertyRequired ?
                "Must be the non-empty string." :
                "Must be either non-empty string or undefined (explicit or omitted)."
      });
    }

  }

}
