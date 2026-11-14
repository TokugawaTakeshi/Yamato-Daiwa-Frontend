import {
  addLeftClickEventHandler,
  getExpectedToBeSingleDOM_Element,
  cloneDOM_Element
} from "@yamato-daiwa/es-extensions-browserjs";
import addOnLeftClickOutOfElementEventHandler from "./addOnLeftClickOutOfElementEventHandler";


/* [ Convention ] The field's names begins from "$" intended to be changed via setter for the reactivity. */
export default class LanguageDropDownList {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── DOM Access ───────────────────────────────────────────────────────────────────────────────────────────────── */
  protected static CURRENTLY_SELECTED_OPTION_CSS_CLASS_SELECTOR: string =
      ".LanguageDropDownList--YDF_DK-CurrentlySelectedOption";
  protected static LIST_BOX_ELEMENT_CSS_CLASS_SELECTOR: string =
      ".LanguageDropDownList--YDF_DK-ListBox";
  protected static FLAGS_IMAGE_HOLDING_TEMPLATE_ELEMENT_CSS_CLASS_SELECTOR: string =
      ".LanguageDropDownList--YDF_DK-FlagsImagesHolder";
  protected static readonly COUNTRY_FLAG_PLACEHOLDER_CSS_CLASS_SELECTOR: string =
      ".LanguageDropDownList--YDF_DK-CountryFlagPlaceholder";

  protected static readonly COUNTRY_FLAG_CSS_CLASS: string = "LanguageDropDownList--YDF_DK-CountryFlag";

  protected static readonly FLAG_IMAGE_ID_DATA_ATTRIBUTE_KEY: string = "data-target_image_id";


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── DOM Access ───────────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly rootElement: Element;
  protected readonly currentlySelectedOptionElement: Element;
  protected readonly listBoxElement: Element;

  /* ─── Must be Changed Only Via Setters ─────────────────────────────────────────────────────────────────────────── */
  /* eslint-disable no-underscore-dangle -- [ CONVENTION ]
   * The instance files begins from the underscore MUST be initialized via constructor and changed only via setters. */
  protected _isListBoxDisplaying: boolean = false;


  /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static pickBySelector(targetLanguageDropDownListSelector: string): LanguageDropDownList {
    return new LanguageDropDownList(targetLanguageDropDownListSelector);
  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(targetLanguageDropDownListSelector: string) {

    this.rootElement = getExpectedToBeSingleDOM_Element({ selector: targetLanguageDropDownListSelector });

    addOnLeftClickOutOfElementEventHandler({
      targetElement: this.rootElement,
      handler: this.onClickOutOfSelf.bind(this)
    });

    this.currentlySelectedOptionElement = getExpectedToBeSingleDOM_Element({
      selector: LanguageDropDownList.CURRENTLY_SELECTED_OPTION_CSS_CLASS_SELECTOR,
      context: this.rootElement
    });

    addLeftClickEventHandler({
      targetElement: this.currentlySelectedOptionElement,
      handler: this.onClickCurrentlySelectedView.bind(this),
      mustExpectExactlyOneMatchingWithSelector: true
    });

    this.listBoxElement = getExpectedToBeSingleDOM_Element({
      selector: LanguageDropDownList.LIST_BOX_ELEMENT_CSS_CLASS_SELECTOR,
      context: this.rootElement
    });

    this.prepareFlagsImages();

  }


  /* ━━━ Non-static protected methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Initialization ───────────────────────────────────────────────────────────────────────────────────────────── */
  protected prepareFlagsImages(): void {

    const flagsImagesHoldingTemplateElement: HTMLTemplateElement = getExpectedToBeSingleDOM_Element({
      selector: LanguageDropDownList.FLAGS_IMAGE_HOLDING_TEMPLATE_ELEMENT_CSS_CLASS_SELECTOR,
      context: this.rootElement,
      expectedDOM_ElementSubtype: HTMLTemplateElement
    });

    const flagsSVG_ImageElements: ReadonlyArray<SVGElement> =
        Array.from(flagsImagesHoldingTemplateElement.content.children).
        filter<SVGElement>((childElement: Element): childElement is SVGElement => childElement instanceof SVGElement);

    for (const flagSVG_ImageElement of flagsSVG_ImageElements) {

      flagSVG_ImageElement.classList.add(LanguageDropDownList.COUNTRY_FLAG_CSS_CLASS);

      const flagSVG_ImageHTML_ID: string = flagSVG_ImageElement.id;

      for (
        const [ index, flagPlaceholderElement ] of
            this.rootElement.querySelectorAll(
              `${ LanguageDropDownList.COUNTRY_FLAG_PLACEHOLDER_CSS_CLASS_SELECTOR }` +
                  `[${ LanguageDropDownList.FLAG_IMAGE_ID_DATA_ATTRIBUTE_KEY }=${ flagSVG_ImageHTML_ID }]`
            ).entries()
      ) {
        flagPlaceholderElement.replaceWith(
          index === 1 ?
              flagSVG_ImageElement :
              ((): Element => {

                const clonedFlagSVG_ImageElement: Element =
                    cloneDOM_Element({ targetElement: flagSVG_ImageElement, mustCopyAllChildren: true });

                clonedFlagSVG_ImageElement.removeAttribute("id");

                return clonedFlagSVG_ImageElement;

              })()

        );
      }

    }

    flagsImagesHoldingTemplateElement.remove();

  }


  /* ─── Events Handlers ──────────────────────────────────────────────────────────────────────────────────────────── */
  protected onClickCurrentlySelectedView(): void {
    this.$isListBoxDisplaying = true;
  }

  protected onClickOutOfSelf(): void {
    this.$isListBoxDisplaying = false;
  }


  /* ─── Reactivity ───────────────────────────────────────────────────────────────────────────────────────────────── */
  protected get $isListBoxDisplaying(): boolean {
    return this._isListBoxDisplaying;
  }

  protected set $isListBoxDisplaying(value: boolean) {

    if (value === this._isListBoxDisplaying) {
      return;
    }


    this._isListBoxDisplaying = value;
    this.listBoxElement.setAttribute("aria-expanded", String(value));
    this.listBoxElement.classList.toggle("LanguageDropDownList--YDF_DK-ListBox__Hidden");

  }

}
