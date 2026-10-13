import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";
import {
  Logger,
  ClassRequiredInitializationHasNotBeenExecutedError,
  isNotUndefined,
  isNull
} from "@yamato-daiwa/es-extensions";


export default abstract class BlockingLoadingOverlay {

  protected static rootElement: HTMLElement | null = null;
  protected static accessibilityGuidanceElement: Element;
  protected static initialAccessibilityGuidance: string;


  public static captureDOM_ButNotDisplayYet({ selector }: Readonly<{ selector: string; }>): void {
    BlockingLoadingOverlay.initializeDOM(selector);
  }

  public static captureDOM_AndDisplay(
    {
      selector,
      customAccessibilityGuidance
    }: Readonly<{
      selector: string;
      customAccessibilityGuidance?: string;
    }>
  ): void {

    if (isNull(BlockingLoadingOverlay.rootElement)) {
      BlockingLoadingOverlay.initializeDOM(selector);
    }

    BlockingLoadingOverlay.displayCapturedOne({ customAccessibilityGuidance });

  }

  public static displayCapturedOne(
    {
      customAccessibilityGuidance
    }: Readonly<{
      customAccessibilityGuidance?: string;
    }> =
        {}
  ): void {

    const rootElement: HTMLElement = BlockingLoadingOverlay.getExpectedToBeInitializedRootElement();

    if (isNotUndefined(customAccessibilityGuidance)) {
      BlockingLoadingOverlay.accessibilityGuidanceElement.textContent = customAccessibilityGuidance;
    }

    rootElement.hidden = false;

  }

  public static hideButNotUnmount(): void {
    BlockingLoadingOverlay.getExpectedToBeInitializedRootElement().hidden = true;
    BlockingLoadingOverlay.accessibilityGuidanceElement.textContent = BlockingLoadingOverlay.initialAccessibilityGuidance;
  }


  protected static getExpectedToBeInitializedRootElement(): HTMLElement {
    return BlockingLoadingOverlay.rootElement ??
        ((): never => {
          Logger.throwErrorWithFormattedMessage({
            errorInstance: new ClassRequiredInitializationHasNotBeenExecutedError({
              customMessage:
                  "\"BlockingLoadingOverlay\" need to capture the rendered (invisible is fine) DOM before be displayed. " +
                  "Invoke \"captureDOM_ButDoNotDisplayYet\" method first if you don't need to display the blocking " +
                    "loading overlay immediately."
            }),
            title: ClassRequiredInitializationHasNotBeenExecutedError.localization.defaultTitle,
            occurrenceLocation: "BlockingLoadingOverlay.getExpectedToBeInitializedRootElement()"
          });
        })();
  }

  protected static initializeDOM(selector: string): void {

    BlockingLoadingOverlay.rootElement =
        getExpectedToBeSingleDOM_Element({ selector, expectedDOM_ElementSubtype: HTMLElement });

    BlockingLoadingOverlay.accessibilityGuidanceElement =
      getExpectedToBeSingleDOM_Element({
        selector: "p",
        contextElement: BlockingLoadingOverlay.rootElement
      });

    BlockingLoadingOverlay.initialAccessibilityGuidance =
        BlockingLoadingOverlay.accessibilityGuidanceElement.textContent;

  }

}
