import TextBox from "../../../../../../GUI_Components/Controls/Validatables/TextBox/TextBox";
import InputtedValueValidation from "../../../../../../GUI_Components/Controls/_Validation/InputtedValueValidation";
import ValidatableControl from "../../../../../../GUI_Components/Controls/_Validation/ValidatableControl";
import isStringEmpty from "../../../../../../GUI_Components/Controls/_Validation/OmittedValueCheckers/isStringEmpty";
import { isString } from "@yamato-daiwa/es-extensions";


class SimpleValidation extends InputtedValueValidation<string> {
  public constructor() {
    super({
      isValueOfSupportedType: isString,
      isInputRequired: true,
      hasValueBeenOmitted: isStringEmpty
    });
  }
}


TextBox.initializeOne({
  rootElement: { selector: "#TEXT_BOX-1" },
  validityHighlightingActivationMode:
      ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes.onFocusOut,
  validation: new SimpleValidation()
});
