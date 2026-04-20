/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import ValidatableControlShell from "../ValidatableControlShellLogic.vue";
import Badge from "../../../Badge/BadgeLogic.vue";

/* ─── Validations ────────────────────────────────────────────────────────────────────────────────────────────────── */
import VuePropertyValidator from "../../../_VuePropertiesValidators/VuePropertyValidator";
import ThemeVuePropertyValidator from "../../../_VuePropertiesValidators/ThemeVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../../../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import preventNullForOptionalVueProperty from "../../../_Decorators/preventNullForOptionalVueProperty";
import BooleanVuePropertyValidator from "../../../_VuePropertiesValidators/BooleanVuePropertyValidator";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import AccessibleFromTemplateAsNonReactive from "../../../_Decorators/AccessibleFromTemplateAsNonReactive";
import YDF_ComponentsCoordinator from "../../../YDF_ComponentsCoordinator";
import { isArrayOfCertainTypeElements, isNonEmptyString } from "@yamato-daiwa/es-extensions";


@VueComponentConfiguration({ name: "ValidatableControlShell--YDF__LoadingPlaceholder" })
export default class ValidatableControlShellLoadingPlaceholder extends VueComponent {

  /* ━━━ Component Common Properties and Related Getters ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "label",
        isPropertyRequired: this.required === true,
        componentName: "ValidatableControlShell--YDF__LoadingPlaceholder"
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly label!: boolean;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "guidance",
        isPropertyRequired: this.required === true,
        componentName: "ValidatableControlShell--YDF__LoadingPlaceholder"
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly guidance!: boolean;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "badge",
        isPropertyRequired: this.required === true,
        componentName: "ValidatableControlShell--YDF__LoadingPlaceholder"
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly badge!: boolean;

  @VueProperty({
    default: (): ReadonlyArray<string> => [],
    validator: VuePropertyValidator.create({
      checker: (rawValue: unknown): boolean => isArrayOfCertainTypeElements(rawValue, isNonEmptyString),
      messageSpecificPart: "If specified, must be an array of non-empty strings.",
      propertyName: "mainSlotWrapperAdditionalCSS_Classes",
      componentName: "ValidatableControlShell--YDF__LoadingPlaceholder"
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly mainSlotWrapperAdditionalCSS_Classes!: ReadonlyArray<string>;

  @VueProperty({
    type: String,
    default: ValidatableControlShell.Themes.regular,
    validator: ThemeVuePropertyValidator({
      Themes: ValidatableControlShell.Themes,
      CSS_NAMESPACE: "ValidatableControlShell--YDF__LoadingPlaceholder"
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  protected get badgeTheme(): string {
    return ValidatableControlShell.selfAndChildrenComponentsThemesCorrespondence.badge[this.theme];
  }

  @VueProperty({ type: Boolean, default: ValidatableControlShell.areThemesCSS_ClassesCommon })
  @preventNullForOptionalVueProperty
  protected readonly areThemesCSS_ClassesCommon!: boolean;

  @VueProperty({
    type: String,
    default: ValidatableControlShell.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator({
      GeometricVariations: ValidatableControlShell.GeometricVariations,
      CSS_NAMESPACE: "ValidatableControlShell--YDF__LoadingPlaceholder"
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  protected get badgeGeometricVariation(): string {
    return ValidatableControlShell.selfAndChildrenComponentsGeometricVariationsCorrespondence.badge[this.geometricVariation];
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
      allDecorativeVariations: ValidatableControlShell.DecorativeVariations
    });
  }


  /* ━━━ Non-reactive Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @AccessibleFromTemplateAsNonReactive
  protected static readonly Badge: typeof Badge = Badge;

}
