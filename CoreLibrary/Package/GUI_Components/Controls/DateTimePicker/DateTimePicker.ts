/* eslint-disable @typescript-eslint/member-ordering --
 * The members of this class has been organized semantically. */

/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import type DateTimePickerLocalization from "./DateTimePickerLocalization";
import componentDynamicPartsHTML from "./DateTimePicker.parts.pug";
import { dateTimePickerYDF_ComponentLocalization__english } from "./DateTimePickerLocalization.english";
import { type DateTimePickerYDF_GUI_ComponentDOM_Access, dateTimePickerYDF_GUI_ComponentDOM_Access } from
    "./DateTimePickerDOM_Access";
import { DAYS_COUNT_IN_WEEK, MAXIMAL_DAYS_IN_MONTH, MONTHS_COUNT_IN_YEAR } from "fundamental-constants";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import CompoundControlShell from "../CompoundControlShell/CompoundControlShell";
import Button from "../Buttons/Plain/Button";

/* ─── Validations ────────────────────────────────────────────────────────────────────────────────────────────────── */
import ValidatableControl from "../_Validation/ValidatableControl";
import type InputtedValueValidation from "../_Validation/InputtedValueValidation";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  CalendarBuilder,
  RawObjectDataProcessor,
  convertPotentialStringToIntegerIfPossible,
  type DateWithoutTime,
  type TimePoint,
  DaysOfWeekNames,
  emptyStringToUndefined,
  getMonthNameByNumber,
  getMonthNumberByName,
  getNextMonthNumber,
  getPreviousMonthNumber,
  getYearOfNextMonth,
  getYearOfPreviousMonth,
  isNotUndefined,
  isNull,
  isUndefined,
  MonthsNames
} from "@yamato-daiwa/es-extensions";
import {
  cloneDOM_Element,
  createDOM_ElementFromHTML_Code,
  DelegatedLeftClickEventListener,
  extractAndValidateDatasetFromDOM_Element,
  getExpectedToBeSingleDOM_Element,
  LeftClickEventListener,
  LeftClickOutOfElementEventListener,
  EventPropagationTypes
} from "@yamato-daiwa/es-extensions-browserjs";
import setHTML_Attributes from "../../../Logic/UtilsIncubator/DOM/setHTML_Attributes";
import onDifferentValueAssigned from "../../_Auxiliaries/Decorators/onDifferentValueAssigned";


class DateTimePicker<
  ValidValue extends DateTimePicker.SupportedValidatablePayloadValuesTypes,
  InvalidValue extends DateTimePicker.SupportedValidatablePayloadValuesTypes,
  Validation extends InputtedValueValidation
