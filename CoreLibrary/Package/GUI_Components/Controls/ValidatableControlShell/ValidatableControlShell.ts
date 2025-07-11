/* eslint-disable no-underscore-dangle -- [ CONVENTION ]
* The instance fields begins from the underscore MUST be changed only via setters. */

/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentDynamicPartsHTML from "./ValidatableControlShell.parts.pug";
import validatableControlShellYDF_GUI_ComponentDOM_AccessResources from "./ValidatableControlShellDOM_AccessResources";
import ExpandingAnimation from "../../../Animations/ExpandingAnimation";
import CollapsingAnimation from "../../../Animations/CollapsingAnimation";

/* ─── Validation ─────────────────────────────────────────────────────────────────────────────────────────────────── */
import type InputtedValueValidation from "../_Validation/InputtedValueValidation";
import type ValidatableControl from "../_Validation/ValidatableControl";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import type { RootElementDefinition } from "../../../Logic/Types/RootElementDefinition";
import onDifferentValueAssigned from "../../_Auxiliaries/Decorators/onDifferentValueAssigned";
import {
  getExpectedToBeSingleDOM_Element,
  cloneDOM_Element,
  createDOM_ElementFromHTML_Code,
  resolveContextDOM_ElementPolymorphicSpecification
} from "@yamato-daiwa/es-extensions-browserjs";
import {
  Logger,
  InvalidParameterValueError,
  isUndefined,
  isNull
} from "@yamato-daiwa/es-extensions";


class ValidatableControlShell {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Accessing to DOM ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected static DOM_AccessResources: ValidatableControlShell.DOM_AccessResources =
      validatableControlShellYDF_GUI_ComponentDOM_AccessResources;

  protected static readonly ROOT_ELEMENT_CSS_CLASS: string = "ValidatableControlShell--YDF";


  /* ┅┅┅ Others Constants ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected static readonly ERRORS_LIST_EXPANDING_ANIMATION_DURATION_PER_ONE_ERROR_MESSAGE__SECONDS: number = 0.2;
  protected static readonly ERRORS_LIST_COLLAPSING_ANIMATION_DURATION__SECONDS: number = 0.1;
  protected static readonly ASYNCHRONOUS_VALIDATIONS_STATUSES_LIST_ANIMATION_DURATION_PER_ONE_ITEM__SECONDS: number = 0.2;


  /* ┅┅┅ Initialization on Demand ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected static dynamicPartsMasterCopy: DocumentFragment | null = null;

  protected static validationErrorsMessagesCollapsableList: HTMLElement;
  protected static validationErrorsMessagesCollapsableListEmptyItem: Element;

  protected static asynchronousValidationsStatusesCollapsableList: HTMLElement;
  protected static asynchronousValidationsStatusesCollapsableListInProgressStateEmptyItem: Element;
  protected static asynchronousValidationsStatusesCollapsableListInProgressSucceededAndValidStateEmptyItem: Element;
  protected static asynchronousValidationsStatusesCollapsableListInProgressMalfunctionStateEmptyItem: Element;


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ DOM Access ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public readonly rootElement: HTMLElement;


  /* ╍╍╍ Validation Errors Messages List ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  protected readonly validationErrorsMessagesCollapsableListMountingPoint: Element;

  protected readonly validationErrorsMessagesCollapsableList: HTMLElement = cloneDOM_Element({
    targetElement: ValidatableControlShell.validationErrorsMessagesCollapsableList,
    mustCopyAllChildren: false
  });

  protected readonly emptyValidationErrorMessagesListItem: Element = cloneDOM_Element({
    targetElement: ValidatableControlShell.validationErrorsMessagesCollapsableListEmptyItem,
    mustCopyAllChildren: false
  });


  /* ╍╍╍ Asynchronous Validations Statuses List ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  protected readonly asynchronousValidationsStatusesCollapsableListMountingPoint: Element;

  protected readonly asynchronousValidationsStatusesCollapsableList: HTMLElement = cloneDOM_Element({
    targetElement: ValidatableControlShell.asynchronousValidationsStatusesCollapsableList,
    mustCopyAllChildren: false
  });


  /* ─── Must be Changed Only via Setters or Constructor ──────────────────────────────────────────────────────────── */
  /* [ Approach ] ❶ Pre-initialized Reactive Fields ➝　❷ DOM Initialization ➝ ❸ DOM Manipulations via setters
   * Respective setters refer to each other and eponymous getters, thus the associated fields must be pre-initialized.
   * In constructor, only ❷ and ❸ steps will be executed. */
  protected _mustDisplayValidationErrorsMessagesIfAny: boolean = false;
  protected _validationErrorsMessages: ReadonlyArray<string> = [];


