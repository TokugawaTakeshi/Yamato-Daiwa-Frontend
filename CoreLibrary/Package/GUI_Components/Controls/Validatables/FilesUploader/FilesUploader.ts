/* eslint-disable @typescript-eslint/member-ordering --
 * The members of this class has been organized semantically. */

/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentDynamicPartsHTML from "./FilesUploader.parts.pug";
import type FilesUploaderLocalization from "./FilesUploaderLocalization";
import { filesUploaderYDF_ComponentLocalization__english } from "./FilesUploaderLocalization.english";

/* ─── Validation ─────────────────────────────────────────────────────────────────────────────────────────────────── */
import ValidatableControl from "../../_Validation/ValidatableControl";
import type InputtedValueValidation from "../../_Validation/InputtedValueValidation";

/* ─── Children Components ────────────────────────────────────────────────────────────────────────────────────────── */
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell";
import Button from "../../Buttons/Plain/Button";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  encodeFileToBase64,
  Logger,
  InvalidParameterValueError,
  InvalidExternalDataError,
  isUndefined,
  isNotUndefined,
  isNull,
  isNotNull,
  isString,
  nullToUndefined,
  isArrayOfCertainTypeElements,
  removeSpecificCharacterFromCertainPosition,
  convertPotentialStringToIntegerIfPossible,
  RawObjectDataProcessor,
  emptyStringToUndefined,
  UnexpectedEventError
} from "@yamato-daiwa/es-extensions";
import {
  cloneDOM_Element,
  createDOM_ElementFromHTML_Code,
  extractAndValidateDatasetFromDOM_Element,
  getExpectedToBeSingleDOM_Element,
  DelegatedLeftClickEventListener
} from "@yamato-daiwa/es-extensions-browserjs";
import setHTML_Attributes from "../../../../Logic/UtilsIncubator/DOM/setHTML_Attributes";


class FilesUploader<
  ValidValue extends FilesUploader.SupportedValidatablePayloadValuesTypes,
  InvalidValue extends FilesUploader.SupportedValidatablePayloadValuesTypes,
  Validation extends InputtedValueValidation
