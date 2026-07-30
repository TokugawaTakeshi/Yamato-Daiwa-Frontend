import { LeftClickEventListener } from "@yamato-daiwa/es-extensions-browserjs";


class HamburgerMenuButton {

  /* ━━━ Static fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected static readonly ROOT_ELEMENT_NAMESPACE_CSS_CLASS: string = ".HamburgerMenuButton--YDF";


  /* ━━━ Instance fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public readonly rootElement!: Element;


  /* ━━━ Static fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static initializeAll(initialingParameter: HamburgerMenuButton.InitialingParameter): Array<HamburgerMenuButton> {
    return Array.from(document.querySelectorAll(HamburgerMenuButton.ROOT_ELEMENT_NAMESPACE_CSS_CLASS)).
        map((rootElement: Element): HamburgerMenuButton => new HamburgerMenuButton({ ...initialingParameter, rootElement }));
  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(initialingParameter: HamburgerMenuButton.InitialingParameter & Readonly<{ rootElement: Element; }>) {

    this.rootElement = initialingParameter.rootElement;

    LeftClickEventListener.createAndAssign({
      targetElement: this.rootElement,
      handler: initialingParameter.onClickEventHandler
    });

  }

}


namespace HamburgerMenuButton {

  export type InitialingParameter = Readonly<{
    onClickEventHandler: () => void;
  }>;

}


export default HamburgerMenuButton;
