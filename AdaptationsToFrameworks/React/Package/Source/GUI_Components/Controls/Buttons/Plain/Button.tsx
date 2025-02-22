/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import React from "react";
import { Link as ReactLink, type To as ReactLinkRoute } from "react-router-dom";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import ComponentsAuxiliaries from "../../../ComponentsAuxiliaries";
import { isNotUndefined } from "@yamato-daiwa/es-extensions";


class Button extends React.Component<Button.Properties> {

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
      "mustOpenURI_OnNewTab" |
      "requestingForIgnoringOfLinkRelationshipToSearchEngine"
    >
  > {
    return {
      HTML_Type: Button.HTML_Types.regular,
      disabled: false,
      toggled: false,
      theme: Button.Themes.regular,
      areThemesCSS_ClassesCommon: Button.areThemesCSS_ClassesCommon,
      geometricVariation: Button.GeometricVariations.regular,
      geometricModifiers: [],
      decorativeVariation: Button.DecorativeVariations.regular,
      decorativeModifiers: [],
      mustOpenURI_OnNewTab: false,
      requestingForIgnoringOfLinkRelationshipToSearchEngine: false
    };
  }


  /* [ Implementation example ] Next.js link (the type of `to` property is different with `href` of "react-router-dom"'s link).
   *  protected get() customRouterLink {
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
  protected readonly customRouterLink?: React.ReactElement;


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
    linkLike: "LINK_LIKE"
  };

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof Button {
    return ComponentsAuxiliaries.defineDecorativeVariations(decorativeVariationsNames, Button);
  }


  /* ━━━ Root Element Attributes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get typeAttributeValueOfButtonOrInputElement(): "button" | "submit" | "reset" {
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
    this.props.onClick?.();
  }


  /* ━━━ Rendering ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public render(): React.ReactNode {

    if (isNotUndefined(this.customRouterLink)) {
      return this.customRouterLink;
    }


    if (isNotUndefined(this.props.reactLinkRoute)) {
      return (
        <ReactLink
          to={ this.props.reactLinkRoute }
          { ...this.props.mustOpenURI_OnNewTab ? { target: "_blank" } : null }
          aria-label={ this.props.accessibilityGuidance }
          aria-disabled={ this.props.disabled }
          aria-pressed={ this.props.toggled }
          tabIndex={ this.props.disabled ? -1 : 0 }
          className={ this.rootElementCSS_Classes.join(" ") }
        >
          { this.childrenElements }
        </ReactLink>
      );
    }


    if (isNotUndefined(this.props.externalURI)) {
      return (
        <a
          { ...this.props.disabled ? null : { href: this.props.externalURI } }
          { ...this.props.mustOpenURI_OnNewTab ? { target: "_blank" } : null }
          rel={
            [
              "noopener",
              "noreferrer",
              ...this.props.requestingForIgnoringOfLinkRelationshipToSearchEngine ? [ "nofollow" ] : []
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
        /* eslint-disable-next-line react/button-has-type -- TODO */
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
      loneSVG_Icon: LoneSVG_Icon
    }: Button.Properties = this.props;

    return (

      <>

        { isNotUndefined(PrependedSVG_Icon) && <PrependedSVG_Icon className="Badge--YDF-SVG_Icon"/> }

        { isNotUndefined(this.props.label) && <span className="Button--YDF-Label">{ this.props.label }</span> }

        { isNotUndefined(AppendedSVG_Icon) && <AppendedSVG_Icon className="Badge--YDF-SVG_Icon"/> }

        { isNotUndefined(LoneSVG_Icon) && <LoneSVG_Icon className="Badge--YDF-SVG_Icon"/> }

      </>

    );

  }

}


namespace Button {

  export type Properties = Readonly<{
    HTML_Type?: HTML_Types;
    label?: string | number;
    accessibilityGuidance?: string;
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
    reactLinkRoute?: ReactLinkRoute;
    externalURI?: string;
    mustOpenURI_OnNewTab: boolean;
    requestingForIgnoringOfLinkRelationshipToSearchEngine: boolean;
    onClick?: () => unknown;
    className?: string;
  }>;

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
    noRightBorderAndRoundings = "NO_RIGHT_BORDER_AND_ROUNDINGS"
  }


  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    readonly accented: "ACCENTED";
    readonly linkLike: "LINK_LIKE";
    [variationName: string]: string;
  };

  export enum DecorativeModifiers {
    bordersDisguising = "BORDERS_DISGUISING",
    noBackground = "NO_BACKGROUND"
  }

}


export default Button;
