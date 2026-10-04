import { Snackbar } from "@yamato-daiwa/frontend";
import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";
import ClipboardAccess from "clipboard";


let cachedSnackbarTextTemplate: string | undefined;

new ClipboardAccess(".DummyImagesURIsGallery button").on(
  "success", (event: ClipboardAccess.Event): void => {

    Snackbar.mountAndDisplayForAWhile({

      messageTextOrHTML:
          (
            cachedSnackbarTextTemplate ??
            (
              cachedSnackbarTextTemplate =
                  getExpectedToBeSingleDOM_Element({
                    selector: ".DummyImagesURIsGallery",
                    expectedDOM_ElementSubtype: HTMLElement
                  }).
                      dataset.
                      snackbar_text ??
                          ""
            )
          ).replace("{{ expression }}", event.text),

      decorativeVariation: Snackbar.DecorativeVariations.success

    });

  }
);