  /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static initializeOne(
    {
      mustDisplayErrorsMessagesIfAny,
      initialValidationErrorsMessages,
      ...initializationProperties
    }: Readonly<
      {
        mustDisplayErrorsMessagesIfAny: boolean;
        initialValidationErrorsMessages?: ReadonlyArray<string>;
      } &
      RootElementDefinition
    >
  ): ValidatableControlShell {

    if (isNull(ValidatableControlShell.dynamicPartsMasterCopy)) {
      ValidatableControlShell.initializeCommonDOM_Parts();
    }


    const contextElement: Element | ParentNode | null =
        resolveContextDOM_ElementPolymorphicSpecification(initializationProperties.contextElement);

    const rootElement: Element = initializationProperties.rootElement instanceof Element ?
        initializationProperties.rootElement :
        getExpectedToBeSingleDOM_Element({
          selector: initializationProperties.rootElement.selector,
          contextElement
        });

    if (!(rootElement instanceof HTMLElement)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "initializationProperties",
          messageSpecificPart:
              "The following root element definitely not belong to ValidatableControlShell, the YDF GUI component.\n" +
              cloneDOM_Element({ targetElement: rootElement, mustCopyAllChildren: false }).outerHTML
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "ValidatableControlShell.initializeOne(initializationProperties)"
      });
    }


    if (!rootElement.classList.contains(ValidatableControlShell.ROOT_ELEMENT_CSS_CLASS)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "initializationProperties",
          messageSpecificPart:
              "The root element passed directly or via selector must have the namespace CSS class " +
                `"${ ValidatableControlShell.ROOT_ELEMENT_CSS_CLASS }" while actually it has no.`
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "ValidatableControlShell.initializeOne(initializationProperties)"
      });
    }


    return new ValidatableControlShell({
      rootElement,
      mustDisplayErrorsMessagesIfAny,
      initialValidationErrorsMessages
    });

  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(
    {
      rootElement,
      mustDisplayErrorsMessagesIfAny,
      initialValidationErrorsMessages
    }: Readonly<{
      rootElement: HTMLElement;
      mustDisplayErrorsMessagesIfAny: boolean;
      initialValidationErrorsMessages?: ReadonlyArray<string>;
    }>
  ) {

    /* ┅┅┅ DOM ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    this.rootElement = rootElement;

    this.validationErrorsMessagesCollapsableListMountingPoint = getExpectedToBeSingleDOM_Element({
      selector: ValidatableControlShell.DOM_AccessResources.
          validationErrorsMessagesList.mountingPoint.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: this.rootElement
    });

    this.asynchronousValidationsStatusesCollapsableListMountingPoint = getExpectedToBeSingleDOM_Element({
      selector: ValidatableControlShell.DOM_AccessResources.
          asynchronousValidationsStatusesList.mountingPoint.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: this.rootElement
    });


    /* ┅┅┅ Reactivity ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    this.$validationErrorsMessages = initialValidationErrorsMessages ?? [];
    this.$mustDisplayValidationErrorsMessagesIfAny = mustDisplayErrorsMessagesIfAny;

  }


  /* ━━━ Public Instance Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public getRootElementOffsetCoordinates(): ValidatableControl.RootElementOffsetCoordinates {
    return {
      top: this.rootElement.offsetTop,
      left: this.rootElement.offsetLeft
    };
  }


  /* ━━━ Reactivity ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Validation Errors Displaying Flag ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public get $mustDisplayValidationErrorsMessagesIfAny(): boolean {
    return this._mustDisplayValidationErrorsMessagesIfAny;
  }

  @onDifferentValueAssigned()
  public set $mustDisplayValidationErrorsMessagesIfAny(_value: boolean) {

    if (this.$mustDisplayValidationErrorsMessagesIfAny) {

      if (!this.validationErrorsMessagesCollapsableList.isConnected) {

        if (this.$validationErrorsMessages.length > 0) {
          this.mountAndSlideDownErrorsMessagesList();
        }

      }

      return;

    }


    if (this.validationErrorsMessagesCollapsableList.isConnected) {
      this.collapseErrorsMessagesListAndUnmount({ mustClearValidationErrorsMessagesCollapsableListOnceAnimated: true });
    }

  }


  /* ┅┅┅ Validation Errors Messages ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public get $validationErrorsMessages(): ReadonlyArray<string> {
    return this._validationErrorsMessages;
  }

  @onDifferentValueAssigned()
  public set $validationErrorsMessages(_validationErrorsMessages: ReadonlyArray<string>) {

    if (!this.$mustDisplayValidationErrorsMessagesIfAny) {
      this.updateValidationErrorsMessagesCollapsableList();
      return;
    }


    if (this.validationErrorsMessagesCollapsableList.isConnected) {

      if (this._validationErrorsMessages.length > 0) {
        this.updateValidationErrorsMessagesCollapsableList();
      } else {
        this.collapseErrorsMessagesListAndUnmount({ mustClearValidationErrorsMessagesCollapsableListOnceAnimated: true });
      }

      return;

    }


    if (this._validationErrorsMessages.length > 0) {
      this.updateValidationErrorsMessagesCollapsableList();
      this.mountAndSlideDownErrorsMessagesList();
    }

  }


  /* ┅┅┅ Asynchronous Validations Status ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public set $asynchronousValidationsStatus(asynchronousValidationsStatus: InputtedValueValidation.AsynchronousChecks.Status) {

    this.asynchronousValidationsStatusesCollapsableList.innerHTML = "";

    for (const asynchronousCheck of Object.values(asynchronousValidationsStatus.checks)) {

      let asynchronousValidationsStatusesCollapsableListItemElement: Element | undefined;

      if (asynchronousCheck.isPending) {

        asynchronousValidationsStatusesCollapsableListItemElement = cloneDOM_Element({
          targetElement: ValidatableControlShell.asynchronousValidationsStatusesCollapsableListInProgressStateEmptyItem,
          mustCopyAllChildren: true
        });

      } else if (asynchronousCheck.hasValidValueBeenConfirmed) {

        asynchronousValidationsStatusesCollapsableListItemElement = cloneDOM_Element({
          targetElement: ValidatableControlShell.
              asynchronousValidationsStatusesCollapsableListInProgressSucceededAndValidStateEmptyItem,
          mustCopyAllChildren: true
        });

      } else if (asynchronousCheck.hasErrorOccurred) {

        asynchronousValidationsStatusesCollapsableListItemElement = cloneDOM_Element({
          targetElement: ValidatableControlShell.
              asynchronousValidationsStatusesCollapsableListInProgressMalfunctionStateEmptyItem,
          mustCopyAllChildren: true
        });

      }

      /* [ Approach ]
       * If an invalid value is confirmed (omitted `else`-block), the error message will be displayed at
       * `$validationErrorsMessages` instead, no need to duplicate it here.  */
      if (isUndefined(asynchronousValidationsStatusesCollapsableListItemElement)) {
        continue;
      }


      getExpectedToBeSingleDOM_Element({
        selector: ValidatableControlShell.DOM_AccessResources.asynchronousValidationsStatusesList.item.text.SELECTOR,
        contextElement: asynchronousValidationsStatusesCollapsableListItemElement
      }).textContent = asynchronousCheck.message;

      this.asynchronousValidationsStatusesCollapsableList.
          appendChild(asynchronousValidationsStatusesCollapsableListItemElement);

    }

    if (!this.asynchronousValidationsStatusesCollapsableList.isConnected) {

      this.asynchronousValidationsStatusesCollapsableListMountingPoint.
          replaceWith(this.asynchronousValidationsStatusesCollapsableList);

      this.asynchronousValidationsStatusesCollapsableList.style.display = "none";

      ExpandingAnimation.replaceNodeAndAnimate({
        nodeToReplace: this.asynchronousValidationsStatusesCollapsableListMountingPoint,
        targetElement: this.asynchronousValidationsStatusesCollapsableList,
        duration__seconds:
            ValidatableControlShell.ASYNCHRONOUS_VALIDATIONS_STATUSES_LIST_ANIMATION_DURATION_PER_ONE_ITEM__SECONDS *
                Object.entries(asynchronousValidationsStatus.checks).length,
        mustReturnPromise: false
      });

    }

  }


  /* ━━━ Protected Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected updateValidationErrorsMessagesCollapsableList(): void {
    this.validationErrorsMessagesCollapsableList.replaceChildren(
      ...this.$validationErrorsMessages.map(
          (errorMessage: string): Element => {

            const listItem: Element = cloneDOM_Element({
              targetElement: this.emptyValidationErrorMessagesListItem,
              mustCopyAllChildren: false
            });

            listItem.textContent = errorMessage;

            return listItem;

          }
      )
    );
  }

  protected mountAndSlideDownErrorsMessagesList(): void {
    ExpandingAnimation.replaceNodeAndAnimate({
      nodeToReplace: this.validationErrorsMessagesCollapsableListMountingPoint,
      targetElement: this.validationErrorsMessagesCollapsableList,
      duration__seconds: ValidatableControlShell.ERRORS_LIST_EXPANDING_ANIMATION_DURATION_PER_ONE_ERROR_MESSAGE__SECONDS *
          this.$validationErrorsMessages.length,
      mustReturnPromise: false
    });
  }

  protected collapseErrorsMessagesListAndUnmount(
    {
      mustClearValidationErrorsMessagesCollapsableListOnceAnimated
    }: Readonly<{ mustClearValidationErrorsMessagesCollapsableListOnceAnimated: boolean; }>
  ): void {
    CollapsingAnimation.animate({
      targetElement: this.validationErrorsMessagesCollapsableList,
      mustReplaceWithElementOnceComplete: this.validationErrorsMessagesCollapsableListMountingPoint,
      duration__seconds: ValidatableControlShell.ERRORS_LIST_COLLAPSING_ANIMATION_DURATION__SECONDS,
      mustReturnPromise: false,
      ...mustClearValidationErrorsMessagesCollapsableListOnceAnimated ?
          { callback: this.updateValidationErrorsMessagesCollapsableList.bind(this) } : null
    });
  }

  protected static initializeCommonDOM_Parts(): void {

    ValidatableControlShell.dynamicPartsMasterCopy = createDOM_ElementFromHTML_Code({
      HTML_Code: componentDynamicPartsHTML,
      rootDOM_ElementSubtype: HTMLTemplateElement
    }).content;


    /* ┅┅┅ Validation Errors Messages Collapsable List ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    ValidatableControlShell.validationErrorsMessagesCollapsableList = getExpectedToBeSingleDOM_Element({
      selector: ValidatableControlShell.DOM_AccessResources.validationErrorsMessagesList.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: ValidatableControlShell.dynamicPartsMasterCopy,
      expectedDOM_ElementSubtype: HTMLElement
    });

    ValidatableControlShell.validationErrorsMessagesCollapsableList.removeAttribute(
      ValidatableControlShell.DOM_AccessResources.validationErrorsMessagesList.DATA_ATTRIBUTE_KEY
    );

    ValidatableControlShell.validationErrorsMessagesCollapsableListEmptyItem = getExpectedToBeSingleDOM_Element({
      selector: ValidatableControlShell.DOM_AccessResources.validationErrorsMessagesList.item.SELECTOR,
      contextElement: ValidatableControlShell.validationErrorsMessagesCollapsableList
    });

    ValidatableControlShell.validationErrorsMessagesCollapsableListEmptyItem.removeAttribute(
      ValidatableControlShell.DOM_AccessResources.validationErrorsMessagesList.item.DATA_ATTRIBUTE_KEY
    );

    ValidatableControlShell.validationErrorsMessagesCollapsableListEmptyItem.remove();


    /* ┅┅┅ Asynchronous Validations Statuses Collapsable List ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    ValidatableControlShell.asynchronousValidationsStatusesCollapsableList = getExpectedToBeSingleDOM_Element({
      selector: ValidatableControlShell.DOM_AccessResources.asynchronousValidationsStatusesList.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: ValidatableControlShell.dynamicPartsMasterCopy,
      expectedDOM_ElementSubtype: HTMLElement
    });

    ValidatableControlShell.asynchronousValidationsStatusesCollapsableList.removeAttribute(
      ValidatableControlShell.DOM_AccessResources.asynchronousValidationsStatusesList.DATA_ATTRIBUTE_KEY
    );


    /* ─── Items ──────────────────────────────────────────────────────────────────────────────────────────────────── */
    ValidatableControlShell.asynchronousValidationsStatusesCollapsableListInProgressStateEmptyItem =
        getExpectedToBeSingleDOM_Element({
          selector: ValidatableControlShell.DOM_AccessResources.asynchronousValidationsStatusesList.item.byStates.
              inProgress.SELECTOR,
          contextElement: ValidatableControlShell.asynchronousValidationsStatusesCollapsableList
        });

    ValidatableControlShell.asynchronousValidationsStatusesCollapsableListInProgressStateEmptyItem.
        removeAttribute(
          ValidatableControlShell.DOM_AccessResources.asynchronousValidationsStatusesList.item.byStates.
              inProgress.DATA_ATTRIBUTE_KEY
        );

    ValidatableControlShell.asynchronousValidationsStatusesCollapsableListInProgressStateEmptyItem.remove();

    ValidatableControlShell.asynchronousValidationsStatusesCollapsableListInProgressSucceededAndValidStateEmptyItem =
        getExpectedToBeSingleDOM_Element({
          selector: ValidatableControlShell.DOM_AccessResources.asynchronousValidationsStatusesList.item.byStates.
              succeededAndValid.SELECTOR,
          contextElement: ValidatableControlShell.asynchronousValidationsStatusesCollapsableList
        });

    ValidatableControlShell.asynchronousValidationsStatusesCollapsableListInProgressSucceededAndValidStateEmptyItem.
        removeAttribute(
          ValidatableControlShell.DOM_AccessResources.asynchronousValidationsStatusesList.item.byStates.
              succeededAndValid.DATA_ATTRIBUTE_KEY
        );

    ValidatableControlShell.asynchronousValidationsStatusesCollapsableListInProgressSucceededAndValidStateEmptyItem.remove();

    ValidatableControlShell.asynchronousValidationsStatusesCollapsableListInProgressMalfunctionStateEmptyItem =
        getExpectedToBeSingleDOM_Element({
          selector: ValidatableControlShell.DOM_AccessResources.asynchronousValidationsStatusesList.item.byStates.
              malfunction.SELECTOR,
          contextElement: ValidatableControlShell.asynchronousValidationsStatusesCollapsableList
        });

    ValidatableControlShell.asynchronousValidationsStatusesCollapsableListInProgressMalfunctionStateEmptyItem.
        removeAttribute(
          ValidatableControlShell.DOM_AccessResources.asynchronousValidationsStatusesList.item.byStates.
              malfunction.DATA_ATTRIBUTE_KEY
        );

    ValidatableControlShell.asynchronousValidationsStatusesCollapsableListInProgressMalfunctionStateEmptyItem.remove();

    ValidatableControlShell.dynamicPartsMasterCopy.replaceChildren();

  }

}