> implements ValidatableControl {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static defaultLocalization: DateTimePickerLocalization = dateTimePickerYDF_ComponentLocalization__english;

  protected static readonly DOM_AccessResources: DateTimePickerYDF_GUI_ComponentDOM_Access =
      dateTimePickerYDF_GUI_ComponentDOM_Access;

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
  protected static readonly DATE_SELECTING_BUTTON_SELECTOR: string = ".DateTimePicker--YDF-DaySelectingButton";
  protected static readonly DATE_SELECTING_BUTTON_SELECTED_STATE_CSS_CLASS: string =
      "DateTimePicker--YDF-DaySelectingButton__SelectedState";
  protected static readonly DATE_SELECTING_BUTTON__TODAY_STATE_CSS_CLASS: string =
      "DateTimePicker--YDF-DaySelectingButton__Today";

  /* ┄┄┄ Month Selecting ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  protected static readonly MONTH_SELECTING_BUTTON_SELECTOR: string = ".DateTimePicker--YDF-MonthSelectingButton";
  protected static readonly MONTH_SELECTING_BUTTON__SELECTED_MONTH_STATE_CSS_CLASS: string =
      ".DateTimePicker--YDF-MonthSelectingButton__SelectedState";
  protected static readonly MONTH_SELECTING_BUTTON__TODAY_S_MONTH_STATE_CSS_CLASS: string =
      "DateTimePicker--YDF-MonthSelectingButton__Today";


  /* ┄┄┄ Year Selecting ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  protected static readonly YEAR_SELECTING_BUTTON_SELECTOR: string = ".DateTimePicker--YDF-YearSelectingButton";
  protected static readonly YEAR_SELECTING_BUTTON__SELECTED_YEAR_CSS_CLASS: string =
      "DateTimePicker--YDF-YearSelectingButton__SelectedState";
  protected static readonly YEAR_SELECTING_BUTTON__TODAY_S_YEAR_STATE_CSS_CLASS: string =
      "DateTimePicker--YDF-YearSelectingButton__Today";


  /* ┄┄┄ Dialog ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  protected static readonly DIALOG_MOUNTING_POINT_SELECTOR: string = ".DateTimePicker--YDF-DialogMountingPoint";


  /* --- Initialization on Demand ----------------------------------------------------------------------------------- */
  protected static dialog: Element | null = null;


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public readonly payload: ValidatableControl.Payload<ValidValue, InvalidValue, Validation>;

  protected localization: DateTimePickerLocalization;

  protected dateSetter: DateTimePicker.DateSetter<ValidValue, InvalidValue>;
  protected displayingValueFormatter: DateTimePicker.DisplayingValueFormatter<ValidValue, InvalidValue>;

  protected mustDisplayErrorsMessagesImmediatelyIfAny: boolean = false;


  /* ─── DOM ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly shellComponent: CompoundControlShell;
  protected readonly nativeInputElement: HTMLInputElement;

  protected readonly indicatorButton: HTMLButtonElement;
  protected readonly indicatorButtonLabelElement: Element;

  protected readonly dialog: Element;

  protected readonly daysActionsTable: HTMLElement;
  protected readonly monthsActionsTable: HTMLElement;
  protected readonly yearsActionsTable: HTMLElement;

  protected readonly currentScopeLabel: Element;
  protected readonly modeDependentGuidanceElement: Element;

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
  protected leftClickOutOfDialogEventListener: LeftClickOutOfElementEventListener | null = null;


  /* ━━━ Reactivity ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected mustSuspendReactivity: boolean = true;

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

  @onDifferentValueAssigned()
  public set $currentlyDisplayingYear(_value: number) {
    this.initializeOrUpdateYearsMatrix();
    this.initializeOrUpdateDaysMatrix();
    this.updateCurrentScopeLabel();
  }


  /* ─── Currently Displaying Month ───────────────────────────────────────────────────────────────────────────────── */
  protected _currentlyDisplayingMonth__numerationFrom1!: number;

  public get $currentlyDisplayingMonth__numerationFrom1(): number {
    return this._currentlyDisplayingMonth__numerationFrom1;
  }

  @onDifferentValueAssigned()
  public set $currentlyDisplayingMonth__numerationFrom1(_value: number) {
    this.initializeOrUpdateDaysMatrix();
    this.updateCurrentScopeLabel();
  }


  /* ─── Selecting ────────────────────────────────────────────────────────────────────────────────────────────────── */
  /* [ Approach ]
   * It is unknown inside this component what `this.payload.value` exactly is so the internal management is required. */

  /* --- Year ------------------------------------------------------------------------------------------------------- */
  protected _selectedYear: number | null = null;

  public get $selectedYear(): number | null {
    return this._selectedYear;
  }

  @onDifferentValueAssigned()
  public set $selectedYear(_value: number | null) {
    this.initializeOrUpdateDaysMatrix();
  }


  /* --- Month ------------------------------------------------------------------------------------------------------ */
  protected _selectedMonth: MonthsNames | null = null;

  public get $selectedMonth(): MonthsNames | null {
    return this._selectedMonth;
  }

  @onDifferentValueAssigned()
  public set $selectedMonth(_value: MonthsNames | null) {

    if (isNull(this.$selectedMonth)) {
      return;
    }


    const selectedMonth__numerationFrom1: number = getMonthNumberByName({
      targetMonthName: this.$selectedMonth, numerationFrom: 1
    });

    let hasSelectedMonthBeenHighlighted: boolean = false;

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

      if (hasSelectedMonthBeenHighlighted) {
        continue;
      }


      if (selectedMonth__numerationFrom1 === monthNumber__numerationFrom1) {
        monthSelectingButton.classList.add(DateTimePicker.MONTH_SELECTING_BUTTON__SELECTED_MONTH_STATE_CSS_CLASS);
        hasSelectedMonthBeenHighlighted = true;
      }

    }

  }


  /* --- Day of Month ----------------------------------------------------------------------------------------------- */
  protected _selectedDayOfMonth: number | null = null;

  public get $selectedDayOfMonth(): number | null {
    return this._selectedDayOfMonth;
  }

  @onDifferentValueAssigned()
  public set $selectedDayOfMonth(_value: number | null) {
    this.initializeOrUpdateDaysMatrix();
  }


  /* ─── Not sorted yet ───────────────────────────────────────────────────────────────────────────────────────────── */
  /* --- Dialog Displaying ------------------------------------------------------------------------------------------ */
  protected _isDialogDisplaying: boolean = false;

  protected get $isDialogDisplaying(): boolean {
    return this._isDialogDisplaying;
  }

  @onDifferentValueAssigned()
  protected set $isDialogDisplaying(_value: boolean) {

    if (this._isDialogDisplaying) {

      this.dialogMountingPoint.replaceWith(this.dialog);

      this.leftClickOutOfDialogEventListener = LeftClickOutOfElementEventListener.createAndAssign({
        elementOutOfWhich: this.dialog,
        callback: (): void => {
          this.$isDialogDisplaying = false;
          this.leftClickOutOfDialogEventListener?.utilize();
          this.leftClickOutOfDialogEventListener = null;
        },
        eventPropagation: EventPropagationTypes.capturing
      });

      return;

    }


    this.dialog.replaceWith(this.dialogMountingPoint);

  }


  /* --- Active Matrix ---------------------------------------------------------------------------------------------- */
  protected _activeMatrix!: DateTimePicker.Matrices;

  protected get $activeMatrix(): DateTimePicker.Matrices {
    return this._activeMatrix;
  }

  @onDifferentValueAssigned()
  protected set $activeMatrix(_value: DateTimePicker.Matrices) {

    const isDaysMatrixActive: boolean = this.$activeMatrix === DateTimePicker.Matrices.days;
    const isMonthsMatrixActive: boolean = this.$activeMatrix === DateTimePicker.Matrices.months;
    const isYearsMatrixActive: boolean = this.$activeMatrix === DateTimePicker.Matrices.years;

    this.daysMatrix.hidden = !isDaysMatrixActive;
    this.daysActionsTable.hidden = !isDaysMatrixActive;

    this.monthsMatrix.hidden = !isMonthsMatrixActive;
    this.monthsActionsTable.hidden = !isMonthsMatrixActive;

    this.yearsActionsTable.hidden = !isYearsMatrixActive;
    this.yearsMatrix.hidden = !isYearsMatrixActive;

    /* eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check -- Disabled during development. */
    switch (this.$activeMatrix) {

      case DateTimePicker.Matrices.days: {
        this.modeDependentGuidanceElement.textContent = this.localization.dialog.header.guidances.dateSelecting;
        break;
      }

      case DateTimePicker.Matrices.months: {
        this.modeDependentGuidanceElement.textContent = this.localization.dialog.header.guidances.monthSelecting;
        break;
      }

      case DateTimePicker.Matrices.years: {
        this.modeDependentGuidanceElement.textContent = this.localization.dialog.header.guidances.yearSelecting;
      }

    }

    this.updateCurrentScopeLabel();

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


  /* ━━━ Public Instance Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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
    return this.shellComponent.getRootElementOffsetCoordinates();
  }

  public resetValidityHighlightingStateToInitial(): void {
    this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages = this.mustDisplayErrorsMessagesImmediatelyIfAny;
  }


  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(
    {
      rootElement,
      contextElement,
      nativeInputElementValueToValidatableValuePayloadTransformer,
      validation,
      displayingValueFormatter,
      dateSetter,
      localization
    }: DateTimePicker.InitializationProperties<ValidValue, InvalidValue, Validation>
  ) {

    this.localization = localization ?? DateTimePicker.defaultLocalization;


    /* ─── DOM ────────────────────────────────────────────────────────────────────────────────────────────────────── */
    this.shellComponent = CompoundControlShell.initializeOne({
      rootElement,
      contextElement,
      mustDisplayErrorsMessagesIfAny: this.mustDisplayErrorsMessagesImmediatelyIfAny
    });

    const {
      initialValue__ISO8601
    }: Readonly<{
      mode: DateTimePicker.Modes;
      initialValue__ISO8601?: string;
    }> = extractAndValidateDatasetFromDOM_Element({
      targetDOM_Element: this.shellComponent.rootElement,
      mustDeleteMentionedDataAttributesOnceExtracted: true,
      targetDOM_ElementNameOrSelectorForLogging: "DateTimePicker.RootElement",
      validDataSpecification: {
        mode: {
          type: String,
          required: true,
          allowedAlternatives: Object.values(DateTimePicker.Modes)
        },
        initial_value: {
          preValidationModifications: [ emptyStringToUndefined ],
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
      handler: this.onClickIndicatorButton.bind(this),
      eventPropagation: EventPropagationTypes.capturing
    });

    this.indicatorButtonLabelElement = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.INDICATOR_BUTTON_LABEL_SELECTOR,
      contextElement: this.shellComponent.rootElement
    });

    let initiallyDisplayingDatePossiblyWithTime: Date;

    if (isUndefined(initialValue__ISO8601)) {
      initiallyDisplayingDatePossiblyWithTime = new Date();
    } else {
      this.nativeInputElement.value = initialValue__ISO8601;
      initiallyDisplayingDatePossiblyWithTime = new Date(initialValue__ISO8601);
    }


    /* ┄┄┄ Dialog ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
    this.dialog = cloneDOM_Element({
      targetElement: DateTimePicker.prepareDialogAndItsParts(),
      mustCopyAllChildren: true
    });

    this.currentScopeLabel = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DOM_AccessResources.dialog.header.currentScopeLabel.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: this.dialog
    });

    this.modeDependentGuidanceElement = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DOM_AccessResources.dialog.header.guidance.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: this.dialog
    });

    this.dialogClickEventListener = new DelegatedLeftClickEventListener({
      delegatingContainer: this.dialog,
      handlersBySelectors: {

        /* --- Day -------------------------------------------------------------------------------------------------- */
        [
          DateTimePicker.DOM_AccessResources.dialog.topActionBar.reusableButtons.
              switchingToDateSelectingPanel.COMMON_SELECTOR
        ]: this.onClickDaysMatrixDisplayingButton.bind(this),

        /* --- Month ------------------------------------------------------------------------------------------------ */
        [
          DateTimePicker.DOM_AccessResources.dialog.topActionBar.reusableButtons.
              switchingToMonthSelectingPanel.COMMON_SELECTOR
        ]: this.onClickMonthsMatrixDisplayingButton.bind(this),
        [
          DateTimePicker.DOM_AccessResources.dialog.topActionBar.daysActions.buttons.
              switchingToPreviousMonth.INTERNALLY_UNIQUE_SELECTOR
        ]: this.onClickDisplayingDaysOfPreviousMonthButton.bind(this),
        [
          DateTimePicker.DOM_AccessResources.dialog.topActionBar.daysActions.buttons.
              switchingToNextMonth.INTERNALLY_UNIQUE_SELECTOR
        ]: this.onClickDisplayingDaysOfNextMonthButton.bind(this),

        /* --- Year ------------------------------------------------------------------------------------------------- */
        [
          DateTimePicker.DOM_AccessResources.dialog.topActionBar.reusableButtons.
              switchingToYearSelectingPanel.COMMON_SELECTOR
        ]: this.onClickYearsMatrixDisplayingButton.bind(this),
        [
          DateTimePicker.DOM_AccessResources.dialog.topActionBar.monthsActions.buttons.
              switchingToPreviousYear.INTERNALLY_UNIQUE_SELECTOR
        ]: this.onClickDisplayingDaysOfPreviousYearButton.bind(this),
        [
          DateTimePicker.DOM_AccessResources.dialog.topActionBar.monthsActions.buttons.
              switchingToNextYear.INTERNALLY_UNIQUE_SELECTOR
        ]: this.onClickDisplayingDaysOfNextYearButton.bind(this),
        [
          DateTimePicker.DOM_AccessResources.dialog.topActionBar.yearsActions.buttons.
              switchingToPreviousYearsSet.INTERNALLY_UNIQUE_SELECTOR
          ]: this.onClickDisplayingOfPreviousYearsSetButton.bind(this),
        [
          DateTimePicker.DOM_AccessResources.dialog.topActionBar.yearsActions.buttons.
              switchingToNextYearsSet.INTERNALLY_UNIQUE_SELECTOR
        ]: this.onClickDisplayingOfNextYearsSetButton.bind(this),


        
        /* --- Other ------------------------------------------------------------------------------------------------ */
        [DateTimePicker.MONTH_SELECTING_BUTTON_SELECTOR]: this.onClickSpecificMonthDisplayingButton.bind(this),
        [DateTimePicker.YEAR_SELECTING_BUTTON_SELECTOR]: this.onClickYearSelectingButton.bind(this),
        [DateTimePicker.DOM_AccessResources.dialog.bottomActionBar.buttons.unselecting.INTERNALLY_UNIQUE_SELECTOR]:
            this.onClickDateTimeUnselectingButton.bind(this)

      }
    });


    /* --- Day Selecting -------------------------------------------------------------------------------------------- */
    this.daysActionsTable = DateTimePicker.initializeDaysActionsTable(this.dialog, this.localization);

    this.daysMatrix = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DAYS_MATRIX_SELECTOR,
      contextElement: this.dialog,
      expectedDOM_ElementSubtype: HTMLElement
    });

    for (
      const [ cellIndex, dayTitleCell ] of this.daysMatrix.
          querySelectorAll(
            DateTimePicker.DOM_AccessResources.dialog.matrices.days.columnTitleCell.COMMON_SELECTOR
          ).
          entries()
    ) {
      dayTitleCell.textContent = this.localization.dialog.matrices.days.generateTitleCellContent({ cellIndex });
    }

    this.daySelectingButtons = Array.from(
      this.daysMatrix.querySelectorAll(DateTimePicker.DATE_SELECTING_BUTTON_SELECTOR)
    );


    /* --- Month Selecting ------------------------------------------------------------------------------------------ */
    this.monthsActionsTable = DateTimePicker.initializeMonthActionsTable(this.dialog, this.localization);

    this.monthsMatrix = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.MONTHS_MATRIX_SELECTOR,
      contextElement: this.dialog,
      expectedDOM_ElementSubtype: HTMLElement
    });

    this.monthsMatrix.hidden = true;

    this.monthSelectingButtons = Array.from(
      this.monthsMatrix.querySelectorAll(DateTimePicker.MONTH_SELECTING_BUTTON_SELECTOR)
    );


    let hasToady_sMonthBeenHighlighted: boolean = false;
    const today: Date = new Date();

    for (const [ index, monthSelectingButton ] of this.monthSelectingButtons.entries()) {

      monthSelectingButton.textContent = this.localization.dialog.matrices.months.monthSelectingButton.generateLabel({
        monthNumber__numerationFrom1: index + 1
      });

      if (!hasToady_sMonthBeenHighlighted && index === today.getMonth()) {
        monthSelectingButton.classList.add(DateTimePicker.MONTH_SELECTING_BUTTON__TODAY_S_MONTH_STATE_CSS_CLASS);
        hasToady_sMonthBeenHighlighted = true;
      }

    }


    /* --- Years Matrix --------------------------------------------------------------------------------------------- */
    this.yearsActionsTable = DateTimePicker.initializeYearsActionsTable(this.dialog, this.localization);

    this.yearsMatrix = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.YEARS_MATRIX_SELECTOR,
      contextElement: this.dialog,
      expectedDOM_ElementSubtype: HTMLElement
    });

    this.yearsMatrix.hidden = true;

    this.yearSelectingButtons = Array.from(
      this.yearsMatrix.querySelectorAll(DateTimePicker.YEAR_SELECTING_BUTTON_SELECTOR)
    );

    this.dialogMountingPoint = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DIALOG_MOUNTING_POINT_SELECTOR,
      contextElement: this.shellComponent.rootElement
    });

    this.dateSetter = dateSetter;
    this.displayingValueFormatter = displayingValueFormatter;

    this.payload = new ValidatableControl.Payload<ValidValue, InvalidValue, Validation>({
      initialValue: nativeInputElementValueToValidatableValuePayloadTransformer(initialValue__ISO8601),
      getComponentInstance: (): ValidatableControl => this,
      validation,
      onAnyChangeEventHandler: this.onPayloadInitializedOrChanged.bind(this)
    });

    this.onPayloadInitializedOrChanged();

    this.$currentlyDisplayingYear = initiallyDisplayingDatePossiblyWithTime.getFullYear();
    this.$currentlyDisplayingMonth__numerationFrom1 = initiallyDisplayingDatePossiblyWithTime.getMonth() + 1;

    if (isNotUndefined(initialValue__ISO8601)) {

      const initiallySelectedDate: Date = new Date(initialValue__ISO8601);

      this.$selectedYear = initiallySelectedDate.getFullYear();
      this.$selectedMonth = getMonthNameByNumber({ targetMonthNumber: initiallySelectedDate.getMonth(), numerationFrom: 0 });
      this.$selectedDayOfMonth = initiallySelectedDate.getDate();

    }

    this.initializeOrUpdateDaysMatrix();
    this.initializeOrUpdateYearsMatrix();

    this.mustSuspendReactivity = false;

    this.$activeMatrix = DateTimePicker.Matrices.days;


    /* --- Other ---------------------------------------------------------------------------------------------------- */
    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.bottomActionBar.buttons.unselecting.INTERNALLY_UNIQUE_SELECTOR
        },
        contextElement: this.dialog
      },
      { label: this.localization.dialog.bottomActionBar.buttons.unselecting.label }
    );

  }


  /* ━━━ Events Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected onPayloadInitializedOrChanged(): void {
    this.indicatorButtonLabelElement.textContent = this.displayingValueFormatter(this.payload.value);
  }

  protected onClickIndicatorButton(): void {
    this.$isDialogDisplaying = true;
  }


  /* ─── Day ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected onClickDaysMatrixDisplayingButton(): void {
    this.$activeMatrix = DateTimePicker.Matrices.days;
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
    this.$activeMatrix = DateTimePicker.Matrices.months;
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

    this.$activeMatrix = DateTimePicker.Matrices.days;

  }


  /* ─── Year ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected onClickYearsMatrixDisplayingButton(): void {
    this.$activeMatrix = DateTimePicker.Matrices.years;
  }

  protected onClickDisplayingDaysOfPreviousYearButton(): void {
    this.$currentlyDisplayingYear = this.$currentlyDisplayingYear - 1;
  }

  protected onClickDisplayingDaysOfNextYearButton(): void {
    this.$currentlyDisplayingYear = this.$currentlyDisplayingYear + 1;
  }

  protected onClickDisplayingOfPreviousYearsSetButton(): void {
    this.$currentlyDisplayingYear = this.$currentlyDisplayingYear -
        (2 * DateTimePicker.YEARS_COUNT_AT_LEFT_OR_RIGHT_OF_CENTER_ONE_IN_MATRIX) - 1;
  }


  protected onClickYearSelectingButton(clickedButton: Element): void {

    const { year: targetYear }: Readonly<{ year: number; }> =
        extractAndValidateDatasetFromDOM_Element({
          targetDOM_Element: clickedButton,
          targetDOM_ElementNameOrSelectorForLogging: "DateTimePicker--YDF-YearSelectingButton",
          validDataSpecification: {
            [DateTimePicker.DOM_AccessResources.dialog.matrices.years.yearSelectingButton.DATASET_KEY]: {
              newName: "year",
              preValidationModifications: [ convertPotentialStringToIntegerIfPossible ],
              type: Number,
              numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumber,
              required: true
            }
          }
        });

    this.$currentlyDisplayingYear = targetYear;

    this.$activeMatrix = DateTimePicker.Matrices.days;

  }

  /* ─── Unselecting ──────────────────────────────────────────────────────────────────────────────────────────────── */
  protected onClickDateTimeUnselectingButton(): void {

    this.$isDialogDisplaying = false;

    this.$selectedYear = null;
    this.$selectedMonth = null;
    this.$selectedDayOfMonth = null;

    this.payload.$setValue({
      newValue: this.dateSetter(null)
    });

  }


  /* ━━━ Initialization on Demand ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static prepareDialogAndItsParts(): Element {
    return DateTimePicker.dialog ?? (DateTimePicker.dialog = createDOM_ElementFromHTML_Code(componentDynamicPartsHTML));
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

    let iteratedYear: number = this.$currentlyDisplayingYear -
        DateTimePicker.YEARS_COUNT_AT_LEFT_OR_RIGHT_OF_CENTER_ONE_IN_MATRIX;

    const { year: yearForFirstButton }: Readonly<{ year?: number; }> =
        extractAndValidateDatasetFromDOM_Element({
          targetDOM_Element: this.monthSelectingButtons[0],
          targetDOM_ElementNameOrSelectorForLogging: "DateTimePicker--YDF-YearSelectingButton",
          validDataSpecification: {
            [DateTimePicker.DOM_AccessResources.dialog.matrices.years.yearSelectingButton.DATASET_KEY]: {
              newName: "year",
              preValidationModifications: [ convertPotentialStringToIntegerIfPossible ],
              type: Number,
              numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumber,
              required: false
            }
          }
        });

    if (iteratedYear === yearForFirstButton) {
      return;
    }


    for (const yearSelectingButton of this.yearSelectingButtons) {

      yearSelectingButton.textContent = iteratedYear.toString();
      yearSelectingButton.dataset[
        DateTimePicker.DOM_AccessResources.dialog.matrices.years.yearSelectingButton.DATASET_KEY
      ] = iteratedYear.toString();

      if (iteratedYear === currentDateTime.getFullYear()) {
        yearSelectingButton.classList.add(DateTimePicker.YEAR_SELECTING_BUTTON__TODAY_S_YEAR_STATE_CSS_CLASS);
      } else {
        yearSelectingButton.classList.remove(DateTimePicker.YEAR_SELECTING_BUTTON__TODAY_S_YEAR_STATE_CSS_CLASS);
      }

      if (iteratedYear === this.$selectedYear) {
        yearSelectingButton.classList.add(DateTimePicker.YEAR_SELECTING_BUTTON__SELECTED_YEAR_CSS_CLASS);
      } else {
        yearSelectingButton.classList.remove(DateTimePicker.YEAR_SELECTING_BUTTON__SELECTED_YEAR_CSS_CLASS);
      }

      iteratedYear++;

    }

  }


  /* ─── Initialization ───────────────────────────────────────────────────────────────────────────────────────────── */
  protected static initializeDaysActionsTable(dialog: Element, localization: DateTimePickerLocalization): HTMLElement {

    const daysActionsTable: HTMLElement = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.daysActions.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: dialog,
      expectedDOM_ElementSubtype: HTMLElement
    });

    daysActionsTable.hidden = true;

    getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.daysActions.
        columnsTitles.closestMonths.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: daysActionsTable
    }).textContent = localization.dialog.topActionBar.dateSelectingMode.labels.month;

    getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.daysActions.
        columnsTitles.selectingPanels.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: daysActionsTable
    }).textContent = localization.dialog.topActionBar.dateSelectingMode.labels.selectingPanels;

    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.daysActions.buttons.
              switchingToPreviousMonth.INTERNALLY_UNIQUE_SELECTOR
        },
        contextElement: daysActionsTable
      },
      { label: localization.dialog.topActionBar.dateSelectingMode.buttons.switchingToPreviousMonth.label }
    );

    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.daysActions.buttons.
              switchingToNextMonth.INTERNALLY_UNIQUE_SELECTOR
        },
        contextElement: daysActionsTable
      },
      { label: localization.dialog.topActionBar.dateSelectingMode.buttons.switchingToNextMonth.label }
    );

    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.reusableButtons.
              switchingToMonthSelectingPanel.COMMON_SELECTOR
        },
        contextElement: daysActionsTable
      },
      { label: localization.dialog.topActionBar.dateSelectingMode.buttons.switchingToMonthSelectingPanel.label }
    );

    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.reusableButtons.
              switchingToYearSelectingPanel.COMMON_SELECTOR
        },
        contextElement: daysActionsTable
      },
      { label: localization.dialog.topActionBar.dateSelectingMode.buttons.switchingToYearSelectingPanel.label }
    );

    return daysActionsTable;

  }

  protected static initializeMonthActionsTable(dialog: Element, localization: DateTimePickerLocalization): HTMLElement {

    const monthsActionsTable: HTMLElement = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.monthsActions.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: dialog,
      expectedDOM_ElementSubtype: HTMLElement
    });

    monthsActionsTable.hidden = true;

    getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.monthsActions.columnsTitles.
          closestYears.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: monthsActionsTable
    }).textContent = localization.dialog.topActionBar.monthSelectingMode.labels.year;

    getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.monthsActions.columnsTitles.
          selectingPanels.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: monthsActionsTable
    }).textContent = localization.dialog.topActionBar.monthSelectingMode.labels.selectingPanels;

    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.monthsActions.buttons.
              switchingToPreviousYear.INTERNALLY_UNIQUE_SELECTOR
        },
        contextElement: monthsActionsTable
      },
      { label: localization.dialog.topActionBar.monthSelectingMode.buttons.switchingToPreviousYear.label }
    );

    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.monthsActions.buttons.
              switchingToNextYear.INTERNALLY_UNIQUE_SELECTOR
        },
        contextElement: monthsActionsTable
      },
      { label: localization.dialog.topActionBar.monthSelectingMode.buttons.switchingToNextYear.label }
    );

    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.reusableButtons.
              switchingToYearSelectingPanel.COMMON_SELECTOR
        },
        contextElement: monthsActionsTable
      },
      { label: localization.dialog.topActionBar.monthSelectingMode.buttons.switchingToYearSelectingPanel.label }
    );

    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.reusableButtons.
              switchingToDateSelectingPanel.COMMON_SELECTOR
        },
        contextElement: monthsActionsTable
      },
      { label: localization.dialog.topActionBar.monthSelectingMode.buttons.switchingToDateSelectingPanel.label }
    );

    return monthsActionsTable;

  }

  protected static initializeYearsActionsTable(dialog: Element, localization: DateTimePickerLocalization): HTMLElement {

    const yearsActionsTable: HTMLElement = getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.yearsActions.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: dialog,
      expectedDOM_ElementSubtype: HTMLElement
    });

    yearsActionsTable.hidden = true;

    getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.yearsActions.columnsTitles.
        adjacentYearsSets.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: yearsActionsTable
    }).textContent = localization.dialog.topActionBar.yearSelectingMode.labels.adjacentYearsSets;

    getExpectedToBeSingleDOM_Element({
      selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.yearsActions.columnsTitles.
          selectingPanels.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: yearsActionsTable
    }).textContent = localization.dialog.topActionBar.yearSelectingMode.labels.selectingPanels;

    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.yearsActions.buttons.
            switchingToPreviousYearsSet.INTERNALLY_UNIQUE_SELECTOR
        },
        contextElement: yearsActionsTable
      },
      { label: localization.dialog.topActionBar.yearSelectingMode.buttons.switchingToPreviousYearsSet.label }
    );

    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.yearsActions.buttons.
            switchingToNextYearsSet.INTERNALLY_UNIQUE_SELECTOR
        },
        contextElement: yearsActionsTable
      },
      { label: localization.dialog.topActionBar.yearSelectingMode.buttons.switchingToNextYearsSet.label }
    );

    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.reusableButtons.
              switchingToMonthSelectingPanel.COMMON_SELECTOR
        },
        contextElement: yearsActionsTable
      },
      { label: localization.dialog.topActionBar.yearSelectingMode.buttons.switchingToMonthSelectingPanel.label }
    );

    Button.setTextings(
      {
        targetElement: {
          selector: DateTimePicker.DOM_AccessResources.dialog.topActionBar.reusableButtons.
              switchingToDateSelectingPanel.COMMON_SELECTOR
        },
        contextElement: yearsActionsTable
      },
      { label: localization.dialog.topActionBar.yearSelectingMode.buttons.switchingToDateSelectingPanel.label }
    );

    return yearsActionsTable;

  }


  /* ─── Updating ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected updateCurrentScopeLabel(): void {

    /* eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check -- Disabled during development. */
    switch (this.$activeMatrix) {

      case DateTimePicker.Matrices.days: {

        this.currentScopeLabel.textContent = this.localization.dialog.header.currentScopeLabel.dateSelectingMode.generate({
          currentlyDisplayingYear: this.$currentlyDisplayingYear,
          currentlyDisplayingMonth__numerationFrom1: this.$currentlyDisplayingMonth__numerationFrom1
        });

        break;

      }

      case DateTimePicker.Matrices.months: {

        this.currentScopeLabel.textContent = this.localization.dialog.header.currentScopeLabel.monthSelectingMode.generate({
          currentlyDisplayingYear: this.$currentlyDisplayingYear
        });

        break;

      }

      case DateTimePicker.Matrices.years: {

        this.currentScopeLabel.textContent = this.localization.dialog.header.currentScopeLabel.yearSelectingMode.generate({
          currentlyDisplayingYear: this.$currentlyDisplayingYear
        });

      }

    }

  }


}


namespace DateTimePicker {

  export type SupportedValidatablePayloadValuesTypes = DateWithoutTime | TimePoint | null;

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
      localization?: DateTimePickerLocalization;
    }>;

  export type DateSetter<
    ValidValue extends SupportedValidatablePayloadValuesTypes,
    InvalidValue extends SupportedValidatablePayloadValuesTypes
  > = (pickedData: DateSetter.PickedData | null) => ValidValue | InvalidValue;

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
