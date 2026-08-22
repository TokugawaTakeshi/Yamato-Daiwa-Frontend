/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  type ValidatableControlShellLocalization,
  ValidatableControlShellYDF_GUI_ComponentLocalization__English,
  InputtedValueValidation,
  replaceMarkdownBold,
  replaceMarkdownLink
} from "@yamato-daiwa/frontend";

/* ┅┅┅ Related GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import Badge from "../../Badge/BadgeLogic.vue";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator.vue";
import CheckmarkIcon__Circled__Filled from "../../../SVG_Icons/Checkmark/CheckmarkIcon__Circled__Filled.vue";
import MultiplicationSignIcon__Boxed__Filled from
    "../../../SVG_Icons/MultiplicationSign/MultiplicationSignIcon__Boxed__Filled.vue";

/* ┅┅┅ Validations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import VuePropertyValidator from "../../_VuePropertiesValidators/VuePropertyValidator";
import preventNullForOptionalVueProperty from "../../_Decorators/preventNullForOptionalVueProperty";
import NonEmptyStringVuePropertyValidator from "../../_VuePropertiesValidators/NonEmptyStringVuePropertyValidator";
import BooleanVuePropertyValidator from "../../_VuePropertiesValidators/BooleanVuePropertyValidator";
import ThemeVuePropertyValidator from "../../_VuePropertiesValidators/ThemeVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import DecorativeVariationVuePropertyValidator from "../../_VuePropertiesValidators/DecorativeVariationVuePropertyValidator";

/* ┅┅┅ Frameworks ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty,
  Watch as onVueComponentFieldUpdated
} from "vue-facing-decorator";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import YDF_ComponentsCoordinator from "../../YDF_ComponentsCoordinator";
import AccessibleFromTemplateAsNonReactive from "../../_Decorators/AccessibleFromTemplateAsNonReactive";
import {
  secondsToMilliseconds,
  isArrayOfCertainTypeElements,
  isNonEmptyString,
  isNotUndefined
} from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


@VueComponentConfiguration({
  name: ValidatableControlShell.CSS_NAMESPACE,
  components: {
    Badge,
    LoadingIndicator,
    CheckmarkIcon__Circled__Filled,
    MultiplicationSignIcon__Boxed__Filled
  }
})
class ValidatableControlShell extends VueComponent {

  public static CSS_NAMESPACE: string = "ValidatableControlShell--YDF";


  /* ━━━ Textual Elements ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        propertyName: "label",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly label?: string;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        propertyName: "guidance",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly guidance?: string;

  protected get formattedGuidance(): string | null {
    return isNotUndefined(this.guidance) ?
        replaceMarkdownLink(
          replaceMarkdownBold(
            this.guidance,
            (boldedContent: string): string =>
                `<span class="ValidatableControlShell--YDF-Guidance-AccentedFragment">${ boldedContent }</span>`
          ),
          ({ URI, anchorText }: Readonly<{ URI: string; anchorText: string; }>): string =>
            "<a " +
              "class=\"Link--YDF ValidatableControlShell--YDF-Guidance-Link\" " +
              `href="${ URI }" ` +
              "target=\"_blank\" " +
              "rel=\"noopener noreferrer nofollow\"" +
            ">" +
              anchorText +
            "</a>"
        ) :
        null;
  }


  /* ━━━ Inputting Requirement ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "required",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly required!: boolean;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "mustDisplayAppropriateBadgeIfInputIsRequired",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly mustDisplayAppropriateBadgeIfInputIsRequired!: boolean;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "mustDisplayAppropriateBadgeIfInputIsOptional",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly mustDisplayAppropriateBadgeIfInputIsOptional!: boolean;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge!: boolean;


  /* ━━━ HTML IDs ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        propertyName: "coreElementHTML_ID",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly coreElementHTML_ID?: string;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        propertyName: "labelElementHTML_ID",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly labelElementHTML_ID?: string;


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({
    default: (): ReadonlyArray<string> => [],
    validator: VuePropertyValidator.create({
      checker: (rawValue: unknown): boolean => isArrayOfCertainTypeElements(rawValue, isNonEmptyString),
      messageSpecificPart: "If specified, must be an array of non-empty strings.",
      propertyName: "mainSlotWrapperAdditionalCSS_Classes",
      componentName: ValidatableControlShell.CSS_NAMESPACE
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly mainSlotWrapperAdditionalCSS_Classes!: ReadonlyArray<string>;


  /* ━━━ Validation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  /* [ Approach ]
   * In this GUI component, the messages going from `asynchronousChecksStatus` items with
   *   `hasInvalidValueBeenConfirmed: true` are displaying with plain validation errors messages.
   * So the following 2 properties are related thus been declared nearly each other. */

  @VueProperty({
    default: (): ReadonlyArray<string> => [],
    validator: VuePropertyValidator.create({
      checker: (rawValue: unknown): boolean => isArrayOfCertainTypeElements(rawValue, isNonEmptyString),
      messageSpecificPart: "If specified, must be an array of non-empty strings.",
      propertyName: "validationErrorsMessages",
      componentName: ValidatableControlShell.CSS_NAMESPACE
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly validationErrorsMessages!: ReadonlyArray<string>;

  @VueProperty({
    type: InputtedValueValidation.AsynchronousChecks.Status,
    required: false
  })
  @preventNullForOptionalVueProperty
  protected readonly asynchronousChecksStatus?: InputtedValueValidation.AsynchronousChecks.Status;


  /* ┅┅┅ Errors List ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "mustDisplayErrorsMessagesIfAny",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly mustDisplayErrorsMessagesIfAny!: boolean;

  /* [ Theory ]
   * ● These messages may include the ones coming from `asynchronousChecksStatus` items with
   *   `hasInvalidValueBeenConfirmed: true`, not only from `validationErrorsMessages`.
   * ● For the correct conditional rendering, must keep messages until the sliding up animation ends. */
  protected validationErrorsMessagesForAnimating: ReadonlyArray<string> = [];

  protected static readonly ERRORS_LIST_EXPANDING_ANIMATION_DURATION_PER_ONE_ERROR_MESSAGE__SECONDS: number = 0.2;
  protected static readonly ERRORS_LIST_COLLAPSING_ANIMATION_DURATION__SECONDS: number = 0.1;

  protected get errorsListAnimationDuration__milliseconds(): number {
    return secondsToMilliseconds(
      this.validationErrorsMessages.length > 0 ?
          ValidatableControlShell.ERRORS_LIST_EXPANDING_ANIMATION_DURATION_PER_ONE_ERROR_MESSAGE__SECONDS *
              this.validationErrorsMessages.length :
          ValidatableControlShell.ERRORS_LIST_COLLAPSING_ANIMATION_DURATION__SECONDS *
              this.validationErrorsMessagesForAnimating.length
    );
  }

  @onVueComponentFieldUpdated("mustDisplayErrorsMessagesIfAny", { immediate: true })
  @onVueComponentFieldUpdated("validationErrorsMessages", { immediate: true })
  @onVueComponentFieldUpdated("asynchronousChecksStatus", { immediate: true })
  protected onValidationErrorsMessagesUpdated(): void {

    if (
      this.validationErrorsMessages.length > 0 ||
          this.asynchronousChecksStatus?.hasAtLeastOneInvalidValueBeenConfirmed === true
    ) {

      this.validationErrorsMessagesForAnimating = [
        ...this.validationErrorsMessages,
        ...this.asynchronousChecksStatus?.errorsMessages ?? []
      ];

      return;

    }


    setTimeout(
      (): void => {
        this.validationErrorsMessagesForAnimating = [];
      },
      this.errorsListAnimationDuration__milliseconds
    );

  }


  /* ┅┅┅ Validation Statuses List ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Content ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */

  protected actualForDisplayingAsynchronousChecksCopyForAnimating: InputtedValueValidation.AsynchronousChecks = {};

  protected get asynchronousChecksActualForDisplaying(): InputtedValueValidation.AsynchronousChecks {
    return Object.defineProperties<InputtedValueValidation.AsynchronousChecks>(
      {},
      Object.entries(this.asynchronousChecksStatus?.checks ?? {}).reduce(
        (
          propertyDescriptorMap: PropertyDescriptorMap,
          [ validationRuleName, asynchronousCheckStatus ]:
              Readonly<[string, InputtedValueValidation.AsynchronousCheck.Status]>
        ): PropertyDescriptorMap => {

          if (!asynchronousCheckStatus.hasInvalidValueBeenConfirmed) {
            propertyDescriptorMap[validationRuleName] = {
              value: asynchronousCheckStatus,
              configurable: false,
              enumerable: true,
              writable: false
            };
          }

          return propertyDescriptorMap;

        },
        {}
      )
    );
  }


  /* ╍╍╍ Animating Duration ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  protected static readonly ASYNCHRONOUS_VALIDATIONS_STATUSES_LIST_ANIMATION_DURATION_PER_ONE_ITEM__SECONDS: number = 0.2;
  protected static readonly ASYNCHRONOUS_VALIDATIONS_STATUSES_LIST_ANIMATION_COLLAPSING__SECONDS: number = 0.1;

  protected get asynchronousValidationsStatusesListAnimationDurationPerOneItem__milliseconds(): number {
    return secondsToMilliseconds(
        Object.entries(this.asynchronousChecksActualForDisplaying).length > 0 ?
            ValidatableControlShell.ASYNCHRONOUS_VALIDATIONS_STATUSES_LIST_ANIMATION_DURATION_PER_ONE_ITEM__SECONDS *
                Object.entries(this.asynchronousChecksActualForDisplaying).length :
            ValidatableControlShell.ASYNCHRONOUS_VALIDATIONS_STATUSES_LIST_ANIMATION_COLLAPSING__SECONDS *
                Object.entries(this.actualForDisplayingAsynchronousChecksCopyForAnimating).length
      );
  }

  @onVueComponentFieldUpdated("asynchronousChecksActualForDisplaying", { immediate: true })
  protected onAsynchronousChecksActualForDisplayingUpdated(): void {

    if (Object.entries(this.asynchronousChecksActualForDisplaying).length > 0) {
      this.actualForDisplayingAsynchronousChecksCopyForAnimating = { ...this.asynchronousChecksActualForDisplaying };
      return;
    }


    setTimeout(
      (): void => {
        this.actualForDisplayingAsynchronousChecksCopyForAnimating = {};
      },
      this.asynchronousValidationsStatusesListAnimationDurationPerOneItem__milliseconds
    );

  }


  /* ╍╍╍ CSS Classes ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */

  /* eslint-disable-next-line @typescript-eslint/class-methods-use-this --
   * Musts be non-static to be accessible from the template   */
  protected get asynchronousValidationsStatusesListItemSpecificCSS_Class():
      (asynchronousCheckStatus: InputtedValueValidation.AsynchronousCheck.Status) => string {
        return (asynchronousCheckStatus: InputtedValueValidation.AsynchronousCheck.Status): string => {

          if (asynchronousCheckStatus.isPending) {
            return "ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item__InProgressState";
          }


          return asynchronousCheckStatus.hasValidValueBeenConfirmed ?
              "ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item__SucceededAndValidState" :
              "ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item__MalfunctionState";

        };
      }

  /* ━━━ Conditional Rendering ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get mustDisplayRequiredInputBadge(): boolean {
    return this.required && this.mustDisplayAppropriateBadgeIfInputIsRequired;
  }

  protected get mustDisplayOptionalInputBadge(): boolean {
    return !this.required && this.mustDisplayAppropriateBadgeIfInputIsOptional;
  }

  protected get mustDisplayHeader(): boolean {
    return isNotUndefined(this.label) ||
      this.mustDisplayRequiredInputBadge ||
      this.mustDisplayOptionalInputBadge ||
      this.mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge;
  }


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: ValidatableControlShell.Themes = { regular: "REGULAR" };

  public static readonly selfAndChildrenComponentsThemesCorrespondence:
      { badge: { [ownThemeValue: string]: string; }; } =
          { badge: { [ValidatableControlShell.Themes.regular]: Badge.Themes.regular } };

  @VueProperty({
    default: ValidatableControlShell.Themes.regular,
    validator: ThemeVuePropertyValidator(ValidatableControlShell)
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  protected get badgeTheme(): string {
    return ValidatableControlShell.selfAndChildrenComponentsThemesCorrespondence.badge[this.theme];
  }

  public static defineThemes(
    ownAndChildrenThemesCorrespondenceDefinition: Readonly<{
      [ownThemeKey: string]: Readonly<{ badge: string; }>;
    }>
  ): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(
      ownAndChildrenThemesCorrespondenceDefinition, ValidatableControlShell
    );
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    ValidatableControlShell.areThemesCSS_ClassesCommon = true;
  }

  @VueProperty({
    default: ValidatableControlShell.areThemesCSS_ClassesCommon,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "areThemesCSS_ClassesCommon",
        componentName: ValidatableControlShell.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly areThemesCSS_ClassesCommon!: boolean;


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: ValidatableControlShell.GeometricVariations = {
    regular: "REGULAR",
    small: "SMALL"
  };

  public static readonly selfAndChildrenComponentsGeometricVariationsCorrespondence:
      { badge: { [ownGeometricVariationValue: string]: string; }; } =
          {
            badge: {

              [ValidatableControlShell.GeometricVariations.regular]: Badge.GeometricVariations.regular,

              /* [ Approach ]
               * `Badge__YDF.GeometricVariations.regular` is NOT a mistake because `Badge__YDF.GeometricVariations.small`
               *    is too small, while the actual size can be flexibly adjusted by relative CSS units.
               * */
              [ValidatableControlShell.GeometricVariations.small]: Badge.GeometricVariations.regular

            }
          };

  @VueProperty({
    default: ValidatableControlShell.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(ValidatableControlShell)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  protected get badgeGeometricVariation(): string {
    return ValidatableControlShell.selfAndChildrenComponentsGeometricVariationsCorrespondence.badge[this.geometricVariation];
  }

  public static defineGeometricVariations(
    ownAndChildrenGeometricVariationsAndCorrespondenceDefinition: Readonly<{
      [ownGeometricVariationKey: string]: Readonly<{ badge: string; }>;
    }>
  ): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(
      ownAndChildrenGeometricVariationsAndCorrespondenceDefinition, ValidatableControlShell
    );
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: ValidatableControlShell.DecorativeVariations = { regular: "REGULAR" };

  public static readonly selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      {
        requiredInputBadge: { [ownDecorativeVariationValue: string]: string; };
        optionalInputBadge: { [ownDecorativeVariationValue: string]: string; };
      } =
          {
            requiredInputBadge: {
              [ValidatableControlShell.DecorativeVariations.regular]: Badge.DecorativeVariations.veryCatchyBright
            },
            optionalInputBadge: {
              [ValidatableControlShell.DecorativeVariations.regular]: Badge.DecorativeVariations.modestlyCalmingBright
            }
          };

  @VueProperty({
    default: ValidatableControlShell.GeometricVariations.regular,
    validator: DecorativeVariationVuePropertyValidator(ValidatableControlShell)
  })
  protected readonly decorativeVariation!: string;

  protected get requiredInputBadgeDecorativeVariation(): string {
    return ValidatableControlShell.selfAndChildrenComponentsDecorativeVariationsCorrespondence.
        requiredInputBadge[this.decorativeVariation];
  }

  protected get optionalInputBadgeDecorativeVariation(): string {
    return ValidatableControlShell.selfAndChildrenComponentsDecorativeVariationsCorrespondence.
        optionalInputBadge[this.decorativeVariation];
  }

  public static defineDecorativeVariations(
    ownAndChildrenDecorativeVariationsAndCorrespondenceDefinition: Readonly<{
      [ownDecorativeVariationKey: string]: Readonly<{
        requiredInputBadge: string;
        optionalInputBadge: string;
      }>;
    }>
  ): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(
      ownAndChildrenDecorativeVariationsAndCorrespondenceDefinition, ValidatableControlShell
    );
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return YDF_ComponentsCoordinator.generateRootElementModifierCSS_Classes({
      CSS_Namespace: ValidatableControlShell.CSS_NAMESPACE,
      activeTheme: this.theme,
      allThemes: ValidatableControlShell.Themes,
      areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
      activeGeometricVariation: this.geometricVariation,
      allGeometricVariations: ValidatableControlShell.GeometricVariations,
      activeDecorativeVariation: this.decorativeVariation,
      allDecorativeVariations: ValidatableControlShell.DecorativeVariations
    });
  }


  /* ━━━ Non-reactive Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @AccessibleFromTemplateAsNonReactive
  protected static readonly Badge: typeof Badge = Badge;

  @AccessibleFromTemplateAsNonReactive
  protected static readonly LoadingIndicator: typeof LoadingIndicator = LoadingIndicator;

  @AccessibleFromTemplateAsNonReactive
  public static localization: ValidatableControlShellLocalization =
      ValidatableControlShellYDF_GUI_ComponentLocalization__English;


  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(inheritedComponent: object): object {
    return Object.defineProperties(
      inheritedComponent,
      {
        CSS_NAMESPACE: { value: ValidatableControlShell.CSS_NAMESPACE },
        Themes: { value: ValidatableControlShell.Themes },
        defineThemes: { value: ValidatableControlShell.defineThemes },
        GeometricVariations: { value: ValidatableControlShell.GeometricVariations },
        defineGeometricVariations: { value: ValidatableControlShell.defineGeometricVariations },
        DecorativeVariations: { value: ValidatableControlShell.DecorativeVariations },
        defineDecorativeVariations: { value: ValidatableControlShell.defineDecorativeVariations },
        localization: { value: ValidatableControlShell.localization }
      }
    );
  }

}


namespace ValidatableControlShell {

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    readonly small: "SMALL";
    [geometricVariationName: string]: string;
  };

  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    [decorativeVariationName: string]: string;
  };

}


export default ValidatableControlShell;
