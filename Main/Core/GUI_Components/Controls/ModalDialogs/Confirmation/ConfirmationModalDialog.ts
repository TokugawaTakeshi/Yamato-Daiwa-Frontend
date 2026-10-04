/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import ModalDialog from "../Common/ModalDialog";
import Button from "../../Buttons/Plain/Button";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  DelegatedLeftClickEventListener,
  getExpectedToBeSingleDOM_Element,
  EventPropagationTypes
} from "@yamato-daiwa/es-extensions-browserjs";
import {
  ClassRequiredInitializationHasNotBeenExecutedError,
  isNotNull,
  isNotUndefined,
  Logger,
  UnexpectedEventError
} from "@yamato-daiwa/es-extensions";


class ConfirmationModalDialog extends ModalDialog {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static selfSoleInstance: ConfirmationModalDialog | null = null;

  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected static readonly QUESTION_TEXT_ELEMENT_SELECTOR: string = ".ConfirmationModalDialog--YDF-Question";
  protected static readonly CONFIRMATION_BUTTON_SELECTOR: string = ".ConfirmationModalDialog--YDF-ConfirmationButton";
  protected static readonly CANCELLATION_BUTTON_SELECTOR: string = ".ConfirmationModalDialog--YDF-CancellingButton";


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── DOM ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected questionTextElement: Element;
  protected confirmationButton: Button;
  protected cancellationButton: Button;


  /* ─── Event Listeners ──────────────────────────────────────────────────────────────────────────────────────────── */
  protected onConfirmationButtonClickingEventExternalHandler?: () => unknown;
  protected onCancellationButtonClickingEventExternalHandler?: () => unknown;
  protected onClickBodyEventListener: DelegatedLeftClickEventListener | null = null;


  /* ─── Reactivity ───────────────────────────────────────────────────────────────────────────────────────────────── */
  /* eslint-disable no-underscore-dangle -- [ CONVENTION ]
   * The instance fields begins from the underscore MUST be changed only via setters or constructor. */
  private _question: string = "";

  public get $question(): string {
    return this._question;
  }

  public set $question(value: string) {
    this._question = value;
    this.questionTextElement.textContent = this._question;
  }
  /* eslint-enable no-underscore-dangle */


  /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static captureDOM_ButNotDisplayYet(selector: string): ConfirmationModalDialog {
    return ConfirmationModalDialog.selfSoleInstance = new ConfirmationModalDialog(selector);
  }

  public static checkHasBeenCaptured(
    {
      mustThrowError,
      errorMessageSpecificPart
    }: Readonly<{
      mustThrowError: boolean;
      errorMessageSpecificPart?: string;
    }>
  ): void {

    if (isNotNull(ConfirmationModalDialog.selfSoleInstance)) {
      return;
    }


    const errorMessage: string = [
      "Contrary to expectations, the DOM for \"ConfirmationModalDialog\" component has not been captured.",
      ...isNotUndefined(errorMessageSpecificPart) ? [ errorMessageSpecificPart ] : []
    ].join(" ");

    if (mustThrowError) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new UnexpectedEventError(errorMessage),
        title: UnexpectedEventError.localization.defaultTitle,
        occurrenceLocation: "ConfirmationModalDialog.checkHasBeenCaptured(compoundParameter)"
      });
    }


    Logger.logError({
      errorType: UnexpectedEventError.NAME,
      title: UnexpectedEventError.localization.defaultTitle,
      description: errorMessage,
      occurrenceLocation: "ConfirmationModalDialog.checkHasBeenCaptured(compoundParameter)"
    });

  }

  public static displayCapturedOne(
    sessionSettings: ConfirmationModalDialog.SessionSettings
  ): void {
    ConfirmationModalDialog.getExpectedToBeInitializedSelfSoleInstance().display(sessionSettings);
  }

  public static dismiss(): void {
    ConfirmationModalDialog.getExpectedToBeInitializedSelfSoleInstance().dismiss();
  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(rootElementSelector: string) {

    super(rootElementSelector);

    this.questionTextElement = getExpectedToBeSingleDOM_Element({
      selector: ConfirmationModalDialog.QUESTION_TEXT_ELEMENT_SELECTOR,
      contextElement: this.rootElement
    });

    this.confirmationButton = Button.initializeOne({
      targetElement: { selector: ConfirmationModalDialog.CONFIRMATION_BUTTON_SELECTOR },
      contextElement: this.rootElement
    });

    this.cancellationButton = Button.initializeOne({
      targetElement: { selector: ConfirmationModalDialog.CANCELLATION_BUTTON_SELECTOR },
      contextElement: this.rootElement
    });

  }


  /* ━━━ Private Instance Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected display(
    {
      title,
      question,
      confirmationButtonLabel,
      cancellationButtonLabel,
      onConfirmationEventHandler,
      onCancellationEventHandler
    }: ConfirmationModalDialog.SessionSettings
  ): void {

    super.$title = title;
    this.$question = question;

    this.confirmationButton.$label = confirmationButtonLabel ?? null;
    this.cancellationButton.$label = cancellationButtonLabel ?? null;

    this.onConfirmationButtonClickingEventExternalHandler = onConfirmationEventHandler;
    this.onCancellationButtonClickingEventExternalHandler = onCancellationEventHandler;

    this.onClickBodyEventListener = new DelegatedLeftClickEventListener({
      delegatingContainer: this.rootElement,
      eventPropagation: EventPropagationTypes.capturing,
      handlersBySelectors: {
        [ConfirmationModalDialog.CONFIRMATION_BUTTON_SELECTOR]: this.onConfirmationButtonClicking.bind(this),
        [ConfirmationModalDialog.CANCELLATION_BUTTON_SELECTOR]: this.onCancellationButtonClicking.bind(this)
      }
    });

    super.$isDisplaying = true;

  }

  protected onConfirmationButtonClicking(): void {
    this.onConfirmationButtonClickingEventExternalHandler?.();
  }

  protected onCancellationButtonClicking(): void {
    this.onCancellationButtonClickingEventExternalHandler?.();
    this.dismiss();
  }

  protected dismiss(): void {

    super.dismiss();

    this.$question = "";

    this.onClickBodyEventListener?.utilize();
    this.onClickBodyEventListener = null;

  }


  /* ━━━ Private Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static getExpectedToBeInitializedSelfSoleInstance(): ConfirmationModalDialog {
    return ConfirmationModalDialog.selfSoleInstance ??
        Logger.throwErrorWithFormattedMessage({
          errorInstance: new ClassRequiredInitializationHasNotBeenExecutedError({
            className: "ConfirmationModalDialog",
            initializingMethodName: "captureDOM_ButNotDisplayYet"
          }),
          title: ClassRequiredInitializationHasNotBeenExecutedError.localization.defaultTitle,
          occurrenceLocation: "ConfirmationModalDialog.getExpectedToBeInitializedSelfSoleInstance()"
        });
  }

}


namespace ConfirmationModalDialog {

  export type SessionSettings = Readonly<{
    title: string;
    question: string;
    confirmationButtonLabel?: string;
    cancellationButtonLabel?: string;
    onConfirmationEventHandler: () => unknown;
    onCancellationEventHandler?: () => unknown;
  }>;

}


export default ConfirmationModalDialog;