> implements ValidatableControl {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected static readonly FILES_PICKING_BUTTON_SELECTOR: string = ".FilesUploader--YDF-FilePickingButton";
  protected static readonly DRAG_AND_DROP_AREA_SELECTOR: string = ".FilesUploader--YDF-DragAndDropArea";

  protected static readonly SINGLE_IMAGE_PREVIEWER_SELECTOR: string = ".FilesUploader--YDF-SingleImagePreviewer";
  protected static readonly SINGLE_IMAGE_PREVIEWER_IMAGE_SELECTOR: string = ".FilesUploader--YDF-SingleImagePreviewer-Image";
  protected static readonly SINGLE_FILE_DELETING_BUTTON_SELECTOR: string = ".FilesUploader--YDF-SingleFileDeletingButton";
  protected static readonly SINGLE_IMAGE_PREVIEWER_MOUNTING_POINT_SELECTOR: string =
      ".FilesUploader--YDF-SingleImagePreviewerMountingPoint";


  /* ─── Initialization on Demand ─────────────────────────────────────────────────────────────────────────────────── */
  protected static dynamicParts: DocumentFragment | null = null;

  // ━━━ TODO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  protected static readonly NATIVE_INPUT_ELEMENT_SELECTOR: string = ".FilesUploader--YDF-HiddenInputElement";

  protected static readonly INVALID_VALUE_STATE_CSS_CLASS: string = "FilesUploader--YDF-FilesUploader__InvalidValueState";
  protected static readonly DRAG_AND_DROP_AREA_DRAG_OVER_STATE_CSS_CLASS: string =
      "FilesUploader--YDF-DragAndDropArea__DragOverState";

  protected static readonly INITIAL_VALUE_DATASET_KEY: string = "initial_value";


  /* ─── Events ───────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly delegatedLeftClickEventListener: DelegatedLeftClickEventListener;


  /* ─── Settings ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected static readonly fileNamesExtensionsWithoutDotsOfFilesRecognizedAsImages: Set<string> = new Set([
    "jpg", "png", "webp", "gif", "png"
  ]);


  /* ─── Settings ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public static localization: FilesUploaderLocalization = filesUploaderYDF_ComponentLocalization__english;


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public readonly payload: ValidatableControl.Payload<ValidValue, InvalidValue, Validation>;

  protected readonly scenario: FilesUploader.Scenarios;

  protected mustDisplayErrorsMessagesImmediatelyIfAny: boolean = false;

  protected localization: FilesUploaderLocalization;


  /* ─── DOM ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly shellComponent: ValidatableControlShell;

  protected singleImagePreviewer?: Element;
  protected singleImagePreviewerImage?: HTMLImageElement;
  protected singleFileDeletingButton?: Button;
  protected singleImagePreviewerMountingPoint?: Element;

  protected readonly nativeInputElement: HTMLInputElement;
  protected readonly dragAndDropArea: HTMLElement | null;


  /* ─── Events Handling ──────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly onBase64EncodingOfAllFilesDoneEventExternalHandler?:
      FilesUploader.OnBase64EncodingOfAllFilesDoneEventHandler;


  /* ━━━ Reactivity ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* eslint-disable no-underscore-dangle -- [ CONVENTION ]
   * The instance fields begins from the underscore MUST be changed only via setters or constructor. */
  /* ─── Validation Error Messages Highlighting ───────────────────────────────────────────────────────────────────── */
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
        this.shellComponent.rootElement.classList.add(FilesUploader.INVALID_VALUE_STATE_CSS_CLASS);
      }

      return;

    }


    this.shellComponent.rootElement.classList.remove(FilesUploader.INVALID_VALUE_STATE_CSS_CLASS);
    this.shellComponent.$mustDisplayErrorsMessagesIfAny = false;

  }


  /* ─── Dragging Action Registration ─────────────────────────────────────────────────────────────────────────────── */
  protected _isUserDraggingFileNow: boolean = false;

  protected get $isUserDraggingNow(): boolean {
    return this._isUserDraggingFileNow;
  }

  protected set $isUserDraggingNow(value: boolean) {

    if (value === this._isUserDraggingFileNow) {
      return;
    }


    this.dragAndDropArea?.classList.toggle(FilesUploader.DRAG_AND_DROP_AREA_DRAG_OVER_STATE_CSS_CLASS);
    this._isUserDraggingFileNow = value;

  }
  /* eslint-enable no-underscore-dangle */


  /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static pickOneBySelector<Validation extends InputtedValueValidation>(
    initializationProperties: FilesUploader.InitializationProperties.SingleRequiredFileScenario<Validation>
  ): FilesUploader<string, string | null, Validation>;

  public static pickOneBySelector<Validation extends InputtedValueValidation>(
    initializationProperties: FilesUploader.InitializationProperties.SingleOptionalFileScenario<Validation>
  ): FilesUploader<string | null, string | null, Validation>;

  public static pickOneBySelector<Validation extends InputtedValueValidation>(
    initializationProperties: FilesUploader.InitializationProperties.ArbitraryFilesCountScenario<Validation>
  ): FilesUploader<Array<string>, Array<string>, Validation>;

  public static pickOneBySelector<
    ValidValue extends FilesUploader.SupportedValidatablePayloadValuesTypes,
    InvalidValue extends FilesUploader.SupportedValidatablePayloadValuesTypes,
    Validation extends InputtedValueValidation
  >(
    properties: FilesUploader.InitializationProperties<Validation>
  ): FilesUploader<ValidValue, InvalidValue, Validation> {
    return new FilesUploader<ValidValue, InvalidValue, Validation>(properties);
  }

  public static addNamesExtensionsOfFilesWithMustBeRecognizedAsImages__leadingDotsAreOptional(
    namesExtensionsOfFilesWithMustBeRecognizedAsImages__leadingDotsAreOptional: ReadonlyArray<string> | ReadonlySet<string>
  ): void {
    for (
      const nameExtensionOfFilesWithMustBeRecognizedAsImages__leadingDotsAreOptional of
          namesExtensionsOfFilesWithMustBeRecognizedAsImages__leadingDotsAreOptional
    ) {
      FilesUploader.fileNamesExtensionsWithoutDotsOfFilesRecognizedAsImages.add(
        removeSpecificCharacterFromCertainPosition({
          targetString: nameExtensionOfFilesWithMustBeRecognizedAsImages__leadingDotsAreOptional,
          targetCharacter: ".",
          fromFirstPosition: true
        })
      );
    }
  }


  /* ━━━ Public Instance Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Interface Implementation ─────────────────────────────────────────────────────────────────────────────────── */
  public highlightInvalidInput(): this {
    this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages = true;
    return this;
  }

  public focus(): this {

    (
      this.shellComponent.rootElement.querySelector<HTMLButtonElement>(FilesUploader.FILES_PICKING_BUTTON_SELECTOR) ??
      this.dragAndDropArea
    )?.focus();

    return this;

  }

  public getRootElementOffsetCoordinates(): ValidatableControl.RootElementOffsetCoordinates {
    return {
      top: this.shellComponent.rootElement.offsetTop,
      left: this.shellComponent.rootElement.offsetLeft
    };
  }

  public resetValidityHighlightingStateToInitial(): void {
    this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages = this.mustDisplayErrorsMessagesImmediatelyIfAny;
  }


  /* ─── Other ────────────────────────────────────────────────────────────────────────────────────────────────────── */
  public destroy(): void {

    if (isNotNull(this.dragAndDropArea)) {
      this.dragAndDropArea.ondragover = null;
      this.dragAndDropArea.ondragleave = null;
      this.dragAndDropArea.ondrop = null;
    }

  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(
    {
      rootElement,
      contextElement,
      validation,
      localization = FilesUploader.localization,
      ...initializationProperties
    }: FilesUploader.InitializationProperties<Validation>
  ) {

    this.localization = localization;

    /* ─── DOM ────────────────────────────────────────────────────────────────────────────────────────────────────── */
    if (isNull(FilesUploader.dynamicParts)) {
      FilesUploader.dynamicParts = createDOM_ElementFromHTML_Code({
        HTML_Code: componentDynamicPartsHTML,
        rootDOM_ElementSubtype: HTMLTemplateElement
      }).content;
    }

    this.shellComponent = ValidatableControlShell.initializeOne({
      rootElement,
      contextElement,
      mustDisplayErrorsMessagesIfAny: this.mustDisplayErrorsMessagesImmediatelyIfAny
    });

    const {
      maximalFilesCount,
      pickedFromDOM_InitialValue
    }: Readonly<{
      minimalFilesCount: number;
      maximalFilesCount?: number;
      pickedFromDOM_InitialValue?: string;
    }> = extractAndValidateDatasetFromDOM_Element({
      targetDOM_Element: this.shellComponent.rootElement,
      targetDOM_ElementNameOrSelectorForLogging: "Root element",
      mustDeleteMentionedDataAttributesOnceExtracted: true,
      validDataSpecification: {
        minimal_files_count: {
          newName: "minimalFilesCount",
          preValidationModifications: [ convertPotentialStringToIntegerIfPossible ],
          type: Number,
          numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumberOrZero,
          isUndefinedForbidden: true,
          isNullForbidden: true
        },
        maximal_files_count: {
          newName: "maximalFilesCount",
          preValidationModifications: [ convertPotentialStringToIntegerIfPossible ],
          type: Number,
          numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumberOrZero,
          isUndefinedForbidden: false,
          isNullForbidden: true
        },
        initial_value: {
          newName: "pickedFromDOM_InitialValue",
          preValidationModifications: [ emptyStringToUndefined ],
          type: String,
          isUndefinedForbidden: false,
          isNullForbidden: true
        }
      }
    });

    this.delegatedLeftClickEventListener = new DelegatedLeftClickEventListener({
      delegatingContainer: this.shellComponent.rootElement,
      handlersBySelectors: {
        [FilesUploader.FILES_PICKING_BUTTON_SELECTOR]: this.onClickFilesPickingButton.bind(this),
        [FilesUploader.SINGLE_FILE_DELETING_BUTTON_SELECTOR]: this.onClickSingleFileDeletingButton.bind(this)
      }
    });

    this.dragAndDropArea = this.shellComponent.rootElement.querySelector(FilesUploader.DRAG_AND_DROP_AREA_SELECTOR);

    if (isNotNull(this.dragAndDropArea)) {
      this.dragAndDropArea.ondragover = this.onFileDraggingStarted.bind(this);
      this.dragAndDropArea.ondragleave = this.onFileDraggingTerminated.bind(this);
      this.dragAndDropArea.ondrop = this.onFilesDropped.bind(this);
    }

    if (maximalFilesCount === 1) {

      this.singleImagePreviewer = nullToUndefined(
        this.shellComponent.rootElement.querySelector(FilesUploader.SINGLE_IMAGE_PREVIEWER_SELECTOR)
      );

      if (isUndefined(this.singleImagePreviewer)) {

        this.singleImagePreviewer = cloneDOM_Element({
          targetElement: getExpectedToBeSingleDOM_Element({
            selector: FilesUploader.SINGLE_IMAGE_PREVIEWER_SELECTOR,
            contextElement: FilesUploader.dynamicParts
          }),
          mustCopyAllChildren: true
        });

        this.singleImagePreviewerImage = getExpectedToBeSingleDOM_Element({
          selector: FilesUploader.SINGLE_IMAGE_PREVIEWER_IMAGE_SELECTOR,
          contextElement: this.singleImagePreviewer,
          expectedDOM_ElementSubtype: HTMLImageElement
        });

        /* [ MVC Scenario ]
         * When compiling the Pug to HTML, the initial value is something like `{{ initialValue }}`, but when executing
         *   the JavaScript it is already the valid value of `src` attribute. */
        if (isNotUndefined(pickedFromDOM_InitialValue)) {
          setHTML_Attributes(
            this.singleImagePreviewerImage,
            {
              src: pickedFromDOM_InitialValue,
              alt: this.localization.singleImagePreviewer.image.alternatingText
            }
          );
        }

        if (!validation.isInputRequired()) {

          this.singleFileDeletingButton = Button.initializeOne({
            targetElement: cloneDOM_Element({
              targetElement: getExpectedToBeSingleDOM_Element({
                selector: FilesUploader.SINGLE_FILE_DELETING_BUTTON_SELECTOR,
                contextElement: FilesUploader.dynamicParts
              }),
              mustCopyAllChildren: true
            })
          });

        }

        this.singleImagePreviewerMountingPoint = getExpectedToBeSingleDOM_Element({
          selector: FilesUploader.SINGLE_IMAGE_PREVIEWER_MOUNTING_POINT_SELECTOR,
          contextElement: this.shellComponent.rootElement
        });

        this.singleImagePreviewerMountingPoint.replaceWith(...[
          this.singleImagePreviewer,
          ...isNotUndefined(this.singleFileDeletingButton) ? [ this.singleFileDeletingButton.rootElement ] : []
        ]);

      } else {

        this.singleImagePreviewerImage = getExpectedToBeSingleDOM_Element({
          selector: FilesUploader.SINGLE_IMAGE_PREVIEWER_IMAGE_SELECTOR,
          contextElement: this.singleImagePreviewer,
          expectedDOM_ElementSubtype: HTMLImageElement
        });

        this.singleImagePreviewerMountingPoint = cloneDOM_Element({
          targetElement: getExpectedToBeSingleDOM_Element({
            selector: FilesUploader.SINGLE_IMAGE_PREVIEWER_MOUNTING_POINT_SELECTOR,
            contextElement: FilesUploader.dynamicParts
          }),
          mustCopyAllChildren: true
        });

      }

    }

    if (isNotUndefined(this.singleFileDeletingButton)) {
      this.singleFileDeletingButton.$label = this.localization.buttons.singleImageDeleting.label;
      this.singleFileDeletingButton.$accessibilityGuidance = this.localization.buttons.singleImageDeleting.accessibilityGuidance;
    }

    this.nativeInputElement = getExpectedToBeSingleDOM_Element({
      selector: FilesUploader.NATIVE_INPUT_ELEMENT_SELECTOR,
      contextElement: this.shellComponent.rootElement,
      expectedDOM_ElementSubtype: HTMLInputElement
    });

    this.nativeInputElement.onchange = this.onPickFilesByExplorerDialog.bind(this);

    let payloadInitialValue: FilesUploader.SupportedValidatablePayloadValuesTypes;

    switch (initializationProperties.scenario) {

      case FilesUploader.Scenarios.singleRequiredFile: {

        if (!validation.isInputRequired()) {

          Logger.throwErrorAndLog({
            errorInstance: new InvalidParameterValueError({
              parameterNumber: 1,
              parameterName: "initializationProperties",
              messageSpecificPart:
                  "Contradictory initialization options. " +
                  "The \"singleRequiredFile\" scenario has been specified, while according to \"validation\", " +
                    "the input is optional."
            }),
            title: InvalidParameterValueError.localization.defaultTitle,
            occurrenceLocation: "FilesUploader.pickOneBySelector(initializationProperties)"
          });
        }

        if (isString(initializationProperties.initialFileURI)) {
          payloadInitialValue = initializationProperties.initialFileURI;
        } else if (isString(pickedFromDOM_InitialValue)) {
          payloadInitialValue = pickedFromDOM_InitialValue;
        } else {
          payloadInitialValue = null;
        }

        break;

      }

      case FilesUploader.Scenarios.singleOptionalFile: {

        if (validation.isInputRequired()) {
          Logger.throwErrorAndLog({
            errorInstance: new InvalidParameterValueError({
              parameterNumber: 1,
              parameterName: "properties",
              messageSpecificPart:
                  "Contradictory initialization options. " +
                  "The \"singleOptionalFile\" scenario has been specified, while according to \"validation\" the " +
                    "input is required."
            }),
            title: InvalidParameterValueError.localization.defaultTitle,
            occurrenceLocation: "FilesUploader.pickOneBySelector(initializationProperties)"
          });
        }

        if (isString(initializationProperties.initialFileURI)) {
          payloadInitialValue = initializationProperties.initialFileURI;
        } else if (isString(pickedFromDOM_InitialValue)) {
          payloadInitialValue = pickedFromDOM_InitialValue;
        } else {
          payloadInitialValue = null;
        }

        break;

      }

      case FilesUploader.Scenarios.arbitraryFilesCount: {

        if (isNotUndefined(initializationProperties.initialFilesURIs)) {
          payloadInitialValue = initializationProperties.initialFilesURIs;
        } else if (isString(pickedFromDOM_InitialValue)) {

          let parsedPayloadInitialValuePassedViaRootElementDataset: unknown;

          try {

            parsedPayloadInitialValuePassedViaRootElementDataset =
                JSON.parse(pickedFromDOM_InitialValue);

          } catch (error: unknown) {

            Logger.throwErrorAndLog({
              errorInstance: new InvalidExternalDataError({
                customMessage:
                    "Invalid \"value\" property of \"FilesUploader--YDF\" pug mixin has been specified. " +
                    "For \"arbitraryFilesCount\" scenario, it must be the stringified array of strings while actually " +
                      "it is even not the valid JSON."
              }),
              title: InvalidExternalDataError.localization.defaultTitle,
              occurrenceLocation: "FilesUploader.pickOneBySelector(initializationProperties)",
              innerError: error
            });

          }


          if (!isArrayOfCertainTypeElements(parsedPayloadInitialValuePassedViaRootElementDataset, isString)) {

            Logger.throwErrorAndLog({
              errorInstance: new InvalidExternalDataError({
                customMessage:
                    "Invalid \"value\" property of \"FilesUploader--YDF\" pug mixin has been specified. " +
                    "For \"arbitraryFilesCount\" scenario, it must be the stringified array of strings."
              }),
              title: InvalidExternalDataError.localization.defaultTitle,
              occurrenceLocation: "FilesUploader.pickOneBySelector(initializationProperties)"
            });

          }


          payloadInitialValue = parsedPayloadInitialValuePassedViaRootElementDataset;

        } else {
          payloadInitialValue = [];
        }

      }

    }

    this.payload = new ValidatableControl.Payload<ValidValue, InvalidValue, Validation>({
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * TypeScript complains that "Type null is not assignable to type ValidValue | InvalidValue" while both `ValidValue`
       *   and `InvalidValue` are constrained to polymorphic type `FilesUploader.SupportedValidatablePayloadValuesTypes`
       *   which could be `null`. */
      initialValue: payloadInitialValue as ValidValue | InvalidValue,
      getComponentInstance: (): ValidatableControl => this,
      validation,
      onAnyChangeEventHandler: this.synchronizePreviewWithNewestValues.bind(this)
    });

    this.scenario = initializationProperties.scenario;

    this.onBase64EncodingOfAllFilesDoneEventExternalHandler = initializationProperties.
        onBase64EncodingOfAllFilesDoneEventHandler;

  }


  /* ━━━ Protected Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Actions Handling ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected async onPickFilesByExplorerDialog(): Promise<void> {
    return this.issueFilesURIs(Array.from(this.nativeInputElement.files ?? []));
  }

  protected onClickFilesPickingButton(): void {
    this.nativeInputElement.click();
  }

  protected onFileDraggingStarted(dragEvent: DragEvent): void {
    dragEvent.preventDefault();
    this.$isUserDraggingNow = true;
  }

  protected onFileDraggingTerminated(dragEvent: DragEvent): void {
    dragEvent.preventDefault();
    this.$isUserDraggingNow = false;
  }

  protected async onFilesDropped(droppingEvent: DragEvent): Promise<void> {

    droppingEvent.preventDefault();

    if (isNull(droppingEvent.dataTransfer)) {
      return;
    }


    return this.issueFilesURIs(Array.from(droppingEvent.dataTransfer.files));

  }

  protected onClickSingleFileDeletingButton(): void {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
     * If this has been clicked than single file mode is actual thus the empty value is `null`. */
    this.payload.$setValue({ newValue: null as ValidValue | InvalidValue });
  }


  /* ─── Uploading ────────────────────────────────────────────────────────────────────────────────────────────────── */
  /* eslint-disable-next-line n/no-unsupported-features/node-builtins --
  protected async issueFilesURIs(newFiles: ReadonlyArray<File>): Promise<void> {

    if (newFiles.length === 0) {
      return;
    }


    let newBase64EncodedFiles: Array<string>;

    try {

      newBase64EncodedFiles = await Promise.all(

        /* eslint-disable-next-line n/no-unsupported-features/node-builtins --
        newFiles.map(async (file: File): Promise<string> => encodeFileToBase64(file))

      );

    } catch (error: unknown) {

      Logger.logError({
        errorType: "FileBase64EncodingFailedError",
        title: "File Base64 Encoding Failed",
        description: "The error occurred during the Base64 file encoding.",
        occurrenceLocation: "FilesUploader.issueFilesURIs(newFiles)",
        caughtError: error
      });

      return;

    }


    if (isNotUndefined(this.onBase64EncodingOfAllFilesDoneEventExternalHandler)) {

      try {

        newBase64EncodedFiles = await this.onBase64EncodingOfAllFilesDoneEventExternalHandler(newBase64EncodedFiles);

      } catch (error: unknown) {

        Logger.logError({
          errorType: "EventExternalHandlerExecutionFailedError",
          title: "Event External Handler Execution Failed",
          description: "The error occurred during the execution of event external handler.",
          occurrenceLocation: "FilesUploader.issueFilesURIs(newFiles)",
          caughtError: error
        });

        return;

      }

    }


    let payloadNewValue: FilesUploader.SupportedValidatablePayloadValuesTypes;

    switch (this.scenario) {

      case FilesUploader.Scenarios.singleRequiredFile: {
        payloadNewValue = newBase64EncodedFiles[0];
        break;
      }

      case FilesUploader.Scenarios.singleOptionalFile: {
        payloadNewValue = newBase64EncodedFiles.length > 0 ? newBase64EncodedFiles[0] : null;
        break;
      }

      case FilesUploader.Scenarios.arbitraryFilesCount: {
        payloadNewValue = newBase64EncodedFiles;
        break;
      }

    }

    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- TODO */
    this.payload.$setValue({ newValue: payloadNewValue as ValidValue | InvalidValue });

  }

  protected synchronizePreviewWithNewestValues(): void {

    if (isString(this.payload.value)) {

      if (this.payload.value.startsWith("data:image")) {

        if (
          isUndefined(this.singleImagePreviewer) ||
          isUndefined(this.singleImagePreviewerImage) ||
          isUndefined(this.singleImagePreviewerMountingPoint)
        ) {
          Logger.throwErrorAndLog({
            errorInstance: new UnexpectedEventError(
              "One or more required element for working with images has not been initialized."
            ),
            title: UnexpectedEventError.localization.defaultTitle,
            occurrenceLocation: "FilesUploader.synchronizePreviewWithNewestValues()",
            additionalData: {
              singleImagePreviewer: isUndefined(this.singleImagePreviewer) ? "Initialized" : "Not initialized",
              singleImagePreviewerImage: isUndefined(this.singleImagePreviewerImage) ? "Initialized" : "Not initialized",
              singleImagePreviewerMountingPoint:
                  isUndefined(this.singleImagePreviewerMountingPoint) ? "Initialized" : "Not initialized"
            }
          });
        }


        this.singleImagePreviewerImage.src = this.payload.value;

        if (this.singleImagePreviewer.isConnected) {
          return;
        }


        this.singleImagePreviewerMountingPoint.replaceWith(...[
          this.singleImagePreviewer,
          ...isNotUndefined(this.singleFileDeletingButton) ? [ this.singleFileDeletingButton.rootElement ] : []
        ]);

      }

      return;

    }


    if (isNull(this.payload.value)) {

      if (
        isUndefined(this.singleImagePreviewer) ||
        isUndefined(this.singleImagePreviewerMountingPoint)
      ) {
        Logger.throwErrorAndLog({
          errorInstance: new UnexpectedEventError(
            "One or more required element for working with images has not been initialized."
          ),
          title: UnexpectedEventError.localization.defaultTitle,
          occurrenceLocation: "FilesUploader.synchronizePreviewWithNewestValues()",
          additionalData: {
            singleImagePreviewer: isUndefined(this.singleImagePreviewer) ? "Initialized" : "Not initialized",
            singleImagePreviewerImage: isUndefined(this.singleImagePreviewerImage) ? "Initialized" : "Not initialized",
            singleImagePreviewerMountingPoint:
                isUndefined(this.singleImagePreviewerMountingPoint) ? "Initialized" : "Not initialized"
          }
        });
      }

      this.singleImagePreviewer.replaceWith(this.singleImagePreviewerMountingPoint);
      this.singleFileDeletingButton?.rootElement.remove();

    }

  }

}


