/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  Logger,
  isNonEmptyString,
  isEitherUndefinedOrNull
} from "@yamato-daiwa/es-extensions";
import InvalidVuePropertiesCombinationError from
    "../../_Errors/InvalidVuePropertiesCombination/InvalidVuePropertiesCombinationError";
import OptionalButNotNullableVueProperty from "../../_Decorators/OptionalButNotNullableVueProperty";
import validateVuePropertyAndLogIfInvalid from "../../_Utils/validateVuePropertyAndLogIfInvalid";


@VueComponentConfiguration({})
export default class InputtableControl extends VueComponent {

  /* ━━━ Component Common Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Textings ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  @VueProperty({
    validator: validateVuePropertyAndLogIfInvalid({
      checker: isNonEmptyString,
      message: "If string specified it must be non-empty"
    })
  })
  @OptionalButNotNullableVueProperty
  protected readonly label?: string;

  @VueProperty({
    validator: validateVuePropertyAndLogIfInvalid({
      checker: isNonEmptyString,
      message: "If string specified it must be non-empty"
    })
  })
  @OptionalButNotNullableVueProperty
  protected readonly accessibilityGuidance?: string;

  @VueProperty({
    validator: validateVuePropertyAndLogIfInvalid({
      checker: isNonEmptyString,
      message: "If string specified it must be non-empty"
    })
  })
  @OptionalButNotNullableVueProperty
  protected readonly externalLabelHTML_ID?: string;

  @VueProperty({
    validator: validateVuePropertyAndLogIfInvalid({
      checker: isNonEmptyString,
      message: "If string specified it must be non-empty"
    })
  })
  @OptionalButNotNullableVueProperty
  protected readonly guidance?: string;


  /* ─── Requirement ──────────────────────────────────────────────────────────────────────────────────────────────── */
  @VueProperty({ type: Boolean, default: false })
  @OptionalButNotNullableVueProperty
  protected readonly required!: boolean;

  @VueProperty({ type: Boolean, default: false })
  @OptionalButNotNullableVueProperty
  protected readonly mustDisplayAppropriateBadgeIfInputIsRequired!: boolean;

  @VueProperty({ type: Boolean, default: false })
  @OptionalButNotNullableVueProperty
  protected readonly mustDisplayAppropriateBadgeIfInputIsOptional!: boolean;

  @VueProperty({ type: Boolean, default: false })
  @OptionalButNotNullableVueProperty
  protected readonly mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge!: boolean;


  /* ─── State Limitations ─────────────────────────────────────────────────────────────────────────────────────────── */
  @VueProperty({ type: Boolean, default: false })
  @OptionalButNotNullableVueProperty
  protected readonly disabled!: boolean;

  @VueProperty({ type: Boolean, default: false })
  @OptionalButNotNullableVueProperty
  protected readonly readonly!: boolean;
  /* === State ====================================================================================================== */
  protected invalidInputHighlightingIfAnyValidationErrorsMessages: boolean = false;
  protected validInputHighlightingIfAnyErrorsMessages: boolean = false;


  /* === Methods ==================================================================================================== */
  public highlightInvalidInput(): this {
    this.invalidInputHighlightingIfAnyValidationErrorsMessages = true;
    return this;
  }

  public getRootElement(): Element {
    return this.$el;
  }

  public resetStateToInitial(): void {
    Object.assign(this.$data, this.$options.data?.({}));
  }


  /* === Livecycle hooks ========================================================================================== */
  public beforeCreate(): void {

    const inheritedComponentNameForLogging: string = this.$options.name ?? "(Unnamed component)";

    if (
      isEitherUndefinedOrNull(this.label) &&
      isEitherUndefinedOrNull(this.accessibilityGuidance) &&
      isEitherUndefinedOrNull(this.externalLabelHTML_ID)
    ) {
      Logger.logError({
        errorType: InvalidVuePropertiesCombinationError.NAME,
        title: InvalidVuePropertiesCombinationError.localization.defaultTitle,
        description: InvalidVuePropertiesCombinationError.localization.generateMessage({
          vueComponentName: inheritedComponentNameForLogging,
          messageSpecificPart: "From the accessibility requirements, one of next properties must be specified:\n" +
              "● label\n● accessibilityGuidance\n● externalLabelHTML_ID"

        }),
        occurrenceLocation: `${ inheritedComponentNameForLogging }.beforeCreate()`
      });
    }

  }

}
