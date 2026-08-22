/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import React from "react";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import ComponentsAuxiliaries from "../../../ComponentsAuxiliaries";
import checkForNonEmptyStringReactProperties from "../../../../_ReactPropertiesValidators/checkForNonEmptyStringReactProperties";
import InvalidReactPropertyError from "../../../../_Errors/InvalidVueProperty/InvalidReactPropertyError";
import { Logger, isNotUndefined, isString, isNumber } from "@yamato-daiwa/es-extensions";


class Button extends React.Component<Button.Properties> {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly CSS_NAMESPACE: string = "Button--YDF";

  public static get defaultProps(): Required<
    Pick<
      Button.Properties,
      "HTML_Type" |
      "disabled" |
      "toggled" |
      "theme" |
      "areThemesCSS_ClassesCommon" |
      "geometricVariation" |
      "geometricModifiers" |
      "decorativeVariation" |
      "decorativeModifiers" |
      "mustOpenLinkInNewTab" |
      "mustRequestNotFollowLinkForCrawlingToSearchEngine" |
      "SVG_IconCSS_Classes"
    >
  > {
    return {
      HTML_Type: Button.HTML_Types.regular,
      mustOpenLinkInNewTab: false,
      mustRequestNotFollowLinkForCrawlingToSearchEngine: false,
      disabled: false,
      toggled: false,
      theme: Button.Themes.regular,
      areThemesCSS_ClassesCommon: Button.areThemesCSS_ClassesCommon,
      geometricVariation: Button.GeometricVariations.regular,
      geometricModifiers: [],
      decorativeVariation: Button.DecorativeVariations.regular,
      decorativeModifiers: [],
      SVG_IconCSS_Classes: []
    };
  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public constructor(properties: Button.Properties) {
    super(properties);
    this.validateProperties();
  }

  /* ━━━ Lifecycle Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public override componentDidUpdate(): void {
    this.validateProperties();
  }


  /* ━━━ Properties Validation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private validateProperties(): void {
    checkForNonEmptyStringReactProperties({
      componentName: "Button",
      propertiesData: [
        ...isNumber(this.props.label, { mustConsiderNaN_AsNumber: false }) ?
            [] :
            [
              {
                name: "label",
                isRequiredOrHasDefaultValue: false,
                value: this.props.label
              }
            ],
        {
          name: "accessibilityGuidance",
          isRequiredOrHasDefaultValue: false,
          value: this.props.accessibilityGuidance
        },
        {
          name: "externalURI",
          isRequiredOrHasDefaultValue: false,
          value: this.props.externalURI
        },
        {
          name: "className",
          isRequiredOrHasDefaultValue: false,
          value: this.props.className
        }
      ]
    });
  }


  /* ━━━ Link Rendered ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* [ Implementation example ] Next.js link (the type of `to` property is different with `href` of "react-router-dom"'s link).
   *  protected get customRouterLink(): React.ReactElement {
   *    return (
   *      <NextJS_Link
   *        href={ this.props.nextJS_LinkRoute }
   *        { ...this.props.mustOpenURI_OnNewTab ? { target: "_blank" } : null }
   *        aria-label={ this.props.accessibilityGuidance }
   *        aria-disabled={ this.props.disabled }
   *        aria-pressed={ this.props.toggled }
   *        tabIndex={ this.props.disabled ? -1 : 0 }
   *        className={ this.rootElementCSS_Classes.join(" ") }
   *      >
   *        { this.childrenElements }
   *      </NextJS_Link>
   *    );
   * }
   * */
  public static internalLinkRenderer: Button.LinkRenderer =
      (
        route: string | object,
        requiredAttributes: React.RefAttributes<HTMLAnchorElement>,
        childrenElements: React.ReactNode
      ): React.ReactNode =>
          (
            isString(route) ?
                 (
                  <a
                    href={ route }
                    { ...requiredAttributes }
                  >
                    { childrenElements }
                  </a>
                ) :
                ((): never => {
                  Logger.throwErrorWithFormattedMessage({
                    errorInstance: new InvalidReactPropertyError({
                      componentName: "Button",
                      propertyName: "route",
                      messageSpecificPart: "Default link renderer does not support the object-type routes."
                    }),
                    title: InvalidReactPropertyError.localization.defaultTitle,
                    occurrenceLocation: "Button.internalLinkRenderer(route, requiredAttributes, childrenElements)"
                  });
                })()
          );


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: Button.Themes = { regular: "REGULAR" };

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof Button {
    return ComponentsAuxiliaries.defineThemes(themesNames, Button);
  }

  public static areThemesCSS_ClassesCommon: boolean = ComponentsAuxiliaries.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    Button.areThemesCSS_ClassesCommon = true;
  }


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly GeometricVariations: Button.GeometricVariations = {
    regular: "REGULAR",
    small: "SMALL",
    linkLike: "LINK_LIKE"
  };

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof Button {
    return ComponentsAuxiliaries.defineGeometricVariations(geometricVariationsNames, Button);
  }


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly DecorativeVariations: Button.DecorativeVariations = {
    regular: "REGULAR",
    accented: "ACCENTED",
    danger: "DANGER",
    linkLike: "LINK_LIKE"
  };

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof Button {
    return ComponentsAuxiliaries.defineDecorativeVariations(decorativeVariationsNames, Button);
  }


