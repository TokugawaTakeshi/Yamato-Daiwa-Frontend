/* eslint-disable @typescript-eslint/member-ordering --
 * The members of this class has been organized semantically. */

/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentDynamicPartsHTML from "./DateTimePicker.parts.pug";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import CompoundControlShell from "../CompoundControlShell/CompoundControlShell";


/* ─── Validations ────────────────────────────────────────────────────────────────────────────────────────────────── */
import ValidatableControl from "../_Validation/ValidatableControl";
import type InputtedValueValidation from "../_Validation/InputtedValueValidation";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  CalendarBuilder,
  type DateWithoutTime,
  DaysOfWeekNames,
  getMonthNameByNumber,
  getNextMonthNumber,
  getPreviousMonthNumber,
  getYearOfPreviousMonth,
  getYearOfNextMonth,
  isEmptyString,
  isUndefined,
  isNull,
  isNotUndefined,
  isNotNull,
  MonthsNames,
  RawObjectDataProcessor,
  convertPotentialStringToIntegerIfPossible,
  getMonthNumberByName
} from "@yamato-daiwa/es-extensions";
import {
  cloneDOM_Element,
  createDOM_ElementFromHTML_Code,
  extractAndValidateDatasetFromDOM_Element,
  getExpectedToBeSingleDOM_Element,
  LeftClickEventListener,
  DelegatedLeftClickEventListener
} from "@yamato-daiwa/es-extensions-browserjs";
import setHTML_Attributes from "../../../Logic/UtilsIncubator/DOM/setHTML_Attributes";
import {
  MONTHS_COUNT_IN_YEAR,
  MAXIMAL_DAYS_IN_MONTH,
  DAYS_COUNT_IN_WEEK
} from "fundamental-constants";


class DateTimePicker<
  ValidValue extends DateTimePicker.SupportedValidatablePayloadValuesTypes,
  InvalidValue extends DateTimePicker.SupportedValidatablePayloadValuesTypes,
  Validation extends InputtedValueValidation
