/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import Badge from "../../Badge/Badge";

/* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import React from "react";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import checkForNonEmptyStringReactProperties from "../../../ReactPropertiesValidators/checkForNonEmptyStringReactProperties";
import renderReactNodeIf from "../../../Utils/renderReactNodeIf";
import ComponentsAuxiliaries from "../../ComponentsAuxiliaries";
import {
  type InputtedValueValidation,
  replaceMarkdownBold,
  replaceMarkdownLink,
  type ValidatableControlShellLocalization,
  ValidatableControlShellYDF_GUI_ComponentLocalization__English
} from "@yamato-daiwa/frontend";
import {
  secondsToMilliseconds,
  isUndefined,
  isNotUndefined
} from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


class ValidatableControlShell extends React.Component<ValidatableControlShell.Properties, ValidatableControlShell.State> {

  /* ━━━ Common Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static CSS_NAMESPACE: string = "ValidatableControlShell--YDF";

  public static get defaultProps(): Required<
    Pick<
      ValidatableControlShell.Properties,
      "required" |
      "mustDisplayAppropriateBadgeIfInputIsRequired" |
      "mustDisplayAppropriateBadgeIfInputIsOptional" |
      "mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge" |
      "mainSlotWrapperAdditionalCSS_Classes" |
      "validationErrorsMessages" |
      "mustDisplayErrorsMessagesIfAny" |
      "theme" |
      "areThemesCSS_ClassesCommon" |
      "geometricVariation" |
      "rootElementAttributes"
    >
  > {
    return {
      required: false,
      mustDisplayAppropriateBadgeIfInputIsRequired: false,
      mustDisplayAppropriateBadgeIfInputIsOptional: false,
      mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge: false,
      mainSlotWrapperAdditionalCSS_Classes: [],
      validationErrorsMessages: [],
      mustDisplayErrorsMessagesIfAny: false,
      theme: ValidatableControlShell.Themes.regular,
      areThemesCSS_ClassesCommon: ValidatableControlShell.areThemesCSS_ClassesCommon,
      geometricVariation: ValidatableControlShell.GeometricVariations.regular,
      rootElementAttributes: {}
    };
  }

  public static localization: ValidatableControlShellLocalization =
      ValidatableControlShellYDF_GUI_ComponentLocalization__English;


  /* ━━━ State ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public readonly state: ValidatableControlShell.State = {
    isDisplaying: true
  };


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public constructor(properties: ValidatableControlShell.Properties) {

    super(properties);

    this.validateProperties();

    this.validationErrorsMessagesForAnimating = [ ...properties.validationErrorsMessages ];

  }


  /* ━━━ Lifecycle Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public override componentDidUpdate(): void {

    this.validateProperties();

  }


  /* ━━━ Properties Validation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private validateProperties(): void {
    checkForNonEmptyStringReactProperties({
      componentName: "ValidatableControlShell",
      propertiesData: [
        {
          name: "label",
          isRequiredOrHasDefaultValue: false,
          value: this.props.label
        },
        {
          name: "guidance",
          isRequiredOrHasDefaultValue: false,
          value: this.props.label
        },
        {
          name: "className",
          isRequiredOrHasDefaultValue: false,
          value: this.props.className
        }
      ]
    });
  }


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: ValidatableControlShell.Themes = { regular: "REGULAR" };

  public static readonly selfAndChildrenComponentsThemesCorrespondence:
      { badge: { [ownThemeValue: string]: string; }; } =
          { badge: { [ValidatableControlShell.Themes.regular]: Badge.Themes.regular } };

  protected get badgeTheme(): string {
    return ValidatableControlShell.selfAndChildrenComponentsThemesCorrespondence.badge[this.props.theme];
  }

  public static defineThemes(
    ownAndChildrenThemesCorrespondenceDefinition: Readonly<{
      [ownThemeKey: string]: Readonly<{ badge: string; }>;
    }>
  ): typeof ValidatableControlShell {
    return ComponentsAuxiliaries.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(
      ownAndChildrenThemesCorrespondenceDefinition, ValidatableControlShell
    );
  }

  public static areThemesCSS_ClassesCommon: boolean = ComponentsAuxiliaries.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    ValidatableControlShell.areThemesCSS_ClassesCommon = true;
  }


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

  protected get badgeGeometricVariation(): string {
    return ValidatableControlShell.selfAndChildrenComponentsGeometricVariationsCorrespondence.
        badge[this.props.geometricVariation];
  }

  public static defineGeometricVariations(
    ownAndChildrenGeometricVariationsAndCorrespondenceDefinition: Readonly<{
      [ownGeometricVariationKey: string]: Readonly<{ badge: string; }>;
    }>
  ): typeof ValidatableControlShell {
    return ComponentsAuxiliaries.defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(
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

  protected get requiredInputBadgeDecorativeVariation(): string {
    return ValidatableControlShell.selfAndChildrenComponentsDecorativeVariationsCorrespondence.
        requiredInputBadge[this.props.decorativeVariation];
  }

  protected get optionalInputBadgeDecorativeVariation(): string {
    return ValidatableControlShell.selfAndChildrenComponentsDecorativeVariationsCorrespondence.
        optionalInputBadge[this.props.decorativeVariation];
  }

  public static defineDecorativeVariations(
    ownAndChildrenDecorativeVariationsAndCorrespondenceDefinition: Readonly<{
      [ownDecorativeVariationKey: string]: Readonly<{
        requiredInputBadge: string;
        optionalInputBadge: string;
      }>;
    }>
  ): typeof ValidatableControlShell {
    return ComponentsAuxiliaries.defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(
      ownAndChildrenDecorativeVariationsAndCorrespondenceDefinition, ValidatableControlShell
    );
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return [

      ...ComponentsAuxiliaries.addThemeCSS_ClassToArrayIfMust({
        themeValue: this.props.theme,
        allThemes: ValidatableControlShell.Themes,
        areThemesCSS_ClassesCommon: this.props.areThemesCSS_ClassesCommon,
        CSS_Namespace: ValidatableControlShell.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.addGeometricVariationCSS_ClassToArrayIfMust({
        geometricVariation: this.props.geometricVariation,
        allGeometricVariations: ValidatableControlShell.GeometricVariations,
        CSS_Namespace: ValidatableControlShell.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.addDecorativeVariationCSS_ClassToArrayIfMust({
        decorativeVariation: this.props.decorativeVariation,
        allDecorativeVariations: ValidatableControlShell.DecorativeVariations,
        CSS_Namespace: ValidatableControlShell.CSS_NAMESPACE
      }),

      ...isNotUndefined(this.props.className) ? [ this.props.className ] : []

    ];
  }


  /* ━━━ Rendering ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public render(): React.ReactNode {

    return (
      <div className={ [ "ValidatableControlShell--YDF", ...this.rootElementModifierCSS_Classes ].join(" ") }>

        { this.header }

        <div
          className={
            [
              "ValidatableControlShell--YDF-MainSlotCustomizableWrapper",
              ...this.rootElementModifierCSS_Classes
            ].
                join(" ")
          }
        >
          { this.props.children }
        </div>

        {
          renderReactNodeIf(
            this.validationErrorsMessagesForAnimating.length > 0,
            (
              <ul className="ValidatableControlShell--YDF-ValidationErrorsMessagesList">
                {
                  this.validationErrorsMessagesForAnimating.map(
                    (validationErrorMessage: string): React.ReactNode  =>
                        (
                          <li
                            className="ValidatableControlShell--YDF-ValidationErrorsMessagesList-Item"
                            key={ validationErrorMessage }
                          >
                            { validationErrorMessage }
                          </li>
                        )
                  )
                }
              </ul>
            )
          )
        }

      </div>
    );

  }

  /* ┅┅┅ Header ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected get header(): React.ReactNode {

    if (
      isUndefined(this.props.label) &&
      !this.mustDisplayRequiredInputBadge &&
      !this.mustDisplayOptionalInputBadge &&
      !this.props.mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge
    ) {
      return null;
    }


    return (
      <div className="ValidatableControlShell--YDF-Header">

        {
          renderReactNodeIf(
            isNotUndefined(this.props.label),
            (
              <label
                className="ValidatableControlShell--YDF-Label"
                v-if="label"
                htmlFor=""
                id="">
              </label>
            )
          )
        }

        {
          renderReactNodeIf(
            this.mustDisplayRequiredInputBadge,
            (
              <Badge
                valueLabel={ ValidatableControlShell.localization.requirementBadges.required }
                theme={ this.badgeTheme }
                geometricVariation={ this.badgeGeometricVariation }
                geometricModifiers={ [ Badge.GeometricModifiers.pillShape ] }
                decorativeVariation={ this.requiredInputBadgeDecorativeVariation }
              />
            )
          )
        }

        {
          renderReactNodeIf(
            this.mustDisplayOptionalInputBadge,
            (
              <Badge
                valueLabel={ ValidatableControlShell.localization.requirementBadges.optional }
                theme={ this.badgeTheme }
                geometricVariation={ this.badgeGeometricVariation }
                geometricModifiers={ [ Badge.GeometricModifiers.pillShape ] }
                decorativeVariation={ this.optionalInputBadgeDecorativeVariation }
              />
            )
          )
        }

        {
          renderReactNodeIf(
            this.props.mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge,
            (
              <Badge
                valueLabel={ ValidatableControlShell.localization.requirementBadges.optional }
                theme={ this.badgeTheme }
                geometricVariation={ this.badgeGeometricVariation }
                geometricModifiers={ [ Badge.GeometricModifiers.pillShape ] }
                decorativeVariation={ Badge.DecorativeVariations.neutralPastel }
              />
            )
          )
        }

        {
          renderReactNodeIf(
            isNotUndefined(this.props.guidance),
            <p dangerouslySetInnerHTML={{ __html: this.formattedGuidance ?? "" }} />
          )
        }

      </div>
    );

  }

  protected get mustDisplayRequiredInputBadge(): boolean {
    return this.props.required && this.props.mustDisplayAppropriateBadgeIfInputIsRequired;
  }

  protected get mustDisplayOptionalInputBadge(): boolean {
    return !this.props.required && this.props.mustDisplayAppropriateBadgeIfInputIsOptional;
  }


  /* ╍╍╍ Guidance ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  protected cachedGuidance: Readonly<{
    notFormatted: string;
    formatted: string;
  }> = {
    notFormatted: "",
    formatted: ""
  };

  protected get formattedGuidance(): string | null {

    if (isUndefined(this.props.guidance)) {
      return null;
    }

    if (this.props.guidance === this.cachedGuidance.notFormatted) {
      return this.cachedGuidance.formatted;
    }

    this.cachedGuidance = {
      notFormatted: this.props.guidance,
      formatted:
          replaceMarkdownLink(
            replaceMarkdownBold(
              this.props.guidance,
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
        )
    };

    return this.cachedGuidance.formatted;

  }


  /* ┅┅┅ Errors List ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* [ Theory ]
   * ● These messages may include the ones coming from `asynchronousChecksStatus` items with
   *   `hasInvalidValueBeenConfirmed: true`, not only from `validationErrorsMessages`.
   * ● For the correct conditional rendering, must keep messages until the sliding up animation ends. */
  protected validationErrorsMessagesForAnimating: ReadonlyArray<string> = [];

  protected static readonly ERRORS_LIST_EXPANDING_ANIMATION_DURATION_PER_ONE_ERROR_MESSAGE__SECONDS: number = 0.2;
  protected static readonly ERRORS_LIST_COLLAPSING_ANIMATION_DURATION__SECONDS: number = 0.1;

  protected get errorsListAnimationDuration__milliseconds(): number {
    return secondsToMilliseconds(
      this.validationErrorsMessagesForAnimating.length > 0 ?
          ValidatableControlShell.ERRORS_LIST_EXPANDING_ANIMATION_DURATION_PER_ONE_ERROR_MESSAGE__SECONDS *
              this.validationErrorsMessagesForAnimating.length :
          ValidatableControlShell.ERRORS_LIST_COLLAPSING_ANIMATION_DURATION__SECONDS
    );
  }

  // @onVueComponentFieldUpdated("mustDisplayErrorsMessagesIfAny", { immediate: true })
  // @onVueComponentFieldUpdated("validationErrorsMessages", { immediate: true })
  // @onVueComponentFieldUpdated("asynchronousChecksStatus", { immediate: true })
  protected onValidationErrorsMessagesUpdated(): void {

    if (
      this.props.validationErrorsMessages.length > 0 ||
          this.props.asynchronousChecksStatus?.hasAtLeastOneInvalidValueBeenConfirmed === true
    ) {

      this.validationErrorsMessagesForAnimating = [
        ...this.props.validationErrorsMessages,
        ...this.props.asynchronousChecksStatus?.errorsMessages ?? []
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

}


namespace ValidatableControlShell {

  /* ━━━ Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type Properties = Readonly<{

    /* ┅┅┅ Textings ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    label?: string;
    guidance?: string;

    /* ┅┅┅ Inputting Requirement ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    required: boolean;
    mustDisplayAppropriateBadgeIfInputIsRequired: boolean;
    mustDisplayAppropriateBadgeIfInputIsOptional: boolean;
    mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge: boolean;

    /* ┅┅┅ HTML IDs ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    coreElementHTML_ID?: string;
    labelElementHTML_ID?: string;

    /* ┅┅┅ CSS Classes ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    mainSlotWrapperAdditionalCSS_Classes: ReadonlyArray<string>;

    /* ┅┅┅ Validation ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    validationErrorsMessages: ReadonlyArray<string>;
    mustDisplayErrorsMessagesIfAny: boolean;
    asynchronousChecksStatus?: InputtedValueValidation.AsynchronousChecks.Status;

    /* ┅┅┅ Theming ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    theme: string;
    areThemesCSS_ClassesCommon: boolean;
    geometricVariation: string;
    decorativeVariation: string;

    /* ┅┅┅ Other ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    className?: string;
    rootElementAttributes?: Omit<React.HTMLAttributes<HTMLDivElement>, "className">;
    children?: React.ReactNode;

  }>;

  export type State = Readonly<{
    isDisplaying: boolean;
  }>;

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    readonly small: "SMALL";
    [variationName: string]: string;
  };

  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    [variationName: string]: string;
  };

}

export default ValidatableControlShell;


//   /* ┅┅┅ Validation Statuses List ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
//   /* ╍╍╍ Content ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
//
//   protected actualForDisplayingAsynchronousChecksCopyForAnimating: InputtedValueValidation.AsynchronousChecks = {};
//
//   protected get asynchronousChecksActualForDisplaying(): InputtedValueValidation.AsynchronousChecks {
//     return Object.defineProperties<InputtedValueValidation.AsynchronousChecks>(
//       {},
//       Object.entries(this.asynchronousChecksStatus?.checks ?? {}).reduce(
//         (
//           propertyDescriptorMap: PropertyDescriptorMap,
//           [ validationRuleName, asynchronousCheckStatus ]:
//               Readonly<[string, InputtedValueValidation.AsynchronousCheck.Status]>
//         ): PropertyDescriptorMap => {
//
//           if (!asynchronousCheckStatus.hasInvalidValueBeenConfirmed) {
//             propertyDescriptorMap[validationRuleName] = {
//               value: asynchronousCheckStatus,
//               configurable: false,
//               enumerable: true,
//               writable: false
//             };
//           }
//
//           return propertyDescriptorMap;
//
//         },
//         {}
//       )
//     );
//   }
//
//
//   /* ╍╍╍ Animating Duration ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
//   protected static readonly ASYNCHRONOUS_VALIDATIONS_STATUSES_LIST_ANIMATION_DURATION_PER_ONE_ITEM__SECONDS: number = 0.2;
//   protected static readonly ASYNCHRONOUS_VALIDATIONS_STATUSES_LIST_ANIMATION_COLLAPSING__SECONDS: number = 0.1;
//
//   protected get asynchronousValidationsStatusesListAnimationDurationPerOneItem__milliseconds(): number {
//     return secondsToMilliseconds(
//         Object.entries(this.asynchronousChecksActualForDisplaying).length > 0 ?
//             ValidatableControlShell.ASYNCHRONOUS_VALIDATIONS_STATUSES_LIST_ANIMATION_DURATION_PER_ONE_ITEM__SECONDS *
//                 Object.entries(this.asynchronousChecksActualForDisplaying).length :
//             ValidatableControlShell.ASYNCHRONOUS_VALIDATIONS_STATUSES_LIST_ANIMATION_COLLAPSING__SECONDS *
//                 Object.entries(this.actualForDisplayingAsynchronousChecksCopyForAnimating).length
//       );
//   }
//
//   @onVueComponentFieldUpdated("asynchronousChecksActualForDisplaying", { immediate: true })
//   protected onAsynchronousChecksActualForDisplayingUpdated(): void {
//
//     if (Object.entries(this.asynchronousChecksActualForDisplaying).length > 0) {
//       this.actualForDisplayingAsynchronousChecksCopyForAnimating = { ...this.asynchronousChecksActualForDisplaying };
//       return;
//     }
//
//
//     setTimeout(
//       (): void => {
//         this.actualForDisplayingAsynchronousChecksCopyForAnimating = {};
//       },
//       this.asynchronousValidationsStatusesListAnimationDurationPerOneItem__milliseconds
//     );
//
//   }
//
//
//   /* ╍╍╍ CSS Classes ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
//
//   /* eslint-disable-next-line @typescript-eslint/class-methods-use-this --
//    * Musts be non-static to be accessible from the template   */
//   protected get asynchronousValidationsStatusesListItemSpecificCSS_Class():
//       (asynchronousCheckStatus: InputtedValueValidation.AsynchronousCheck.Status) => string {
//         return (asynchronousCheckStatus: InputtedValueValidation.AsynchronousCheck.Status): string => {
//
//           if (asynchronousCheckStatus.isPending) {
//             return "ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item__InProgressState";
//           }
//
//
//           return asynchronousCheckStatus.hasValidValueBeenConfirmed ?
//               "ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item__SucceededAndValidState" :
//               "ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item__MalfunctionState";
//
//         };
//       }
//

//     VerticallySlidingAlwaysMountedContainer.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList(
//       v-if="asynchronousChecksStatus"
//       :modelValue="Object.entries(actualForDisplayingAsynchronousChecksCopyForAnimating).length > 0"
//       tag="ul"
//       :duration="asynchronousValidationsStatusesListAnimationDurationPerOneItem__milliseconds"
//     )
//
//       li.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item(
//         v-for="(asynchronousCheckStatus, asynchronousCheckName) of actualForDisplayingAsynchronousChecksCopyForAnimating"
//         :key="asynchronousCheckName"
//         :class="asynchronousValidationsStatusesListItemSpecificCSS_Class(asynchronousCheckStatus)"
//       )
//
//         LoadingIndicator.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item-LoadingIndicator(
//           v-if="asynchronousCheckStatus.isPending"
//           :type="LoadingIndicator.Types.variableWidthArcSpinner"
//           :geometricVariation="LoadingIndicator.GeometricVariations.small"
//         )
//
//         CheckmarkIcon__Circled__Filled.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item-Icon(
//           v-else-if="asynchronousCheckStatus.hasValidValueBeenConfirmed"
//         )
//
//         MultiplicationSignIcon__Boxed__Filled.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item-Icon(
//           v-else-if="asynchronousCheckStatus.hasErrorOccurred"
//         )
//
//         p.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item-Text {{ asynchronousCheckStatus.message }}
//
// </template>
//
