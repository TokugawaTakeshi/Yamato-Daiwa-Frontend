/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import type { AdmonitionBlockLocalization } from "@yamato-daiwa/frontend";
import { CollapsingAnimation, admonitionBlockYDF_ComponentLocalization__english } from "@yamato-daiwa/frontend";
import PencilIcon__Circled__Filled from "../SVG_Icons/Pencil/PencilIcon__Circled__Filled";
import ExclamationMarkIcon__Circled__Filled from "../SVG_Icons/ExclamationMark/ExclamationMarkIcon__Circled__Filled";
import ExclamationMarkIcon__Triangled__Filled from "../SVG_Icons/ExclamationMark/ExclamationMarkIcon__Triangled__Filled";
import CheckmarkIcon__Circled__Filled from "../SVG_Icons/Checkmark/CheckmarkIcon__Circled__Filled";
import InfoSignIcon__Circled__Filled from "../SVG_Icons/InfoSign/InfoSignIcon__Circled__Filled";
import QuestionMarkIcon__Circled__Filled from "../SVG_Icons/QuestionMark/QuestionMarkIcon__Circled__Filled";
import MultiplicationSignIcon__Boxed__Filled from "../SVG_Icons/MultiplicationSign/MultiplicationSignIcon__Boxed__Filled";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import React from "react";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import ComponentsAuxiliaries from "./ComponentsAuxiliaries";
import { isNotNull, isNotUndefined } from "@yamato-daiwa/es-extensions";


class AdmonitionBlock extends React.Component<AdmonitionBlock.Properties, AdmonitionBlock.State> {

  public static CSS_NAMESPACE: string = "AdmonitionBlock--YDF";

  public static get defaultProps(): Required<
    Pick<
      AdmonitionBlock.Properties,
      "SVG_Icon" |
      "dismissible" |
      "theme" |
      "areThemesCSS_ClassesCommon" |
      "geometricVariation" |
      "rootElementAttributes"
    >
  > {
    return {
      SVG_Icon: false,
      dismissible: false,
      theme: AdmonitionBlock.Themes.regular,
      areThemesCSS_ClassesCommon: AdmonitionBlock.areThemesCSS_ClassesCommon,
      geometricVariation: AdmonitionBlock.GeometricVariations.regular,
      rootElementAttributes: {}
    };
  }

  public readonly state: AdmonitionBlock.State = {
    isDisplaying: true
  };

  public static localization: AdmonitionBlockLocalization = admonitionBlockYDF_ComponentLocalization__english;


  /* ━━━ Dismissing ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected rootElementReference: React.RefObject<HTMLDivElement | null> = React.createRef<HTMLDivElement>();

  protected onDismissingButtonClicked(): void {
    if (isNotNull(this.rootElementReference.current)) {
      CollapsingAnimation.animate({
        animatedElement: this.rootElementReference.current,
        duration__seconds: 1,
        callback: (): void => {
          this.setState({ isDisplaying: false });
        }
      });
    }
  }


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: AdmonitionBlock.Themes = { regular: "REGULAR" };

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof AdmonitionBlock {
    return ComponentsAuxiliaries.defineThemes(themesNames, AdmonitionBlock);
  }

  public static areThemesCSS_ClassesCommon: boolean = ComponentsAuxiliaries.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    AdmonitionBlock.areThemesCSS_ClassesCommon = true;
  }


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly GeometricVariations: AdmonitionBlock.GeometricVariations = {
    regular: "REGULAR",
    stickyNoteLike: "STICKY_NOTE_LIKE"
  };

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof AdmonitionBlock {
    return ComponentsAuxiliaries.defineGeometricVariations(geometricVariationsNames, AdmonitionBlock);
  }


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly DecorativeVariations: AdmonitionBlock.DecorativeVariations = {
    notice: "NOTICE",
    error: "ERROR",
    warning: "WARNING",
    success: "SUCCESS",
    guidance: "GUIDANCE",
    question: "QUESTION"
  };

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof AdmonitionBlock {
    return ComponentsAuxiliaries.defineDecorativeVariations(decorativeVariationsNames, AdmonitionBlock);
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return [

      ...ComponentsAuxiliaries.addThemeCSS_ClassToArrayIfMust({
        themeValue: this.props.theme,
        allThemes: AdmonitionBlock.Themes,
        areThemesCSS_ClassesCommon: this.props.areThemesCSS_ClassesCommon,
        CSS_Namespace: AdmonitionBlock.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.addGeometricVariationCSS_ClassToArrayIfMust({
        geometricVariation: this.props.geometricVariation,
        allGeometricVariations: AdmonitionBlock.GeometricVariations,
        CSS_Namespace: AdmonitionBlock.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.addDecorativeVariationCSS_ClassToArrayIfMust({
        decorativeVariation: this.props.decorativeVariation,
        allDecorativeVariations: AdmonitionBlock.DecorativeVariations,
        CSS_Namespace: AdmonitionBlock.CSS_NAMESPACE
      }),

      ...isNotUndefined(this.props.className) ? [ this.props.className ] : []

    ];
  }


  /* ━━━ ID Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Instance ID ──────────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly INSTANCE_ID: string = AdmonitionBlock.generateBasicID();
  protected static counterForInstanceID_Generating: number = 0;

  public static generateBasicID(): string {
    AdmonitionBlock.counterForInstanceID_Generating++;
    return `ADMONITION_BLOCK--YDF-${ AdmonitionBlock.counterForInstanceID_Generating }`;
  }


  /* ─── Title HTML ID ────────────────────────────────────────────────────────────────────────────────────────────── */
  protected TITLE_HTML_ID: string = `${ this.INSTANCE_ID }-TITLE`;


