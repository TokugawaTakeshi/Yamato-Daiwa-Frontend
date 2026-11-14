import type ${TARGET}InputtedValueValidationRule from "./${TARGET}InputtedValueValidationRule";


// TODO To lower camel case
const ${TARGET}InputtedValueValidationRuleLocalization__russian:
    ${TARGET}InputtedValueValidationRule.Localization =
    {
      errorMessageBuilder: (): string =>
          "The inputted email address is impossible. " +
          "It must the mistyping. " +
          "Please correct the inputted value. "
    };


export default ${TARGET}InputtedValueValidationRuleLocalization__russian;
