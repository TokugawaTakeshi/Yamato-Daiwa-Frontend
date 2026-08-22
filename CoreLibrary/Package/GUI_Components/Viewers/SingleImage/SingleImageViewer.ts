import { LeftClickEventListener, getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";
import { isNotUndefined } from "@yamato-daiwa/es-extensions";


export default class SingleImageViewer {

  protected static readonly ROOT_ELEMENT_SELECTOR: string = ".SingleImageViewer--YDF";

  protected static readonly FULL_SCREEN_VIEW_ACTIVATING_BUTTON_ELEMENT_SELECTOR: string =
      ".SingleImageViewer--YDF-Button__FullScreenViewActivating";
  protected static readonly FULL_SCREEN_VIEW_DEACTIVATING_BUTTON_ELEMENT_SELECTOR: string =
      ".SingleImageViewer--YDF-Button__FullScreenViewDeactivating";
  protected static readonly ZOOMING_IN__BUTTON_ELEMENT_SELECTOR: string = ".SingleImageViewer--YDF-Button__ZoomingIn";
  protected static readonly ZOOMING_OUT__BUTTON_ELEMENT_SELECTOR: string = ".SingleImageViewer--YDF-Button__ZoomingOut";
  protected static readonly WIDTH_FITTING__BUTTON_ELEMENT_SELECTOR: string = ".SingleImageViewer--YDF-Button__WidthFitting";
  protected static readonly HEIGHT_FITTING__BUTTON_ELEMENT_SELECTOR: string = ".SingleImageViewer--YDF-Button__HeightFitting";
  protected static readonly FULL_FITTING__BUTTON_ELEMENT_SELECTOR: string = ".SingleImageViewer--YDF-Button__FullFitting";

  protected static readonly MODAL_VIEW_ELEMENT_SELECTOR: string = ".SingleImageViewer--YDF-ModalView";
  protected static readonly MODAL_VIEW_HIDDEN_STATE_CSS_MODIFIER_CLASS: string = "SingleImageViewer--YDF-ModalView__HiddenState";

  protected static readonly IMAGE_IN_MODAL_ELEMENT_SELECTOR: string = ".SingleImageViewer--YDF-ModalView-Image";

  protected static HAS_FULL_SCREEN_VIEW__DATA_ATTRIBUTE_KEY: string = "has_full_screen_view__ydf";

  protected static readonly MAXIMAL_ZOOMING_RATIO: number = 4;
  protected static readonly MINIMAL_ZOOMING_RATIO: number = 0.25;
  protected static readonly ZOOMING_RATIO_STEP: number = 0.25;

  protected readonly rootElement: Element;
  protected readonly modalViewElement: Element;
  protected readonly imageInModalElement: HTMLImageElement;

  protected readonly isAlbumOrientation: boolean;

  protected $currentZoomingRatio: number = 0;


  /* ━━━ Public methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static initializeAllInstances(): Array<SingleImageViewer> {
    return Array.from(document.querySelectorAll<HTMLElement>(SingleImageViewer.ROOT_ELEMENT_SELECTOR)).
        filter(
          (componentRootElement: HTMLElement): boolean =>
              isNotUndefined(componentRootElement.dataset[SingleImageViewer.HAS_FULL_SCREEN_VIEW__DATA_ATTRIBUTE_KEY])
        ).
        map(
          (componentRootElement: Element): SingleImageViewer =>
              SingleImageViewer.initializeSingleInstance(componentRootElement)
        );
  }

  public static initializeSingleInstance(componentRootElement: Element): SingleImageViewer {
    return new SingleImageViewer(componentRootElement);
  }


  /* === Constructor ================================================================================================ */
  protected constructor(componentRootElement: Element) {

    this.rootElement = componentRootElement;

    this.modalViewElement = getExpectedToBeSingleDOM_Element({
      selector: SingleImageViewer.MODAL_VIEW_ELEMENT_SELECTOR,
      contextElement: this.rootElement
    });

    this.imageInModalElement = getExpectedToBeSingleDOM_Element({
      selector: SingleImageViewer.IMAGE_IN_MODAL_ELEMENT_SELECTOR,
      contextElement: this.rootElement,
      expectedDOM_ElementSubtype: HTMLImageElement
    });

    this.isAlbumOrientation = this.imageInModalElement.naturalWidth >= this.imageInModalElement.naturalHeight;

    this.currentZoomingRatio = 1;

    LeftClickEventListener.createAndAssign({
      targetElement: getExpectedToBeSingleDOM_Element({
        selector: SingleImageViewer.FULL_SCREEN_VIEW_ACTIVATING_BUTTON_ELEMENT_SELECTOR,
        contextElement: this.rootElement
      }),
      handler: this.onClickFullScreenViewActivatingButton.bind(this)
    });

    LeftClickEventListener.createAndAssign({
      targetElement: getExpectedToBeSingleDOM_Element({
        selector: SingleImageViewer.FULL_SCREEN_VIEW_DEACTIVATING_BUTTON_ELEMENT_SELECTOR,
        contextElement: this.rootElement
      }),
      handler: this.onClickFullScreenViewDeactivatingButton.bind(this)
    });

    LeftClickEventListener.createAndAssign({
      targetElement: getExpectedToBeSingleDOM_Element({
        selector: SingleImageViewer.ZOOMING_IN__BUTTON_ELEMENT_SELECTOR,
        contextElement: this.rootElement
      }),
      handler: this.onClickZoomingInButton.bind(this)
    });

    LeftClickEventListener.createAndAssign({
      targetElement: getExpectedToBeSingleDOM_Element({
        selector: SingleImageViewer.ZOOMING_OUT__BUTTON_ELEMENT_SELECTOR,
        contextElement: this.rootElement
      }),
      handler: this.onClickZoomingOutButton.bind(this)
    });

    LeftClickEventListener.createAndAssign({
      targetElement: getExpectedToBeSingleDOM_Element({
        selector: SingleImageViewer.WIDTH_FITTING__BUTTON_ELEMENT_SELECTOR,
        contextElement: this.rootElement
      }),
      handler: this.onClickWidthFittingButton.bind(this)
    });

    LeftClickEventListener.createAndAssign({
      targetElement: getExpectedToBeSingleDOM_Element({
        selector: SingleImageViewer.HEIGHT_FITTING__BUTTON_ELEMENT_SELECTOR,
        contextElement: this.rootElement
      }),
      handler: this.onClickHeightFittingButton.bind(this)
    });

    LeftClickEventListener.createAndAssign({
      targetElement: getExpectedToBeSingleDOM_Element({
        selector: SingleImageViewer.FULL_FITTING__BUTTON_ELEMENT_SELECTOR,
        contextElement: this.rootElement
      }),
      handler: this.onClickFullFittingButton.bind(this)
    });

  }


  /* === Reactive =================================================================================================== */
  protected get currentZoomingRatio(): number {
    return this.$currentZoomingRatio;
  }

  protected set currentZoomingRatio(newZoomingRatio: number) {

    this.$currentZoomingRatio = newZoomingRatio;

    this.imageInModalElement.style.maxWidth = "none";
    this.imageInModalElement.style.maxHeight = "none";

    if (this.isAlbumOrientation) {

      this.imageInModalElement.style.width = `${ 100 * this.$currentZoomingRatio }%`;
      this.imageInModalElement.style.height = "auto";

    } else {

      this.imageInModalElement.style.width = "auto";
      this.imageInModalElement.style.height = `${ 100 * this.$currentZoomingRatio }%`;

    }
  }


  /* === Protected methods ========================================================================================== */
  /* --- Events handling -------------------------------------------------------------------------------------------- */
  protected onClickFullScreenViewActivatingButton(): void {
    this.modalViewElement.classList.remove(SingleImageViewer.MODAL_VIEW_HIDDEN_STATE_CSS_MODIFIER_CLASS);
  }

  protected onClickFullScreenViewDeactivatingButton(): void {
    this.modalViewElement.classList.add(SingleImageViewer.MODAL_VIEW_HIDDEN_STATE_CSS_MODIFIER_CLASS);
    this.currentZoomingRatio = 1;
  }

  protected onClickZoomingInButton(): void {
    if (this.currentZoomingRatio < SingleImageViewer.MAXIMAL_ZOOMING_RATIO) {
      this.currentZoomingRatio = this.currentZoomingRatio + SingleImageViewer.ZOOMING_RATIO_STEP;
    }
  }

  protected onClickZoomingOutButton(): void {
    if (this.currentZoomingRatio > SingleImageViewer.MINIMAL_ZOOMING_RATIO) {
      this.currentZoomingRatio = this.currentZoomingRatio - SingleImageViewer.ZOOMING_RATIO_STEP;
    }
  }

  protected onClickWidthFittingButton(): void {
    this.imageInModalElement.style.width = "100%";
    this.imageInModalElement.style.height = "auto";
    this.imageInModalElement.style.maxWidth = "none";
    this.imageInModalElement.style.maxHeight = "none";
  }

  protected onClickHeightFittingButton(): void {
    this.imageInModalElement.style.width = "auto";
    this.imageInModalElement.style.height = "100%";
    this.imageInModalElement.style.maxWidth = "none";
    this.imageInModalElement.style.maxHeight = "none";
  }

  protected onClickFullFittingButton(): void {
    if (this.isAlbumOrientation) {
      this.imageInModalElement.style.width = "100%";
      this.imageInModalElement.style.height = "auto";
      this.imageInModalElement.style.maxHeight = "100%";
    } else {
      this.imageInModalElement.style.height = "100%";
      this.imageInModalElement.style.width = "auto";
      this.imageInModalElement.style.maxWidth = "100%";
    }
  }

}
