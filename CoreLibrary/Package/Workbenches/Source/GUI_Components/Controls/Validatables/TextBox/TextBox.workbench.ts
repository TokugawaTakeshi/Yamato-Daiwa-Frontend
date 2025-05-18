import TextBox from "../../../../../../GUI_Components/Controls/Validatables/TextBox/TextBox";
import InputtedValueValidation from "../../../../../../GUI_Components/Controls/_Validation/InputtedValueValidation";
import { isEmptyString } from "@yamato-daiwa/es-extensions";


class SimpleValidation extends InputtedValueValidation {
  public constructor() {
    super({
      isInputRequired: true,
      omittedValueChecker: isEmptyString
    });
  }
}


TextBox.pickOne({
  rootElement: { selector: "#TEXT_BOX-1" },
  validityHighlightingActivationMode: TextBox.ValidityHighlightingActivationModes.onFocusOut,
  validation: new SimpleValidation()
});
