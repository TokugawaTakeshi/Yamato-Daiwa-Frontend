/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  type BlockingLoadingOverlayLocalization,
  BlockingLoadingOverlayYDF_GUI_ComponentLocalization__English
} from "@yamato-daiwa/frontend";

/* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import LoadingIndicator from "../Controls/LoadingIndicator/LoadingIndicatorLogic.vue";

/* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent
} from "vue-facing-decorator";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  ClassRequiredInitializationHasNotBeenExecutedError,
  ImproperUsageError,
  type ElementOfPseudoEnumeration,
  Logger,
  isNotNull,
  isNotUndefined
} from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


@VueComponentConfiguration({ name: BlockingLoadingOverlay.CSS_NAMESPACE })
class BlockingLoadingOverlay extends VueComponent {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly CSS_NAMESPACE: string = "BlockingLoadingOverlay--YDF";

  public static localization: BlockingLoadingOverlayLocalization =
      BlockingLoadingOverlayYDF_GUI_ComponentLocalization__English;


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ State ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected isDisplaying: boolean = false;

  protected accessibilityMessage: string = BlockingLoadingOverlay.localization.defaultAccessibilityGuidance;

  protected loadingIndicatorType: ElementOfPseudoEnumeration<LoadingIndicator.Types> =
      LoadingIndicator.Types.variableWidthArcSpinner;


  /* ━━━ Instance Management ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static selfSingleInstance: BlockingLoadingOverlay | null = null;

  protected static getSelfSingleInstance(): BlockingLoadingOverlay {
    return this.selfSingleInstance ??
        ((): never => {
          Logger.throwErrorWithFormattedMessage({
            errorInstance: new ClassRequiredInitializationHasNotBeenExecutedError({
              customMessage: "Unable to use \"BlockingLoadingOverlay\" because it has not been mounted."
            }),
            title: ClassRequiredInitializationHasNotBeenExecutedError.localization.defaultTitle,
            occurrenceLocation: "BlockingLoadingOverlay.getSelfSingleInstance()"
          });
        })();
  }


  /* ━━━ Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Public Interface ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static display(
    {
      customAccessibilityGuidance
    }: Readonly<{
      customAccessibilityGuidance?: string;
    }> =
        {}
  ): void {

    const selfSingleInstance: BlockingLoadingOverlay = BlockingLoadingOverlay.getSelfSingleInstance();

    if (isNotUndefined(customAccessibilityGuidance)) {
      selfSingleInstance.accessibilityMessage = customAccessibilityGuidance;
    }

    selfSingleInstance.isDisplaying = true;

  }

  public static hide(): void {
    BlockingLoadingOverlay.getSelfSingleInstance().isDisplaying = false;
  }


  /* ┅┅┅ Lifecycle Hooks ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected mounted(): void {

    if (isNotNull(BlockingLoadingOverlay.selfSingleInstance)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new ImproperUsageError(
          "BlockingLoadingOverlay component has been attempted to mount for the multiple times while intended to be " +
            "used once per page."
        ),
        title: ImproperUsageError.localization.defaultTitle,
        occurrenceLocation: "BlockingLoadingOverlay.mounted()"
      });
    }

    BlockingLoadingOverlay.selfSingleInstance = this;

  }

  protected beforeUnmount(): void {
    BlockingLoadingOverlay.selfSingleInstance = null;
  }


  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(
    inheritedComponentClass: typeof BlockingLoadingOverlay
  ): typeof BlockingLoadingOverlay {
    return Object.defineProperties(
      inheritedComponentClass,
      {
        CSS_NAMESPACE: { value: BlockingLoadingOverlay.CSS_NAMESPACE },
        localization: { value: BlockingLoadingOverlay.localization },
        display: { value: BlockingLoadingOverlay.display },
        hide: { value: BlockingLoadingOverlay.hide }
      }
    );
  }

}


namespace BlockingLoadingOverlay {

  export type Options = Readonly<{
    accessibilityMessage: string;
    loadingIndicatorType?: LoadingIndicator.Types;
  }>;

}


export default BlockingLoadingOverlay;
