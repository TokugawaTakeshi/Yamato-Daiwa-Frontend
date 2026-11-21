import { BlockingLoadingOverlay } from "../../../../index";
import { LeftClickEventListener } from "@yamato-daiwa/es-extensions-browserjs";


LeftClickEventListener.createAndAssign({
  targetElement: { selector: "button", mustExpectExactlyOneMatchingWithSelector: true },
  handler(): void {
    BlockingLoadingOverlay.captureDOM_AndDisplay({
      selector: "#BLOCKING_LOADING_OVERLAY",
      customAccessibilityGuidance: "Custom accessibility guidance"
    });
  }
});
