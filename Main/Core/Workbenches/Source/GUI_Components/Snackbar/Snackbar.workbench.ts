import { Snackbar } from "../../../../index";
import { LeftClickEventListener } from "@yamato-daiwa/es-extensions-browserjs";


LeftClickEventListener.createAndAssign({
  targetElement: { selector: "#SNACKBAR_DISPLAYING_BUTTON", mustExpectExactlyOneMatchingWithSelector: true },
  handler(): void {
    Snackbar.mountAndDisplayForAWhile({
      messageTextOrHTML: "Working fine!",
      decorativeVariation: Snackbar.DecorativeVariations.success,
      position: Snackbar.Positions.topMiddle
    });
  }
});
