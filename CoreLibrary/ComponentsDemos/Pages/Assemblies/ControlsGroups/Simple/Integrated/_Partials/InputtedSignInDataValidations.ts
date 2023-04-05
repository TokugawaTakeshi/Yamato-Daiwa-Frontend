/* eslint-disable max-classes-per-file --
* This limitation is unsolicited for the namespaced classes, however there is no ESLint option allowing this case. */
import {
  InputtedValueValidation,
  MinimalCharactersCountInputtedValueValidationRule,
  MaximalCharactersCountInputtedValueValidationRule, AllowedCharactersInputtedValueValidationRule
} from "@yamato-daiwa/frontend";
import { isEmptyString } from "@yamato-daiwa/es-extensions";


namespace InputtedSigningInDataValidations {

  export class UserName extends InputtedValueValidation {

    public constructor() {
      super({
        isInputRequired: true,
        omittedValueChecker: isEmptyString,
        requiredValueIsMissingCustomValidationErrorMessage: "Please input the user name.",
        staticValidationRules: [
          new AllowedCharactersInputtedValueValidationRule({
            allowedCharacters: {
              latinLowercase: true,
              latinUppercase: true,
              digits: true,
              other: [ "-", "_" ]
            }
          }),
          new MinimalCharactersCountInputtedValueValidationRule({
            minimalCharactersCount: 2,
            mustFinishValidationIfValueIsInvalid: true
          }),
          new MaximalCharactersCountInputtedValueValidationRule({
            maximalCharactersCount: 16
          })
        ]
      });
    }

  }

  export class Password extends InputtedValueValidation {

    public constructor() {
      super({
        isInputRequired: true,
        omittedValueChecker: isEmptyString,
        requiredValueIsMissingCustomValidationErrorMessage: "Please input the password.",
        staticValidationRules: [
          new AllowedCharactersInputtedValueValidationRule({
            allowedCharacters: {
              latinLowercase: true,
              latinUppercase: true,
              digits: true,
              other: [
                "!",
                "@",
                "#",
                "$",
                "^",
                "*",
                "-",
                "_",
                "+",
                "=",
                "{",
                "}",
                "[",
                "]",
                "|",
                "\\",
                "/",
                ":",
                ";",
                "<",
                ">",
                ",",
                ".",
                "?"
              ]
            }
          }),
          new MinimalCharactersCountInputtedValueValidationRule({
            minimalCharactersCount: 8,
            mustFinishValidationIfValueIsInvalid: true
          }),
          new MaximalCharactersCountInputtedValueValidationRule({
            maximalCharactersCount: 32
          })
        ]
      });
    }

  }

}


export default InputtedSigningInDataValidations;
