import { NumberBox } from "../../../../../../index";
import InputtedValueValidation from "../../../../../../GUI_Components/Controls/_Validation/InputtedValueValidation";
import { isNumber } from "@yamato-daiwa/es-extensions";
import ValidatableControl from "../../../../../../GUI_Components/Controls/_Validation/ValidatableControl";


NumberBox.initializeOne({
  rootElement: { selector: "#SAMPLE" },
  scenario: NumberBox.Scenarios.alwaysNonEmptyValue,
  validityHighlightingActivationMode: ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes.onFocusOut,
  validation: new
    class extends InputtedValueValidation<number> {
      public constructor() {
        super({
          isInputRequired: true,
          isValueOfSupportedType:
              (rawValue: unknown): rawValue is number => isNumber(rawValue, { mustConsiderNaN_AsNumber: false }),
          /* eslint-disable-next-line @typescript-eslint/no-unused-vars --
           * "typescript-eslint" plugin bug: the parameter cannot be removed because it need to be referred in the type
           *    guard definition.  */
          hasValueBeenOmitted: (_possiblyEmptyValue: number): _possiblyEmptyValue is number => true
        });
      }
  }()
});
