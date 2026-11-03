import type InputtedValueValidation from "../../InputtedValueValidation";
import allowedCharactersInputtedValueValidationRuleLocalization__english from
    "./AllowedCharactersInputtedValueValidationRuleLocalization.english";
import {
  splitString,
  Logger,
  InvalidParameterValueError,
  lowercaseLatinCharacters,
  uppercaseLatinCharacters,
  stringifiedDigits
} from "@yamato-daiwa/es-extensions";


class AllowedCharactersInputtedValueValidationRule implements InputtedValueValidation.Rule<string> {

  public static localization: AllowedCharactersInputtedValueValidationRule.Localization =
      allowedCharactersInputtedValueValidationRuleLocalization__english;

  public readonly mustFinishValidationIfValueIsInvalid: boolean;

  private readonly allowedCharacters: ReadonlyArray<string>;
  private readonly errorMessageBuilder: AllowedCharactersInputtedValueValidationRule.ErrorMessage.Builder;


  public constructor(
    compoundParameter:
        InputtedValueValidation.Rule.ConstructorParameter &
        Readonly<{
          allowedCharacters: Readonly<{
            latinLowercase?: boolean;
            latinUppercase?: boolean;
            digits?: boolean;
            other?: ReadonlyArray<string>;
          }>;
          errorMessageBuilder?: AllowedCharactersInputtedValueValidationRule.ErrorMessage.Builder;
          localization?: AllowedCharactersInputtedValueValidationRule.Localization;
        }>
  ) {

    this.mustFinishValidationIfValueIsInvalid = compoundParameter.mustFinishValidationIfValueIsInvalid ?? false;

    if (
      compoundParameter.allowedCharacters.latinLowercase !== true &&
          compoundParameter.allowedCharacters.latinUppercase !== true &&
          compoundParameter.allowedCharacters.digits !== true &&
          (compoundParameter.allowedCharacters.other ?? []).length === 0
    ) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "compoundParameter",
          messageSpecificPart: "No characters has been allowed."
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "AllowedCharactersInputtedValueValidationRule.constructor(compoundParameter)"
      });
    }

    this.allowedCharacters = [
      ...compoundParameter.allowedCharacters.latinLowercase === true ? lowercaseLatinCharacters : [],
      ...compoundParameter.allowedCharacters.latinUppercase === true ? uppercaseLatinCharacters : [],
      ...compoundParameter.allowedCharacters.digits === true ? stringifiedDigits : [],
      ...compoundParameter.allowedCharacters.other ?? []
    ];

    this.errorMessageBuilder =
        compoundParameter.errorMessageBuilder ??
            compoundParameter.localization?.errorMessageBuilder ??
            AllowedCharactersInputtedValueValidationRule.localization.errorMessageBuilder;

  }

  public check(rawValue: string): InputtedValueValidation.Rule.CheckingResult {

    const inputtedDisallowedCharacters: Set<string> = new Set<string>(
      splitString(rawValue, "").filter(
        (character: string): boolean => !this.allowedCharacters.includes(character)
      )
    );

    const isValid: boolean = inputtedDisallowedCharacters.size === 0;

    return isValid ?
        { isValid: true } :
        {
          isValid: false,
          errorMessage: this.errorMessageBuilder({
            inputtedDisallowedCharacters: Array.from(inputtedDisallowedCharacters),
            rawValue
          })
        };

  }

}


namespace AllowedCharactersInputtedValueValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{
      inputtedDisallowedCharacters: ReadonlyArray<string>;
      rawValue: string;
    }>;

  }

}


export default AllowedCharactersInputtedValueValidationRule;
