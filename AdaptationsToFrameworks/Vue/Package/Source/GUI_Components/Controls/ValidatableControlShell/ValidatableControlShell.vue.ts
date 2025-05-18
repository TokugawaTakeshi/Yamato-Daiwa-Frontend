import { Vue3SlideUpDown as VerticallySlidingAlwaysMountedContainer } from "vue3-slide-up-down";

/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./ValidatableControlShell.vue.pug";
import {
  type ValidatableControlShellLocalization,
  validatableControlShellYDF_ComponentLocalization__english
} from "@yamato-daiwa/frontend";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import Badge from "../../Badge/Badge.vue";

/* ─── Validations ────────────────────────────────────────────────────────────────────────────────────────────────── */
import VuePropertyValidator from "../../_VuePropertiesValidators/VuePropertyValidator";
import BooleanVuePropertyValidator from "../../_VuePropertiesValidators/BooleanVuePropertyValidator";
import ThemeVuePropertyValidator from "../../_VuePropertiesValidators/ThemeVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import DecorativeVariationVuePropertyValidator from "../../_VuePropertiesValidators/DecorativeVariationVuePropertyValidator";
import NonEmptyStringVuePropertyValidator from "../../_VuePropertiesValidators/NonEmptyStringVuePropertyValidator";
import preventNullForOptionalVueProperty from "../../_Decorators/preventNullForOptionalVueProperty";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty,
  Watch as onVueComponentFieldUpdated
} from "vue-facing-decorator";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import YDF_ComponentsCoordinator from "../../YDF_ComponentsCoordinator";
import {
  secondsToMilliseconds,
  isNeitherUndefinedNorNull,
  isArrayOfCertainTypeElements,
  isNonEmptyString
} from "@yamato-daiwa/es-extensions";


@VueComponentConfiguration({
  name: ValidatableControlShell.CSS_NAMESPACE,
  template: componentVueTemplate,
  components: {
    VerticallySlidingAlwaysMountedContainer
  }
})
class ValidatableControlShell extends VueComponent {

  public static CSS_NAMESPACE: string = "ValidatableControlShell--YDF";


  /* ━━━ Component Common Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Textings ─────────────────────────────────────────────────────────────────────────────────────────────────── */
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

  /* ─── Inputting Requirement ────────────────────────────────────────────────────────────────────────────────────── */
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


  /* ─── HTML IDs ─────────────────────────────────────────────────────────────────────────────────────────────────── */
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


  /* ─── Displaying of Validation Messages ────────────────────────────────────────────────────────────────────────── */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "invalidInputHighlightingIfAnyValidationErrorsMessages",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly invalidInputHighlightingIfAnyValidationErrorsMessages!: boolean;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "validValueHighlightingIfNoValidationErrorsMessages",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly validValueHighlightingIfNoValidationErrorsMessages!: boolean;


  /* ─── CSS Classes ──────────────────────────────────────────────────────────────────────────────────────────────── */
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


  /* ━━━ Validation Errors Messages ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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

  /* [ Theory ]
   * Even if `validationErrorsMessages` has become to empty array, the validation errors messages are still
   *   require to animate the expanding. */
  protected validationErrorsMessagesCopyForAnimating: ReadonlyArray<string> = [ ...this.validationErrorsMessages ];

  protected static readonly ERRORS_LIST_EXPANDING_ANIMATION_DURATION_PER_ONE_ERROR_MESSAGE__SECONDS: number = 0.2;
  protected static readonly ERRORS_LIST_COLLAPSING_ANIMATION_DURATION__SECONDS: number = 0.2;

  @onVueComponentFieldUpdated("validationErrorsMessages")
  protected onValidationErrorsMessagesUpdated(newValidationErrorsMessages: ReadonlyArray<string>): void {

    if (newValidationErrorsMessages.length > 0) {
      this.validationErrorsMessagesCopyForAnimating = [ ...newValidationErrorsMessages ];
      return;
    }


    setTimeout(
      (): void => {
        this.validationErrorsMessagesCopyForAnimating = [];
      },
      secondsToMilliseconds(ValidatableControlShell.ERRORS_LIST_COLLAPSING_ANIMATION_DURATION__SECONDS)
    );

  }


  /* ━━━ Conditional Rendering ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private get mustDisplayRequiredInputBadge(): boolean {
    return this.required && this.mustDisplayAppropriateBadgeIfInputIsRequired;
  }

  private get mustDisplayOptionalInputBadge(): boolean {
    return this.required && this.mustDisplayAppropriateBadgeIfInputIsOptional;
  }

  protected get mustDisplayHeader(): boolean {
    return isNeitherUndefinedNorNull(this.label) ||
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
    ownAndCorrespondingValidatableControlShellThemesDefinition: { [ ownThemeKey: string ]: { badge: string; }; }
  ): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(
      ownAndCorrespondingValidatableControlShellThemesDefinition, ValidatableControlShell
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
  private readonly areThemesCSS_ClassesCommon!: boolean;


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly GeometricVariations: ValidatableControlShell.GeometricVariations = {
    regular: "REGULAR",
    small: "SMALL"
  };

  @VueProperty({
    default: ValidatableControlShell.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(ValidatableControlShell)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.defineGeometricVariations(geometricVariationsNames, ValidatableControlShell);
  }


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly DecorativeVariations: ValidatableControlShell.DecorativeVariations = {
    regular: "REGULAR"
  };

  @VueProperty({
    default: ValidatableControlShell.GeometricVariations.regular,
    validator: DecorativeVariationVuePropertyValidator(ValidatableControlShell)
  })
  protected readonly decorativeVariation!: string;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(decorativeVariationsNames, ValidatableControlShell);
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


  /* ━━━ Lifecycle Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public created(): void {
    this.initializeNonReactiveClassFields();
  }


  /* ━━━ Non-reactive Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: ValidatableControlShellLocalization = validatableControlShellYDF_ComponentLocalization__english;
  protected localization!: ValidatableControlShellLocalization;

  private initializeNonReactiveClassFields(): void {
    this.localization = ValidatableControlShell.localization;
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
