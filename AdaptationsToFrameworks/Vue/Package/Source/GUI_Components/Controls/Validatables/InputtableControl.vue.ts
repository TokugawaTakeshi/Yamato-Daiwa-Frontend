/* ─── Validations ─────────────────────────────────────────────────────────────────────────────────────── */
import type VuePropertyValidator from "../../_VuePropertiesValidators/VuePropertyValidator";
import BooleanVuePropertyValidator from "../../_VuePropertiesValidators/BooleanVuePropertyValidator";
import NonEmptyStringVuePropertyValidator from "../../_VuePropertiesValidators/NonEmptyStringVuePropertyValidator";
import InvalidVuePropertiesCombinationError from
    "../../_Errors/InvalidVuePropertiesCombination/InvalidVuePropertiesCombinationError";
import preventNullForOptionalVueProperty from "../../_Decorators/preventNullForOptionalVueProperty";
import { type ValidatableControl } from "@yamato-daiwa/frontend";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import { Logger, isEitherUndefinedOrNull } from "@yamato-daiwa/es-extensions";


@VueComponentConfiguration({})
export default abstract class InputtableControl extends VueComponent {

  /* ━━━ Component Common Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Text Elements ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        isPropertyRequired: this.required === true,
        propertyName: "label",
        componentName: "(Inheritor of InputtableControl)"
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly label?: string;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        isPropertyRequired: this.required === true,
        propertyName: "accessibilityGuidance",
        componentName: "(Inheritor of InputtableControl)"
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly accessibilityGuidance?: string;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        isPropertyRequired: this.required === true,
        propertyName: "externalLabelHTML_ID",
        componentName: "(Inheritor of InputtableControl)"
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly externalLabelHTML_ID?: string;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        isPropertyRequired: this.required === true,
        propertyName: "guidance",
        componentName: "(Inheritor of InputtableControl)"
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly guidance?: string;


  /* ┅┅┅ Requirement ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "required",
        componentName: "(Inheritor of InputtableControl)",
        isPropertyRequired: this.required === true
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
        componentName: "(Inheritor of InputtableControl)",
        isPropertyRequired: this.required === true
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
        componentName: "(Inheritor of InputtableControl)",
        isPropertyRequired: this.required === true
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
        componentName: "(Inheritor of InputtableControl)",
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge!: boolean;


  /* ┅┅┅ State Limitations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "disabled",
        componentName: "(Inheritor of InputtableControl)",
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly disabled!: boolean;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "readonly",
        componentName: "(Inheritor of InputtableControl)",
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly readonly!: boolean;


  /* ━━━ State ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected abstract invalidInputHighlightingIfAnyValidationErrorsMessages: boolean;
  protected abstract validInputHighlightingIfNoErrorsMessages: boolean;


  /* ━━━ Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Public ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Partial Implementations of ValidatableControl Interface ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public highlightInvalidInput(): this {
    this.invalidInputHighlightingIfAnyValidationErrorsMessages = true;
    return this;
  }

  public getRootElementOffsetCoordinates(): ValidatableControl.RootElementOffsetCoordinates {

    /* [ Specification ]
     * The inputtable control must have a single root element.
     * For YDF components, it is basically ValidatableControlShell. */
    const rootElement: HTMLElement = this.$el;

    return {
      top: rootElement.offsetTop,
      left: rootElement.offsetLeft
    };

  }

  public resetStateToInitial(): void {
    Object.assign(this.$data, this.$options.data?.({}));
  }


  /* ╍╍╍ Lifecycle Hooks ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  protected beforeCreate(): void {
    InputtableControl.validateProperties(this);
  }

  protected beforeUpdate(): void {
    InputtableControl.validateProperties(this);
  }


  /* ┅┅┅ Protected ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /** @descriptioin
   * Validation with referencing of multiple properties is possible only via lifecycle hooks.
   * This method is static because non-static methods are not accessible from the viewpoint of "vue-facing-decorator" */
  protected static validateProperties(instance: InputtableControl): void {

    const inheritedComponentNameForLogging: string = instance.$options.name ?? "(Unnamed component)";

    if (
      isEitherUndefinedOrNull(instance.label) &&
      isEitherUndefinedOrNull(instance.accessibilityGuidance) &&
      isEitherUndefinedOrNull(instance.externalLabelHTML_ID)
    ) {
      Logger.logError({
        errorType: InvalidVuePropertiesCombinationError.NAME,
        title: InvalidVuePropertiesCombinationError.localization.defaultTitle,
        description: InvalidVuePropertiesCombinationError.localization.generateMessage({
          vueComponentName: inheritedComponentNameForLogging,
          messageSpecificPart:
              "From the accessibility requirements, one of next properties must be specified:\n" +
              "● label\n" +
              "● accessibilityGuidance\n" +
              "● externalLabelHTML_ID"
        }),
        occurrenceLocation: `${ inheritedComponentNameForLogging }.beforeCreate()`
      });
    }

  }

}