> implements ValidatableControl {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static readonly YEARS_COUNT_AT_LEFT_OR_RIGHT_OF_CENTER_ONE_IN_MATRIX: number = 12;


  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected static readonly INVALID_VALUE_STATE_CSS_CLASS: string = "DateTimePicker--YDF__InvalidValueState";

  protected static readonly NATIVE_INPUT_ELEMENT_SELECTOR: string = ".DateTimePicker--YDF-NativeInputElement";
  protected static readonly INDICATOR_BUTTON_SELECTOR: string = ".DateTimePicker--YDF-IndicatorButton";
  protected static readonly INDICATOR_BUTTON_LABEL_SELECTOR: string = ".DateTimePicker--YDF-IndicatorButton-Label";

  protected static readonly DAYS_MATRIX_SELECTOR: string = ".DateTimePicker--YDF-DaysMatrix";
  protected static readonly MONTHS_MATRIX_SELECTOR: string = ".DateTimePicker--YDF-MonthsMatrix";
  protected static readonly YEARS_MATRIX_SELECTOR: string = ".DateTimePicker--YDF-YearsMatrix";


  /* ┄┄┄ Date Selecting ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  protected static readonly DATE_SELECTING_BUTTON_SELECTOR: string = ".DateTimePicker--YDF-SelectDayButton";
  protected static readonly DATE_SELECTING_BUTTON_SELECTED_STATE_CSS_CLASS: string =
      "DateTimePicker--YDF-SelectDayButton__SelectedState";
  protected static readonly DATE_SELECTING_BUTTON__TODAY_STATE_CSS_CLASS: string =
      "DateTimePicker--YDF-SelectDayButton__Today";

  /* ┄┄┄ Month Selecting ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  protected static readonly MONTHS_MATRIX_DISPLAYING_BUTTON_SELECTOR: string = "[data-button-months_matrix_displaying]";
  protected static readonly PREVIOUS_MONTH_BUTTON_SELECTOR: string = "[data-button-previous_month]";
  protected static readonly NEXT_MONTH_BUTTON_SELECTOR: string = "[data-button-next_month]";

  protected static readonly MONTH_SELECTING_BUTTON_SELECTOR: string = ".DateTimePicker--YDF-MonthSelectingButton";
  protected static readonly MONTH_SELECTING_BUTTON__SELECTED_MONTH_STATE_CSS_CLASS: string =
      ".DateTimePicker--YDF-MonthSelectingButton__SelectedState";


  /* ┄┄┄ Year Selecting ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  protected static readonly YEAR_MATRIX_DISPLAYING_BUTTON_SELECTOR: string = "[data-button-years_matrix_displaying]";
  protected static readonly YEAR_SELECTING_BUTTON_SELECTOR: string = ".DateTimePicker--YDF-SelectYearButton";
  protected static readonly YEAR_SELECTING_BUTTON__SELECTED_YEAR_CSS_CLASS: string =
      "DateTimePicker--YDF-SelectYearButton__SelectedState";
  protected static readonly YEAR_SELECTING_BUTTON__CURRENT_YEAR_CSS_CLASS: string =
      "DateTimePicker--YDF-SelectYearButton__CurrentState";


  /* ┄┄┄ Dialog ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  protected static readonly DIALOG_MOUNTING_POINT_SELECTOR: string = ".DateTimePicker--YDF-DialogMountingPoint";


  /* --- Initialization on Demand ----------------------------------------------------------------------------------- */
  protected static dialog: Element | null = null;


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public readonly payload: ValidatableControl.Payload<ValidValue, InvalidValue, Validation>;

  protected dateSetter: DateTimePicker.DateSetter<ValidValue, InvalidValue>;
  protected displayingValueFormatter: DateTimePicker.DisplayingValueFormatter<ValidValue, InvalidValue>;

  protected mustDisplayErrorsMessagesImmideatlyIfAny: boolean = false;


  /* ─── DOM ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly shellComponent: CompoundControlShell;
  protected readonly nativeInputElement: HTMLInputElement;

  protected readonly indicatorButton: HTMLButtonElement;
  protected readonly indicatorButtonLabelElement: Element;

  protected readonly dialog: Element;

  protected readonly daysMatrix: HTMLElement;
  protected readonly monthsMatrix: HTMLElement;
  protected readonly yearsMatrix: HTMLElement;

  protected readonly daySelectingButtons: ReadonlyArray<HTMLElement>;
  protected readonly monthSelectingButtons: ReadonlyArray<HTMLElement>;
  protected readonly yearSelectingButtons: ReadonlyArray<HTMLElement>;

  protected readonly dialogMountingPoint: Element;


  /* ─── Events ───────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly onIndicatorButtonClickedEventListener: LeftClickEventListener;
  protected readonly dialogClickEventListener: DelegatedLeftClickEventListener;


  /* ━━━ Reactivity ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected mustSuspendReactivity: boolean = false;

  /* ─── Validation Error Messages Highlighting ───────────────────────────────────────────────────────────────────── */
  /* eslint-disable no-underscore-dangle -- [ CONVENTION ]
   * The instance fields begins from the underscore MUST be changed only via setters or constructor. */
  protected _mustHighlightInvalidInputIfAnyValidationErrorsMessages: boolean = false;

  protected get $mustHighlightInvalidInputIfAnyValidationErrorsMessages(): boolean {
    return this._mustHighlightInvalidInputIfAnyValidationErrorsMessages;
  }

  protected set $mustHighlightInvalidInputIfAnyValidationErrorsMessages(value: boolean) {

    if (value === this._mustHighlightInvalidInputIfAnyValidationErrorsMessages) {
      return;
    }


    this._mustHighlightInvalidInputIfAnyValidationErrorsMessages = value;

    if (this._mustHighlightInvalidInputIfAnyValidationErrorsMessages) {

      this.shellComponent.$mustDisplayErrorsMessagesIfAny = true;

      if (this.payload.isInvalid) {
        this.shellComponent.rootElement.classList.add(DateTimePicker.INVALID_VALUE_STATE_CSS_CLASS);
      }

      return;

    }


    this.shellComponent.rootElement.classList.remove(DateTimePicker.INVALID_VALUE_STATE_CSS_CLASS);
    this.shellComponent.$mustDisplayErrorsMessagesIfAny = false;

  }


  /* ─── Currently Displaying Year ────────────────────────────────────────────────────────────────────────────────── */
  protected _currentlyDisplayingYear!: number;

  public get $currentlyDisplayingYear(): number {
    return this._currentlyDisplayingYear;
  }

  public set $currentlyDisplayingYear(value: number) {

    if (value === this._currentlyDisplayingYear) {
      return;
    }


    this._currentlyDisplayingYear = value;

    if (this.mustSuspendReactivity) {
      return;
    }


    this.initializeOrUpdateYearsMatrix();

  }


  /* ─── Currently Displaying Month ───────────────────────────────────────────────────────────────────────────────── */
  protected _currentlyDisplayingMonth__numerationFrom1!: number;

  public get $currentlyDisplayingMonth__numerationFrom1(): number {
    return this._currentlyDisplayingMonth__numerationFrom1;
  }

  public set $currentlyDisplayingMonth__numerationFrom1(value: number) {

    if (value === this._currentlyDisplayingMonth__numerationFrom1) {
      return;
    }


    this._currentlyDisplayingMonth__numerationFrom1 = value;

    if (this.mustSuspendReactivity) {
      return;
    }

    this.initializeOrUpdateDaysMatrix();

  }


  /* ─── Selecting ────────────────────────────────────────────────────────────────────────────────────────────────── */
  /* [ Approach ]
   * It is unknown inside this component what `this.payload.value` exactly is so the internal management is required. */

  /* --- Year ------------------------------------------------------------------------------------------------------- */
  protected _selectedYear: number | null = null;

  public get $selectedYear(): number | null {
    return this._selectedYear;
  }

  public set $selectedYear(value: number | null) {

    if (value === this._selectedYear) {
      return;
    }


    this._selectedYear = value;


    if (this.mustSuspendReactivity) {
      return;
    }


    this.initializeOrUpdateDaysMatrix();

  }


  /* --- Month ------------------------------------------------------------------------------------------------------ */
  protected _selectedMonth: MonthsNames | null = null;

  public get $selectedMonth(): MonthsNames | null {
    return this._selectedMonth;
  }

  public set $selectedMonth(value: MonthsNames | null) {

    if (value === this._selectedMonth) {
      return;
    }


    this._selectedMonth = value;

    if (isNull(this._selectedMonth)) {
      return;
    }


    const selectedMonth__numerationFrom1: number = getMonthNumberByName({
      targetMonthName: this._selectedMonth, numerationFrom: 1
    });

    let hasSelectedMontBeenHighlighted: boolean = false;

    for (const monthSelectingButton of this.monthSelectingButtons) {

      monthSelectingButton.classList.remove(DateTimePicker.MONTH_SELECTING_BUTTON__SELECTED_MONTH_STATE_CSS_CLASS);

      const { monthNumber__numerationFrom1 }: Readonly<{ monthNumber__numerationFrom1: number; }> =
          extractAndValidateDatasetFromDOM_Element({
            targetDOM_Element: monthSelectingButton,
            targetDOM_ElementNameOrSelectorForLogging: "DateTimePicker--YDF-MonthSelectingButton",
            validDataSpecification: {
              month_number__numeration_from1: {
                newName: "monthNumber__numerationFrom1",
                preValidationModifications: [ convertPotentialStringToIntegerIfPossible ],
                type: Number,
                numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumber,
                required: true,
                minimalValue: 1,
                maximalValue: MONTHS_COUNT_IN_YEAR
              }
            }
          });

      if (hasSelectedMontBeenHighlighted) {
        continue;
      }


      if (selectedMonth__numerationFrom1 === monthNumber__numerationFrom1) {
        monthSelectingButton.classList.add(DateTimePicker.MONTH_SELECTING_BUTTON__SELECTED_MONTH_STATE_CSS_CLASS);
        hasSelectedMontBeenHighlighted = true;
      }

    }

  }


  /* --- Day of Month ----------------------------------------------------------------------------------------------- */
  protected _selectedDayOfMonth: number | null = null;

  public get $selectedDayOfMonth(): number | null {
    return this._selectedDayOfMonth;
  }

  public set $selectedDayOfMonth(value: number | null) {

    if (value === this._selectedDayOfMonth) {
      return;
    }


    this._selectedDayOfMonth = value;

    if (this.mustSuspendReactivity) {
      return;
    }


    this.initializeOrUpdateDaysMatrix();

  }


  /* ─── Not sorted yet ───────────────────────────────────────────────────────────────────────────────────────────── */
  protected _isDialogDisplaying: boolean = false;

  protected get $isDialogDisplaying(): boolean {
    return this._isDialogDisplaying;
  }

  protected set $isDialogDisplaying(value: boolean) {

    if (value === this._isDialogDisplaying) {
      return;
    }


    this._isDialogDisplaying = value;

    if (this._isDialogDisplaying) {
      this.dialogMountingPoint.replaceWith(this.dialog);
      return;
    }


    this.dialog.replaceWith(this.dialogMountingPoint);

  }
  /* eslint-enable no-underscore-dangle */


  /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static initializeOne<
    ValidValue extends DateTimePicker.SupportedValidatablePayloadValuesTypes,
    InvalidValue extends DateTimePicker.SupportedValidatablePayloadValuesTypes,
    Validation extends InputtedValueValidation
  >(
    properties: DateTimePicker.InitializationProperties<ValidValue, InvalidValue, Validation>
  ): DateTimePicker<ValidValue, InvalidValue, Validation> {
    return new DateTimePicker<ValidValue, InvalidValue, Validation>(properties);
  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(
    {
      rootElement,
      contextElement,
      nativeInputElementValueToValidatableValuePayloadTransformer,
      validation,
      displayingValueFormatter,
      dateSetter
    }: DateTimePicker.InitializationProperties<ValidValue, InvalidValue, Validation>
  ) {


    /* ─── DOM ────────────────────────────────────────────────────────────────────────────────────────────────────── */
    this.shellComponent = CompoundControlShell.initializeOne({
      rootElement,
      contextElement,
      mustDisplayErrorsMessagesIfAny: this.mustDisplayErrorsMessagesImmideatlyIfAny
    });

    const {
      initialValue__ISO8601
    }: Readonly<{
      mode: DateTimePicker.Modes;
      initialValue__ISO8601?: string;
    }> = extractAndValidateDatasetFromDOM_Element({
      targetDOM_Element: this.shellComponent.rootElement,
      mustDeleteMentionedDataAttributesOnceExtracted: true,
      targetDOM_ElementNameOrSelectorForLogging: "Root element",
      validDataSpecification: {
        mode: {
          type: String,
          required: true,
          allowedAlternatives: Object.values(DateTimePicker.Modes)
        },
        initial_value: {
          preValidationModifications: [
            /* eslint-disable-next-line no-void -- "no-undefined"対"no-void"。 */
            (rawValue: unknown): unknown => (isEmptyString(rawValue) ? void 0 : rawValue)
          ],
          newName: "initialValue__ISO8601",
          type: String,
          required: false
        }
      }
    });

    this.nativeInputElement = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.NATIVE_INPUT_ELEMENT_SELECTOR,
      contextElement: this.shellComponent.rootElement,
      expectedDOM_ElementSubtype: HTMLInputElement
    });

    this.indicatorButton = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.INDICATOR_BUTTON_SELECTOR,
      contextElement: this.shellComponent.rootElement,
      expectedDOM_ElementSubtype: HTMLButtonElement
    });

    this.onIndicatorButtonClickedEventListener = new LeftClickEventListener({
      targetElement: this.indicatorButton,
      handler: this.onClickIndicatorButton.bind(this)
    });

    this.indicatorButtonLabelElement = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.INDICATOR_BUTTON_LABEL_SELECTOR,
      contextElement: this.shellComponent.rootElement
    });


    let initiallyDisplayingDate: Date;

    if (isUndefined(initialValue__ISO8601)) {
      initiallyDisplayingDate = new Date();
    } else {
      this.nativeInputElement.value = initialValue__ISO8601;
      initiallyDisplayingDate = new Date(initialValue__ISO8601);
    }

    this.dialog = cloneDOM_Element({
      targetElement: DateTimePicker.prepareDialogAndItsParts(),
      mustCopyAllChildren: true
    });

    this.dialogClickEventListener = new DelegatedLeftClickEventListener({
      delegatingContainer: this.dialog,
      handlersBySelectors: {
        [DateTimePicker.MONTHS_MATRIX_DISPLAYING_BUTTON_SELECTOR]: this.onClickMonthsMatrixDisplayingButton.bind(this),
        [DateTimePicker.YEAR_MATRIX_DISPLAYING_BUTTON_SELECTOR]: this.onClickYearsMatrixDisplayingButton.bind(this),
        [DateTimePicker.DATE_SELECTING_BUTTON_SELECTOR]: this.onClickDateSelectingButton.bind(this),
        [DateTimePicker.PREVIOUS_MONTH_BUTTON_SELECTOR]: this.onClickDisplayingDaysOfPreviousMonthButton.bind(this),
        [DateTimePicker.NEXT_MONTH_BUTTON_SELECTOR]: this.onClickDisplayingDaysOfNextMonthButton.bind(this),
        [DateTimePicker.MONTH_SELECTING_BUTTON_SELECTOR]: this.onClickSpecificMonthDisplayingButton.bind(this)
      }
    });

    this.daysMatrix = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DAYS_MATRIX_SELECTOR,
      contextElement: this.dialog,
      expectedDOM_ElementSubtype: HTMLElement
    });

    this.daySelectingButtons = Array.from(
      this.daysMatrix.querySelectorAll(DateTimePicker.DATE_SELECTING_BUTTON_SELECTOR)
    );

    this.monthsMatrix = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.MONTHS_MATRIX_SELECTOR,
      contextElement: this.dialog,
      expectedDOM_ElementSubtype: HTMLElement
    });

    this.monthsMatrix.hidden = true;

    this.monthSelectingButtons = Array.from(
      this.monthsMatrix.querySelectorAll(DateTimePicker.MONTH_SELECTING_BUTTON_SELECTOR)
    );

    this.dialogMountingPoint = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DIALOG_MOUNTING_POINT_SELECTOR,
      contextElement: this.shellComponent.rootElement
    });

    this.yearsMatrix = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.YEARS_MATRIX_SELECTOR,
      contextElement: this.dialog,
      expectedDOM_ElementSubtype: HTMLElement
    });

    this.yearsMatrix.hidden = true;

    this.yearSelectingButtons = Array.from(
      this.yearsMatrix.querySelectorAll(DateTimePicker.YEAR_SELECTING_BUTTON_SELECTOR)
    );

    this.dateSetter = dateSetter;
    this.displayingValueFormatter = displayingValueFormatter;

    this.payload = new ValidatableControl.Payload<ValidValue, InvalidValue, Validation>({
      initialValue: nativeInputElementValueToValidatableValuePayloadTransformer(initialValue__ISO8601),
      getComponentInstance: (): ValidatableControl => this,
      validation,
      onAnyChangeEventHandler: this.onPayloadInitializedOrChanged.bind(this)
    });

    this.onPayloadInitializedOrChanged();

    this.$currentlyDisplayingYear = initiallyDisplayingDate.getFullYear();
    this.$currentlyDisplayingMonth__numerationFrom1 = initiallyDisplayingDate.getMonth() + 1;

    if (isNotUndefined(initialValue__ISO8601)) {

      const initiallySelectedDate: Date = new Date(initialValue__ISO8601);

      this.mustSuspendReactivity = true;
      this.$selectedYear = initiallySelectedDate.getFullYear();
      this.$selectedMonth = getMonthNameByNumber({ targetMonthNumber: initiallySelectedDate.getMonth(), numerationFrom: 0 });

      this.mustSuspendReactivity = false;
      this.$selectedDayOfMonth = initiallySelectedDate.getDate();

      return;

    }


    this.initializeOrUpdateDaysMatrix();

  }


  /* ━━━ Public Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Interface Implementation ─────────────────────────────────────────────────────────────────────────────────── */
  public highlightInvalidInput(): this {
    this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages = true;
    return this;
  }

  public focus(): this {
    this.indicatorButton.focus();
    return this;
  }

  public getRootElementOffsetCoordinates(): ValidatableControl.RootElementOffsetCoordinates {
    return {
      top: this.shellComponent.rootElement.offsetTop,
      left: this.shellComponent.rootElement.offsetLeft
    };
  }

  public resetValidityHighlightingStateToInitial(): void {
    this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages = this.mustDisplayErrorsMessagesImmideatlyIfAny;
  }


  /* ─── Other ────────────────────────────────────────────────────────────────────────────────────────────────────── */
  public destroy(): void {
    this.dialogClickEventListener.utilize();
    this.onIndicatorButtonClickedEventListener.utilize();
  }


  /* ━━━ Events Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected onPayloadInitializedOrChanged(): void {
    this.indicatorButtonLabelElement.textContent = this.displayingValueFormatter(this.payload.value);
  }

  protected onClickIndicatorButton(): void {
    this.$isDialogDisplaying = true;
  }

  protected onClickDateSelectingButton(clickedButton: Element): void {

    const calendarCellData: CalendarBuilder.CalendarCellData = extractAndValidateDatasetFromDOM_Element({
      targetDOM_Element: clickedButton,
      targetDOM_ElementNameOrSelectorForLogging: "Clicked Date Selecting Button",
      validDataSpecification: {
        year: {
          preValidationModifications: [ convertPotentialStringToIntegerIfPossible ],
          type: Number,
          numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumber,
          required: true
        },
        month_number__numeration_from0: {
          newName: "monthNumber__numerationFrom0",
          preValidationModifications: [ convertPotentialStringToIntegerIfPossible ],
          type: Number,
          numbersSet: RawObjectDataProcessor.NumbersSets.nonNegativeInteger,
          required: true,
          minimalValue: 0,
          maximalValue: MONTHS_COUNT_IN_YEAR - 1
        },
        month_number__numeration_from1: {
          newName: "monthNumber__numerationFrom1",
          preValidationModifications: [ convertPotentialStringToIntegerIfPossible ],
          type: Number,
          numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumber,
          required: true,
          minimalValue: 1,
          maximalValue: MONTHS_COUNT_IN_YEAR
        },
        month_name: {
          newName: "monthName",
          type: String,
          required: true,
          allowedAlternatives: Object.values(MonthsNames)
        },
        day_of_month: {
          newName: "dayOfMonth",
          preValidationModifications: [ convertPotentialStringToIntegerIfPossible ],
          type: Number,
          numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumber,
          required: true,
          minimalValue: 1,
          maximalValue: MAXIMAL_DAYS_IN_MONTH
        },
        day_of_week_number__numeration_from_0_from_sunday: {
          preValidationModifications: [ convertPotentialStringToIntegerIfPossible ],
          newName: "dayOfWeekNumber__numerationFrom0ForSunday",
          type: Number,
          numbersSet: RawObjectDataProcessor.NumbersSets.nonNegativeInteger,
          required: true,
          minimalValue: 1,
          maximalValue: DAYS_COUNT_IN_WEEK - 1
        },
        day_of_week_name: {
          newName: "dayOfWeekName",
          type: String,
          required: true,
          allowedAlternatives: Object.values(DaysOfWeekNames)
        }
      }
    });

    this.payload.$setValue({
      newValue: this.dateSetter({
        ...calendarCellData,
        nativeDateInstance: new Date(
          calendarCellData.year,
          calendarCellData.monthNumber__numerationFrom0,
          calendarCellData.dayOfMonth
        )
      })
    });

    for (const dateSelectingButton of this.daySelectingButtons) {
      dateSelectingButton.classList.remove(DateTimePicker.DATE_SELECTING_BUTTON_SELECTED_STATE_CSS_CLASS);
    }

    clickedButton.classList.add(DateTimePicker.DATE_SELECTING_BUTTON_SELECTED_STATE_CSS_CLASS);

    this.$selectedYear = calendarCellData.year;
    this.$selectedMonth = calendarCellData.monthName;
    this.$selectedDayOfMonth = calendarCellData.dayOfMonth;

    this.$isDialogDisplaying = false;

  }


  /* ─── Month ────────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected onClickMonthsMatrixDisplayingButton(): void {
    this.daysMatrix.hidden = true;
    this.monthsMatrix.hidden = false;
  }

  protected onClickDisplayingDaysOfPreviousMonthButton(): void {

    this.mustSuspendReactivity = true;

    this.$currentlyDisplayingYear = getYearOfPreviousMonth({
      referenceYear: this.$currentlyDisplayingYear,
      referenceMonthNumber__numerationFrom1: this.$currentlyDisplayingMonth__numerationFrom1
    });

    this.mustSuspendReactivity = false;

    this.$currentlyDisplayingMonth__numerationFrom1 = getPreviousMonthNumber({
      referenceMonthNumber__numerationFrom1: this.$currentlyDisplayingMonth__numerationFrom1,
      firstMonthNumberInRelationToReturnableValue: 1
    });

  }

  protected onClickDisplayingDaysOfNextMonthButton(): void {

    this.mustSuspendReactivity = true;

    this.$currentlyDisplayingYear = getYearOfNextMonth({
      referenceYear: this.$currentlyDisplayingYear,
      referenceMonthNumber__numerationFrom1: this.$currentlyDisplayingMonth__numerationFrom1
    });

    this.mustSuspendReactivity = false;

    this.$currentlyDisplayingMonth__numerationFrom1 = getNextMonthNumber({
      referenceMonthNumber__numerationFrom1: this.$currentlyDisplayingMonth__numerationFrom1,
      firstMonthNumberInRelationToReturnableValue: 1
    });

  }

  protected onClickSpecificMonthDisplayingButton(clickedButton: Element): void {

    const { monthNumber__numerationFrom1 }: Readonly<{ monthNumber__numerationFrom1: number; }> =
        extractAndValidateDatasetFromDOM_Element({
          targetDOM_Element: clickedButton,
          targetDOM_ElementNameOrSelectorForLogging: "Clicked Date Selecting Button",
          validDataSpecification: {
            month_number__numeration_from1: {
              newName: "monthNumber__numerationFrom1",
              preValidationModifications: [ convertPotentialStringToIntegerIfPossible ],
              type: Number,
              numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumber,
              required: true,
              minimalValue: 1,
              maximalValue: MONTHS_COUNT_IN_YEAR
            }
          }
        });

    this.$currentlyDisplayingMonth__numerationFrom1 = monthNumber__numerationFrom1;

  }


  /* ─── Years ────────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected onClickYearsMatrixDisplayingButton(): void {
    this.daysMatrix.hidden = true;
    this.monthsMatrix.hidden = true;
    this.yearsMatrix.hidden = false;
  }


  /* ━━━ Initialization on Demand ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static prepareDialogAndItsParts(): Element {

    if (isNotNull(DateTimePicker.dialog)) {
      return DateTimePicker.dialog;
    }


    DateTimePicker.dialog = createDOM_ElementFromHTML_Code(componentDynamicPartsHTML);

    return DateTimePicker.dialog;

  }


  /* ━━━ Routines ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected initializeOrUpdateDaysMatrix(): void {

    const today: Date = new Date();

    for (
      const [
        index,
        {
          year,
          monthNumber__numerationFrom0,
          monthNumber__numerationFrom1,
          monthName,
          dayOfMonth,
          dayOfWeekNumber__numerationFrom0ForSunday,
          dayOfWeekName
        }
      ] of CalendarBuilder.generateDataFor42DaysMatrix({
        targetYear: this.$currentlyDisplayingYear,
        targetMonthNumber__numerationFrom1: this.$currentlyDisplayingMonth__numerationFrom1,
        firstDayOfWeek: DaysOfWeekNames.sunday
      }).entries()
    ) {

      const dateSelectingButton: HTMLElement = this.daySelectingButtons[index];

      dateSelectingButton.textContent = dayOfMonth.toString();

      setHTML_Attributes(
        dateSelectingButton,
        {
          [DateTimePicker.CalendarCellButtonDataAttributes.year]: year,
          [DateTimePicker.CalendarCellButtonDataAttributes.monthNumber__numerationFrom0]: monthNumber__numerationFrom0,
          [DateTimePicker.CalendarCellButtonDataAttributes.monthNumber__numerationFrom1]: monthNumber__numerationFrom1,
          [DateTimePicker.CalendarCellButtonDataAttributes.monthName]: monthName,
          [DateTimePicker.CalendarCellButtonDataAttributes.dayOfMonth]: dayOfMonth,
          [DateTimePicker.CalendarCellButtonDataAttributes.dayOfWeekNumber__numerationFrom0ForSunday]:
              dayOfWeekNumber__numerationFrom0ForSunday,
          [DateTimePicker.CalendarCellButtonDataAttributes.dayOfWeekName]: dayOfWeekName
        }
      );

      if (
        year === this.$selectedYear &&
        monthName === this.$selectedMonth &&
        dayOfMonth === this.$selectedDayOfMonth
      ) {
        dateSelectingButton.classList.add(DateTimePicker.DATE_SELECTING_BUTTON_SELECTED_STATE_CSS_CLASS);
      } else {
        dateSelectingButton.classList.remove(DateTimePicker.DATE_SELECTING_BUTTON_SELECTED_STATE_CSS_CLASS);
      }

      if (
        year === today.getFullYear() &&
        monthNumber__numerationFrom0 === today.getMonth() &&
        dayOfMonth === today.getDate()
      ) {
        dateSelectingButton.classList.add(DateTimePicker.DATE_SELECTING_BUTTON__TODAY_STATE_CSS_CLASS);
      } else {
        dateSelectingButton.classList.remove(DateTimePicker.DATE_SELECTING_BUTTON__TODAY_STATE_CSS_CLASS);
      }

    }

  }

  protected initializeOrUpdateYearsMatrix(): void {

    const currentYear: number = new Date().getFullYear();
    let iteratedYear: number = this.$currentlyDisplayingYear -
        DateTimePicker.YEARS_COUNT_AT_LEFT_OR_RIGHT_OF_CENTER_ONE_IN_MATRIX;

    for (const yearSelectingButton of this.yearSelectingButtons) {

      yearSelectingButton.textContent = iteratedYear.toString();

      if (iteratedYear === currentYear) {
        yearSelectingButton.classList.add(DateTimePicker.YEAR_SELECTING_BUTTON__CURRENT_YEAR_CSS_CLASS);
      } else {
        yearSelectingButton.classList.remove(DateTimePicker.YEAR_SELECTING_BUTTON__CURRENT_YEAR_CSS_CLASS);
      }

      if (iteratedYear === this.$selectedYear) {
        yearSelectingButton.classList.add(DateTimePicker.YEAR_SELECTING_BUTTON__SELECTED_YEAR_CSS_CLASS);
      } else {
        yearSelectingButton.classList.remove(DateTimePicker.YEAR_SELECTING_BUTTON__SELECTED_YEAR_CSS_CLASS);
      }

      iteratedYear++;

    }

  }

}


namespace DateTimePicker {

  export type SupportedValidatablePayloadValuesTypes = DateWithoutTime | null;

  export type DisplayingValueFormatter<
    ValidValue extends SupportedValidatablePayloadValuesTypes,
    InvalidValue extends SupportedValidatablePayloadValuesTypes
  > = (value: ValidValue | InvalidValue) => string;

  export type InitializationProperties<
    ValidValue extends SupportedValidatablePayloadValuesTypes,
    InvalidValue extends SupportedValidatablePayloadValuesTypes,
    Validation extends InputtedValueValidation
  > = Readonly<
    (
      {
        rootElement: Readonly<{ selector: string; }>;
        contextElement?: ParentNode | Readonly<{ selector: string; }>;
      } |
      {
        rootElement: Element;
        contextElement?: never;
      }
    ) &
    {
      validation: Validation;
      nativeInputElementValueToValidatableValuePayloadTransformer: (value?: string) => ValidValue | InvalidValue;
      displayingValueFormatter: DisplayingValueFormatter<ValidValue, InvalidValue>;
      dateSetter: DateSetter<ValidValue, InvalidValue>;
    }>;

  export type DateSetter<
    ValidValue extends SupportedValidatablePayloadValuesTypes,
    InvalidValue extends SupportedValidatablePayloadValuesTypes
  > = (pickedData: DateSetter.PickedData) => ValidValue | InvalidValue;

  export namespace DateSetter {
    export type PickedData = Readonly<
      CalendarBuilder.CalendarCellData &
      { nativeDateInstance: Date; }
    >;
  }

  export enum Modes {
    dateWithTime = "DATE_WITH_TIME",
    dateOnly = "DATE_ONLY",
    datesRange = "DATES_RANGE",
    datesWithTimeRange = "DATES_WITH_TIME_RANGE"
  }

  export enum Matrices {
    days = "DAYS",
    months = "MONTHS",
    years = "YEARS",
    hours = "HOURS",
    minutes = "MINUTES"
  }

  export enum CalendarCellButtonDataAttributes {
    year = "data-year",
    monthNumber__numerationFrom0 = "data-month_number__numeration_from0",
    monthNumber__numerationFrom1 = "data-month_number__numeration_from1",
    monthName = "data-month_name",
    dayOfMonth = "data-day_of_month",
    dayOfWeekNumber__numerationFrom0ForSunday = "data-day_of_week_number__numeration_from_0_from_sunday",
    dayOfWeekName = "data-day_of_week_name"
  }

}


export default DateTimePicker;