namespace FilesUploader {

  export type SupportedValidatablePayloadValuesTypes = string | Array<string> | null;

  export enum Scenarios {
    singleRequiredFile = "SINGLE_REQUIRED_FILE",
    singleOptionalFile = "SINGLE_OPTIONAL_FILE",
    arbitraryFilesCount = "ARBITRARY_FILES_COUNT"
  }

  export type InitializationProperties<Validation extends InputtedValueValidation> =
      InitializationProperties.SingleRequiredFileScenario<Validation> |
      InitializationProperties.SingleOptionalFileScenario<Validation> |
      InitializationProperties.ArbitraryFilesCountScenario<Validation>;

  export namespace InitializationProperties {

    export type Common<Validation extends InputtedValueValidation> = Readonly<
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
        invalidInputPrevention?: Readonly<{
          minimalFilesCount?: number;
          maximalFilesCount?: number;
        }>;
        validation: Validation;
        mustHighlightInvalidInputIfAnyValidationErrorsMessagesImmediately: boolean;
        onBase64EncodingOfAllFilesDoneEventHandler?: OnBase64EncodingOfAllFilesDoneEventHandler;
        localization?: FilesUploaderLocalization;
      }>;

    export type SingleRequiredFileScenario<Validation extends InputtedValueValidation> =
        Readonly<{
          initialFileURI?: string;
          scenario: Scenarios.singleRequiredFile;
        }> &
        Common<Validation>;

    export type SingleOptionalFileScenario<Validation extends InputtedValueValidation> =
        Readonly<{
          initialFileURI?: string;
          scenario: Scenarios.singleOptionalFile;
        }> &
        Common<Validation>;

    export type ArbitraryFilesCountScenario<Validation extends InputtedValueValidation> =
        Readonly<{
          initialFilesURIs?: Array<string>;
          scenario: Scenarios.arbitraryFilesCount;
        }> &
        Common<Validation>;

  }

  export type Base64EncodedFile = string;

  export type OnBase64EncodingOfAllFilesDoneEventHandler =
      (base64EncodedFiles: ReadonlyArray<Base64EncodedFile>) => Promise<Array<Base64EncodedFile>>;

}


export default FilesUploader;
