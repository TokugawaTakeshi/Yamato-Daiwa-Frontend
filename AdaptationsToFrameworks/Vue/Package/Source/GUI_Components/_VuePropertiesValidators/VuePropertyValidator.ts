import { Logger } from "@yamato-daiwa/es-extensions";
import InvalidVuePropertyError from "../_Errors/InvalidVueProperty/InvalidVuePropertyError";


type VuePropertyValidator = (value: Exclude<unknown, undefined>) => boolean;


namespace VuePropertyValidator {

  export function create(
    {
      checker,
      componentName,
      propertyName,
      messageSpecificPart
    }: Readonly<{
      checker: (targetVueProperty: Exclude<unknown, undefined>) => boolean;
      componentName: string;
      propertyName: string;
      messageSpecificPart: string;
    }>
  ): VuePropertyValidator {
    return (targetVueProperty: Exclude<unknown, undefined>): boolean => {

      if (!checker(targetVueProperty)) {

        Logger.logError({
          errorType: InvalidVuePropertyError.NAME,
          title: InvalidVuePropertyError.localization.defaultTitle,
          description: InvalidVuePropertyError.localization.generateDescription({
            componentName,
            propertyName,
            messageSpecificPart
          }),
          occurrenceLocation: "VuePropertyValidator"
        });

        return false;

      }


      return true;

    };
  }

}


export default VuePropertyValidator;
