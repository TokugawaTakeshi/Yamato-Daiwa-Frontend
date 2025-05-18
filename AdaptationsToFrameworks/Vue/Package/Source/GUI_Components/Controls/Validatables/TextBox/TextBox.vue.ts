/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./TextBox.vue.pug";

/* ─── Validations ─────────────────────────────────────────────────────────────────────────────────────── */
import preventNullForOptionalVueProperty from "../../../_Decorators/preventNullForOptionalVueProperty";
import NonEmptyStringVuePropertyValidator from "../../../_VuePropertiesValidators/NonEmptyStringVuePropertyValidator";
import ElementOfEnumerationVuePropertyValidator from "../../../_VuePropertiesValidators/ElementOfEnumerationVuePropertyValidator";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import InputtableControl from "../InputtableControl";
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell.vue";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Prop as VueProperty
} from "vue-facing-decorator";
import {
  isElementOfEnumeration,
  isNonNegativeInteger,
  type ElementOfPseudoEnumeration
} from "@yamato-daiwa/es-extensions";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import YDF_ComponentsCoordinator from "../../../YDF_ComponentsCoordinator";
import validateVuePropertyAndLogIfInvalid from "../../../_Utils/validateVuePropertyAndLogIfInvalid";


@VueComponentConfiguration({
  name: TextBox.CSS_NAMESPACE,
  template: componentVueTemplate,
  components: {
    ValidatableControlShell
  }
})
class TextBox extends InputtableControl {

  /* ━━━ Common Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static CSS_NAMESPACE: string = "TextBox--YDF";

  public static HTML_Types: TextBox.HTML_Types = {
    regular: "text",
    email: "email",
    number: "number",
    password: "password",
    phoneNumber: "tel",
    URI: "url"
  };


  /* ━━━ Component Common Parameters ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({
    default: TextBox.HTML_Types.regular,
    get validator(): VuePropertyValidator {
      return ElementOfEnumerationVuePropertyValidator({
        enumerationFullyQualifiedName: "Button.HTML_Types",
        enumeration: TextBox.HTML_Types,
        propertyName: "HTML_Type",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected HTML_Type!: ElementOfPseudoEnumeration<TextBox.HTML_Types>;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        propertyName: "placeholder",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly placeholder?: string;

  /** @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill */
  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        propertyName: "placeholder",
        isPropertyRequired: this.required === true,
        componentName: ValidatableControlShell.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly autocomplete?: string;


  /* ─── Multi Line Mode ──────────────────────────────────────────────────────────────────────────────────────────── */
  @VueProperty({ type: Boolean, default: false })
  @preventNullForOptionalVueProperty
  protected readonly multiline!: boolean;

  @VueProperty({ type: Boolean, default: true })
  @preventNullForOptionalVueProperty
  protected readonly autoResizingForMultilineMode!: boolean;


  /* ─── Invalid Value Prevention ─────────────────────────────────────────────────────────────────────────────────── */
  @VueProperty({
    type: Number,
    validator: validateVuePropertyAndLogIfInvalid({
      checker: isNonNegativeInteger,
      message: "If specified must be the positive integer or 0"
    })
  })
  @OptionalButNotNullableVueProperty
  protected readonly minimalCharactersCount?: number | null;

  @VueProperty({
    type: Number,
    validator: validateVuePropertyAndLogIfInvalid({
      checker: isNonNegativeInteger,
      message: "If specified must be the positive integer or 0"
    })
  })
  @OptionalButNotNullableVueProperty
  protected readonly maximalCharactersCount?: number | null;

  @VueProperty({
    type: Number,
    validator: validateVuePropertyAndLogIfInvalid({
      checker: isNonNegativeInteger,
      message: "If specified must be the positive integer or 0"
    })
  })
  @OptionalButNotNullableVueProperty
  protected readonly minimalNumericValue?: number | null;

  @VueProperty({
    type: Number,
    validator: validateVuePropertyAndLogIfInvalid({
      checker: isNonNegativeInteger,
      message: "If specified must be the positive integer or 0"
    })
  })
  @OptionalButNotNullableVueProperty
  protected readonly maximalNumericValue?: number | null;


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: ValidatableControlShell.Themes = { regular: "REGULAR" };

  @VueProperty({
    type: String,
    default: ValidatableControlShell.Themes.regular,
    validator: validateVuePropertyAndLogIfInvalid({
      checker: (rawValue: string): boolean => isElementOfEnumeration(rawValue, ValidatableControlShell.Themes),
      message:
          "Must be the one among values of `ValidatableControlShell.Themes` associative array including the ones " +
            "defined via `ValidatableControlShell.defineThemes()`."
    })
  })
  @OptionalButNotNullableVueProperty
  protected readonly theme!: string;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.defineThemes(themesNames, ValidatableControlShell);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    ValidatableControlShell.areThemesCSS_ClassesCommon = true;
  }

  @VueProperty({ type: Boolean, default: ValidatableControlShell.areThemesCSS_ClassesCommon })
  @OptionalButNotNullableVueProperty
  private readonly areThemesCSS_ClassesCommon!: boolean;


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly GeometricVariations: ValidatableControlShell.GeometricVariations = {
    regular: "REGULAR",
    small: "SMALL"
  };

  @VueProperty({
    type: String,
    default: ValidatableControlShell.GeometricVariations.regular,
    validator: validateVuePropertyAndLogIfInvalid({
      checker: (rawValue: string): boolean => isElementOfEnumeration(rawValue, ValidatableControlShell.GeometricVariations),
      message:
          "Must be the one among values of `ValidatableControlShell.GeometricVariations` associative array including the ones " +
            "defined via `ValidatableControlShell.defineGeometricVariations()`."
    })
  })
  @OptionalButNotNullableVueProperty
  protected readonly geometricVariation!: string;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.defineGeometricVariations(geometricVariationsNames, ValidatableControlShell);
  }


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly DecorativeVariations: ValidatableControlShell.DecorativeVariations = {
    regular: "REGULAR"
  };

  @VueProperty({
    type: String,
    default: ValidatableControlShell.DecorativeVariations.regular,
    validator: validateVuePropertyAndLogIfInvalid({
      checker: (rawValue: string): boolean => isElementOfEnumeration(rawValue, ValidatableControlShell.DecorativeVariations),
      message:
        "Must be the one among values of `ValidatableControlShell.DecorativeVariations` associative array including the ones " +
          "defined via `ValidatableControlShell.defineDecorativeVariations()`."
    })
  })
  protected readonly decorativeVariation!: string;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(decorativeVariationsNames, ValidatableControlShell);
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return YDF_ComponentsCoordinator.generateRootElementModifierCSS_Classes({
      CSS_Namespace: TextBox.CSS_NAMESPACE,
      activeTheme: this.theme,
      allThemes: TextBox.Themes,
      areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
      activeGeometricVariation: this.geometricVariation,
      allGeometricVariations: TextBox.GeometricVariations,
      activeDecorativeVariation: this.decorativeVariation,
      allDecorativeVariations: TextBox.DecorativeVariations,
      other: [
        ...this.multiline ? [ `${ TextBox.CSS_NAMESPACE }__Multiline` ] : [],
        ...this.disabled ? [ `${ TextBox.CSS_NAMESPACE }__DisabledState` ] : []
      ]
    });
  }

}


namespace TextBox {

  export type HTML_Types = Readonly<{
    regular: "text";
    email: "email";
    number: "number";
    password: "password";
    phoneNumber: "tel";
    URI: "url";
  }>;

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


export default TextBox;
