import { InputtedValueValidation, NumberBox } from "../../../../../index";
import { isNull } from "@yamato-daiwa/es-extensions";


NumberBox.pickOneBySelector({
  rootElement: { selector: "#SAMPLE" },
  scenario: NumberBox.Scenarios.alwaysNonEmptyValue,
  validityHighlightingActivationMode: NumberBox.ValidityHighlightingActivationModes.onFocusOut,
  validation: new
    class extends InputtedValueValidation {
      public constructor() {
        super({
          isInputRequired: true,
          omittedValueChecker: isNull
        });
      }
  }()
});