namespace ValidatableControlShell {

  export type DOM_AccessResources = Readonly<{

    validationErrorsMessagesList: Readonly<{

      DATA_ATTRIBUTE_KEY: string;
      INTERNALLY_UNIQUE_SELECTOR: string;

      item: Readonly<{
        DATA_ATTRIBUTE_KEY: string;
        SELECTOR: string;
      }>;

      mountingPoint: Readonly<{
        DATA_ATTRIBUTE_KEY: string;
        INTERNALLY_UNIQUE_SELECTOR_WITHOUT_SCOPE_PSEUDO_CLASS: string;
        INTERNALLY_UNIQUE_SELECTOR: string;
      }>;

    }>;

    asynchronousValidationsStatusesList: Readonly<{

      DATA_ATTRIBUTE_KEY: string;
      INTERNALLY_UNIQUE_SELECTOR: string;

      item: Readonly<{

        DATA_ATTRIBUTE_KEY: string;
        SELECTOR: string;

        byStates: Readonly<{
          [
            keys in
                "inProgress" |
                "succeededAndValid" |
                "malfunction"
          ]: Readonly<{
            DATA_ATTRIBUTE_KEY: string;
            SELECTOR: string;
          }>;
        }>;

        text: Readonly<{
          DATA_ATTRIBUTE_KEY: string;
          SELECTOR: string;
        }>;

      }>;

      mountingPoint: Readonly<{
        DATA_ATTRIBUTE_KEY: string;
        INTERNALLY_UNIQUE_SELECTOR_WITHOUT_SCOPE_PSEUDO_CLASS: string;
        INTERNALLY_UNIQUE_SELECTOR: string;
      }>;

    }>;

  }>;

}


export default ValidatableControlShell;