  /* ━━━ Rendering ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public render(): React.ReactNode {

    if (!this.state.isDisplaying) {
      return null;
    }


    return (
      <div
        role="alert"
        className={ [ AdmonitionBlock.CSS_NAMESPACE, ...this.rootElementModifierCSS_Classes ].join(" ") }
        { ...this.props.rootElementAttributes }
        ref={ this.rootElementReference }
      >

        { this.SVG_Icon }

        {

          isNotUndefined(this.props.title) &&

              <div
                className="AdmonitionBlock--YDF-Title"
                id={ this.TITLE_HTML_ID }
              >
                { this.props.title }
              </div>

        }

        <div
          className="AdmonitionBlock--YDF-MainContent"
          { ...{ ...isNotUndefined(this.props.title) ? { "aria-labelledby": this.TITLE_HTML_ID } : null } }
        >

          { isNotUndefined(this.props.children) ? this.props.children : null }

          {
            isNotUndefined(this.props.actionBarContent) ?
                <div className="AdmonitionBlock--YDF-ActionBar">
                  { this.props.actionBarContent }
                </div> :
                null
          }

        </div>

        {

          this.props.dismissible &&

              <button
                className="AdmonitionBlock--YDF-DismissingButton"
                type="button"
                aria-label={ AdmonitionBlock.localization.dismissingButton.accessibilityGuidance }
                onClick={ this.onDismissingButtonClicked.bind(this) }
              >
                <MultiplicationSignIcon__Boxed__Filled className="AdmonitionBlock--YDF-DismissingButton-Icon"/>
              </button>

        }

      </div>
    );

  }

  protected get SVG_Icon(): React.ReactNode {

    if (this.props.SVG_Icon === true) {

      switch (this.props.decorativeVariation) {

        case AdmonitionBlock.DecorativeVariations.notice:
            return <PencilIcon__Circled__Filled className="AdmonitionBlock--YDF-SVG_Icon"/>;

        case AdmonitionBlock.DecorativeVariations.error:
            return <ExclamationMarkIcon__Circled__Filled className="AdmonitionBlock--YDF-SVG_Icon"/>;

        case AdmonitionBlock.DecorativeVariations.warning:
            return <ExclamationMarkIcon__Triangled__Filled className="AdmonitionBlock--YDF-SVG_Icon"/>;

        case AdmonitionBlock.DecorativeVariations.success:
            return <CheckmarkIcon__Circled__Filled className="AdmonitionBlock--YDF-SVG_Icon"/>;

        case AdmonitionBlock.DecorativeVariations.guidance:
            return <InfoSignIcon__Circled__Filled className="AdmonitionBlock--YDF-SVG_Icon"/>;

        case AdmonitionBlock.DecorativeVariations.question:
            return <QuestionMarkIcon__Circled__Filled className="AdmonitionBlock--YDF-SVG_Icon"/>;

        default: return null;

      }

    }


    if (this.props.SVG_Icon === false) {
      return null;
    }


    const SVG_Icon: React.ElementType<{ className: string; }> = this.props.SVG_Icon;

    return <SVG_Icon className="AdmonitionBlock--YDF-SVG_Icon"/>;

  }

}


namespace AdmonitionBlock {

  export type Properties = Readonly<{
    title?: string;
    SVG_Icon: boolean | React.ElementType<{ className: string; }>;
    dismissible: boolean;
    theme: string;
    areThemesCSS_ClassesCommon: boolean;
    geometricVariation: string;
    decorativeVariation: string;
    children?: React.ReactNode;
    actionBarContent?: React.ReactNode;
    className?: string;
    rootElementAttributes?: Omit<React.HTMLAttributes<HTMLDivElement>, "className">;
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
    readonly stickyNoteLike: "STICKY_NOTE_LIKE";
    [variationName: string]: string;
  };

  export type DecorativeVariations = {
    readonly notice: "NOTICE";
    readonly error: "ERROR";
    readonly warning: "WARNING";
    readonly success: "SUCCESS";
    readonly guidance: "GUIDANCE";
    readonly question: "QUESTION";
    [variationName: string]: string;
  };

}


export default AdmonitionBlock;
