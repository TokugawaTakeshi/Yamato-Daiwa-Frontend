import CollapsingAnimation from "../../../../Animations/CollapsingAnimation";
import ExpandingAnimation from "../../../../Animations/ExpandingAnimation";
import { LeftClickEventListener } from "@yamato-daiwa/es-extensions-browserjs";


LeftClickEventListener.createAndAssign({
  targetElement: {
    selector: "#BUTTON-1-1",
    mustExpectExactlyOneMatchingWithSelector: true
  },
  handler(): void {

    CollapsingAnimation.animate({
      duration__seconds: 5,
      targetElement: { selector: "#Sample1-1-1" },
      mustReturnPromise: false
    });

    CollapsingAnimation.animate({
      duration__seconds: 5,
      targetElement: { selector: "#Sample1-1-2" },
      mustReturnPromise: false
    });

  }
});

LeftClickEventListener.createAndAssign({
  targetElement: {
    selector: "#BUTTON-1-2",
    mustExpectExactlyOneMatchingWithSelector: true
  },
  handler(): void {

    ExpandingAnimation.animate({
      duration__seconds: 5,
      targetElement: { selector: "#Sample1-1-1" },
      mustReturnPromise: false
    });

    ExpandingAnimation.animate({
      duration__seconds: 5,
      targetElement: { selector: "#Sample1-1-2" },
      mustReturnPromise: false
    });

  }
});


LeftClickEventListener.createAndAssign({
  targetElement: {
    selector: "#BUTTON-2-1",
    mustExpectExactlyOneMatchingWithSelector: true
  },
  handler(): void {

    CollapsingAnimation.animate({
      duration__seconds: 5,
      targetElement: { selector: "#Sample1-2-1" },
      mustReturnPromise: false
    });

    CollapsingAnimation.animate({
      duration__seconds: 5,
      targetElement: { selector: "#Sample1-2-2" },
      mustReturnPromise: false
    });

  }
});

LeftClickEventListener.createAndAssign({
  targetElement: {
    selector: "#BUTTON-2-2",
    mustExpectExactlyOneMatchingWithSelector: true
  },
  handler(): void {

    ExpandingAnimation.animate({
      duration__seconds: 5,
      targetElement: { selector: "#Sample1-2-1" },
      mustReturnPromise: false
    });

    ExpandingAnimation.animate({
      duration__seconds: 5,
      targetElement: { selector: "#Sample1-2-2" },
      mustReturnPromise: false
    });

  }
});