  /* ━━━ Root Element Attributes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get typeAttributeValueOfButtonOrInputElement(): "button" | "submit" | "reset" {

    /* eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check --
     * Not intended to be used when `this.props.HTML_Type` is `undefined` (when the target HTML element is `a`), but
     *   throwing of exception from `getter` is unsafe. Using `default` block instead.
     * */
    switch (this.props.HTML_Type) {

      case Button.HTML_Types.submit:
      case Button.HTML_Types.inputSubmit:

        return "submit";


      case Button.HTML_Types.inputReset: return "reset";

      default: return "button";

    }

  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementCSS_Classes(): ReadonlyArray<string> {
    return [

      Button.CSS_NAMESPACE,

      ...ComponentsAuxiliaries.addThemeCSS_ClassToArrayIfMust({
        themeValue: this.props.theme,
        allThemes: Button.Themes,
        areThemesCSS_ClassesCommon: this.props.areThemesCSS_ClassesCommon,
        CSS_Namespace: Button.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.addGeometricVariationCSS_ClassToArrayIfMust({
        geometricVariation: this.props.geometricVariation,
        allGeometricVariations: Button.GeometricVariations,
        CSS_Namespace: Button.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.
          generateDemandedGeometricModifiersCSS_Classes(Button.CSS_NAMESPACE, this.props.geometricModifiers),

      ...ComponentsAuxiliaries.addDecorativeVariationCSS_ClassToArrayIfMust({
        decorativeVariation: this.props.decorativeVariation,
        allDecorativeVariations: Button.DecorativeVariations,
        CSS_Namespace: Button.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.
          generateDemandedDecorativeModifiersCSS_Classes(Button.CSS_NAMESPACE, this.props.decorativeModifiers),

      ...isNotUndefined(this.props.className) ? [ this.props.className ] : []

    ];
  }


  /* ━━━ Events Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected onClick(event: React.MouseEvent<HTMLButtonElement | HTMLInputElement>): void {
    event.preventDefault();
    this.props.onClickEventHandler?.(event);
  }


  /* ━━━ Rendering ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public render(): React.ReactNode {

    if (isNotUndefined(this.props.route)) {
      return (this.props.linkRenderer ?? Button.internalLinkRenderer)(
        this.props.route,
        {
          ...this.props.mustOpenLinkInNewTab ? { target: "_blank" } : null,
          "aria-label": this.props.accessibilityGuidance,
          "aria-disabled": this.props.disabled,
          "aria-pressed": this.props.toggled,
          tabIndex: this.props.disabled ? -1 : 0,
          className: this.rootElementCSS_Classes.join(" ")
        },
        this.childrenElements
      );
    }


    if (isNotUndefined(this.props.externalURI)) {
      return (
        <a
          { ...this.props.disabled ? null : { href: this.props.externalURI } }
          { ...this.props.mustOpenLinkInNewTab ? { target: "_blank" } : null }
          rel={
            [
              "noopener",
              "noreferrer",
              ...this.props.mustRequestNotFollowLinkForCrawlingToSearchEngine ? [ "nofollow" ] : []
            ].join(" ")
          }
          aria-label={ this.props.accessibilityGuidance }
          aria-disabled={ this.props.disabled }
          aria-pressed={ this.props.toggled }
          tabIndex={ this.props.disabled ? -1 : 0 }
          className={ this.rootElementCSS_Classes.join(" ") }
        >
          { this.childrenElements }
        </a>
      );
    }


    if (
      this.props.HTML_Type === Button.HTML_Types.inputButton ||
      this.props.HTML_Type === Button.HTML_Types.inputSubmit ||
      this.props.HTML_Type === Button.HTML_Types.inputReset
    ) {

      return (
        <input
          type={ this.typeAttributeValueOfButtonOrInputElement }
          value={ this.props.label }
          disabled={ this.props.disabled }
          aria-pressed={ this.props.toggled }
          className={ this.rootElementCSS_Classes.join(" ") }
          onClick={ this.onClick.bind(this) }
        />
      );

    }


    return (
      <button
        /* eslint-disable-next-line react/button-has-type -- The plugin does not support the dynamic values. */
        type={ this.typeAttributeValueOfButtonOrInputElement }
        disabled={ this.props.disabled }
        aria-label={ this.props.accessibilityGuidance }
        aria-pressed={ this.props.toggled }
        className={ this.rootElementCSS_Classes.join(" ") }
        onClick={ this.onClick.bind(this) }
      >

        { this.childrenElements }

      </button>
    );

  }

  protected get childrenElements(): React.ReactNode {

    const {
      prependedSVG_Icon: PrependedSVG_Icon,
      appendedSVG_Icon: AppendedSVG_Icon,
      loneSVG_Icon: LoneSVG_Icon,
      SVG_IconCSS_Classes
    }: Button.Properties = this.props;

    const SVG_IconClassAttributeValue: string = [
      "Button--YDF-SVG_Icon",
        ...Array.isArray(SVG_IconCSS_Classes) ? [ ...SVG_IconCSS_Classes ] : [ SVG_IconCSS_Classes ]
    ].join(" ");

    return (

      <>

        { isNotUndefined(PrependedSVG_Icon) && <PrependedSVG_Icon className={ SVG_IconClassAttributeValue } /> }

        { isNotUndefined(this.props.label) && <span className="Button--YDF-Label">{ this.props.label }</span> }

        { isNotUndefined(AppendedSVG_Icon) && <AppendedSVG_Icon className={ SVG_IconClassAttributeValue } /> }

        { isNotUndefined(LoneSVG_Icon) && <LoneSVG_Icon className={ SVG_IconClassAttributeValue } /> }

      </>

    );

  }

}


namespace Button {

  export type Properties = Readonly<{
    HTML_Type?: HTML_Types;
    label?: string | number;
    accessibilityGuidance?: string;
    route?: string | object;
    linkRenderer?: LinkRenderer;
    externalURI?: string;
    mustOpenLinkInNewTab: boolean;
    mustRequestNotFollowLinkForCrawlingToSearchEngine: boolean;
    disabled: boolean;
    toggled: boolean;
    theme: string;
    areThemesCSS_ClassesCommon: boolean;
    geometricVariation: string;
    geometricModifiers: ReadonlyArray<GeometricModifiers>;
    decorativeVariation: string;
    decorativeModifiers: ReadonlyArray<DecorativeModifiers>;
    prependedSVG_Icon?: React.ElementType<{ className: string; }>;
    appendedSVG_Icon?: React.ElementType<{ className: string; }>;
    loneSVG_Icon?: React.ElementType<{ className: string; }>;
    SVG_IconCSS_Classes?: ReadonlyArray<string> | string;
    onClickEventHandler?: (event: React.MouseEvent<HTMLButtonElement | HTMLInputElement>) => unknown;
    className?: string;
  }>;

  export type LinkRenderer<Route = string | object> = (
    route: Route,
    requiredAttributes: React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>,
    childrenElements: React.ReactNode
  ) => React.ReactNode;

  export enum HTML_Types {
    regular = "BUTTON",
    submit = "SUBMIT",
    inputButton = "INPUT_BUTTON",
    inputSubmit = "INPUT_SUBMIT",
    inputReset = "INPUT_RESET"
  }

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };


  export type GeometricVariations = {
    readonly regular: "REGULAR";
    readonly small: "SMALL";
    readonly linkLike: "LINK_LIKE";
    [variationName: string]: string;
  };

  export enum GeometricModifiers {
    pillShape = "PILL_SHAPE",
    squareShape = "SQUARE_SHAPE",
    squareShapeUnlessOverflowed = "SQUARE_SHAPE_UNLESS_OVERFLOWED",
    singleLine = "SINGLE_LINE",
    noLeftBorderAndRoundings = "NO_LEFT_BORDER_AND_ROUNDINGS",
    noRightBorderAndRoundings = "NO_RIGHT_BORDER_AND_ROUNDINGS",
    noTopBorderAndRoundings = "NO_TOP_BORDER_AND_ROUNDINGS",
    noBottomBorderAndRoundings = "NO_BOTTOM_BORDER_AND_ROUNDINGS",
    noRoundings = "NO_ROUNDINGS",
    horizontallyShrinkable = "HORIZONTALLY_SHRINKABLE"
  }


  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    readonly accented: "ACCENTED";
    readonly danger: "DANGER";
    readonly linkLike: "LINK_LIKE";
    [variationName: string]: string;
  };

  export enum DecorativeModifiers {
    bordersDisguising = "BORDERS_DISGUISING",
    noBackground = "NO_BACKGROUND",
    noBackgroundInDefaultState = "NO_BACKGROUND_IN_DEFAULT_STATE"
  }

}


export default Button;
