import { Logger } from "@yamato-daiwa/es-extensions";


export default function validateVuePropertyAndLogIfInvalid<PreCheckedValueType>(
  {
    checker,
    message
  }: Readonly<{
    checker: (targetVueProperty: PreCheckedValueType) => boolean;
    message: string;
  }>
): (targetVueProperty: PreCheckedValueType) => boolean {

  return (targetVueProperty: PreCheckedValueType): boolean => {

    if (!checker(targetVueProperty)) {

      Logger.logError({
        errorType: "VuePropertyCustomValidationFailedError",
        title: "Vue Property Custom Validation Failed",
        description: message,
        occurrenceLocation: "validateVuePropertyAndLogIfInvalid(compoundParameter)"
      });

      return false;

    }


    return true;

  };

}
