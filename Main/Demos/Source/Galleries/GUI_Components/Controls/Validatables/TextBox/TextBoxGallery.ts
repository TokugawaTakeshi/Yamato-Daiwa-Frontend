/* eslint-disable max-classes-per-file -- Alloc additional class for the validation.  */

import { InputtedValueValidation, ValidatableControl, TextBox, isStringEmpty } from "@yamato-daiwa/frontend";
import { isString } from "@yamato-daiwa/es-extensions";


class SimpleValidation extends InputtedValueValidation<string> {
  public constructor() {
    super({
      isValueOfSupportedType: isString,
      hasValueBeenOmitted: isStringEmpty,
      isInputRequired: false
    });
  }
}


export default abstract class TextBoxGallery {

  public static initialize(): void {

    TextBox.initializeMultiple<false>({
      rootElements: { selector: TextBox.ROOT_ELEMENT_SELECTOR },
      contextElement: { selector: "#MULTILINE_TEXT_BOXES-THEMES_SHOWCASE" },
      validation: new SimpleValidation(),
      validityHighlightingActivationMode:
          ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes.onFocusOut
    });

    TextBox.initializeMultiple<false>({
      rootElements: { selector: TextBox.ROOT_ELEMENT_SELECTOR },
      contextElement: { selector: "#TEXT_BOXES_WITH_VALUES_COPYING_BUTTONS-THEMES_SHOWCASE" },
      validation: new SimpleValidation(),
      validityHighlightingActivationMode:
          ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes.onFocusOut
    });

    TextBox.initializeMultiple<false>({
      rootElements: { selector: TextBox.ROOT_ELEMENT_SELECTOR },
      contextElement: { selector: "#TEXT_BOXES_WITH_PASSWORD_DISPLAYING_TOGGLE-THEMES_SHOWCASE" },
      validation: new SimpleValidation(),
      validityHighlightingActivationMode:
          ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes.onFocusOut
    });

  }

}
