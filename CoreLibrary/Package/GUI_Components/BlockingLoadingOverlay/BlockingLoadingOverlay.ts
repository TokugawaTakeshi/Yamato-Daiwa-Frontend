import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";
import {
  isNull,
  ClassRequiredInitializationHasNotBeenExecutedError,
  Logger
} from "@yamato-daiwa/es-extensions";


export default abstract class BlockingLoadingOverlay {

  protected static rootElement: HTMLElement | null = null;


  public static captureDOM_ButNotDisplayYet(selector: string): void {
    BlockingLoadingOverlay.rootElement = getExpectedToBeSingleDOM_Element({
      selector, expectedDOM_ElementSubtype: HTMLElement
    });
  }

  public static captureDOM_AndDisplay(selector: string): void {
    (
      BlockingLoadingOverlay.rootElement ??
      (
        BlockingLoadingOverlay.rootElement =
            getExpectedToBeSingleDOM_Element({ selector, expectedDOM_ElementSubtype: HTMLElement })
      )
    ).hidden = false;
  }

  public static displayCapturedOne(): void {
    BlockingLoadingOverlay.getExpectedToBeInitializedRootElement().hidden = false;
  }

  public static hideButNotUnmount(): void {
    BlockingLoadingOverlay.getExpectedToBeInitializedRootElement().hidden = true;
  }


  protected static getExpectedToBeInitializedRootElement(): HTMLElement {

    if (isNull(BlockingLoadingOverlay.rootElement)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new ClassRequiredInitializationHasNotBeenExecutedError({
          customMessage:
              "\"BlockingLoadingOverlay\" need to capture the rendered (invisible is fine) DOM before be displayed. " +
              "Invoke \"captureDOM_ButDoNotDisplayYet\" method firs if you don't need to display the blocking loading " +
                "overlay immediately."
        }),
        title: ClassRequiredInitializationHasNotBeenExecutedError.localization.defaultTitle,
        occurrenceLocation: "BlockingLoadingOverlay.getExpectedToBeInitializedRootElement()"
      });
    }


    return BlockingLoadingOverlay.rootElement;

  }

}
