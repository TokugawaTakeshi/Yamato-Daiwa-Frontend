/* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
import React from "react";

/* ─── Utils ───────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
import ComponentsAuxiliaries from "../ComponentsAuxiliaries";
import { isNotUndefined } from "@yamato-daiwa/es-extensions";


class Badge extends React.Component<Badge.Properties> {

  public static CSS_NAMESPACE: string = "Badge--YDF";


  public static get defaultProps(): Required<
    Pick<
      Badge.Properties,
      "theme" |
      "areThemesCSS_ClassesCommon" |
      "geometricVariation" |
      "geometricModifiers" |
      "decorativeModifiers" |
      "rootElementTag"
    >
  > {
    return {
      theme: Badge.Themes.regular,
      areThemesCSS_ClassesCommon: Badge.areThemesCSS_ClassesCommon,
      geometricVariation: Badge.GeometricVariations.regular,
      geometricModifiers: [],
      decorativeModifiers: [],
      rootElementTag: "span"
    };
  }


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: Badge.Themes = { regular: "REGULAR" };

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof Badge {
    return ComponentsAuxiliaries.defineThemes(themesNames, Badge);
  }

  public static areThemesCSS_ClassesCommon: boolean = ComponentsAuxiliaries.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    Badge.areThemesCSS_ClassesCommon = true;
  }


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly GeometricVariations: Badge.GeometricVariations = {
    regular: "REGULAR",
    small: "SMALL"
  };

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof Badge {
    return ComponentsAuxiliaries.defineGeometricVariations(geometricVariationsNames, Badge);
  }


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly DecorativeVariations: Badge.DecorativeVariations = {
    veryCatchyBright: "VERY_CATCHY_BRIGHT",
    catchyBright: "CATCHY_BRIGHT",
    modestlyCatchyBright: "MODESTLY_CATCHY_BRIGHT",
    neutralBright: "NEUTRAL_BRIGHT",
    modestlyCalmingBright: "MODESTLY_CALMING_BRIGHT",
    calmingBright: "CALMING_BRIGHT",
    achromaticBright: "ACHROMATIC_BRIGHT",
    veryCatchyPastel: "VERY_CATCHY_PASTEL",
    catchyPastel: "CATCHY_PASTEL",
    modestlyCatchyPastel: "MODESTLY_CATCHY_PASTEL",
    neutralPastel: "NEUTRAL_PASTEL",
    modestlyCalmingPastel: "MODESTLY_CALMING_PASTEL",
    calmingPastel: "CALMING_PASTEL",
    achromaticPastel: "ACHROMATIC_PASTEL"
  };

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof Badge {
    return ComponentsAuxiliaries.defineDecorativeVariations(decorativeVariationsNames, Badge);
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return [

      ...ComponentsAuxiliaries.addThemeCSS_ClassToArrayIfMust({
        themeValue: this.props.theme,
        allThemes: Badge.Themes,
        areThemesCSS_ClassesCommon: this.props.areThemesCSS_ClassesCommon,
        CSS_Namespace: Badge.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.addGeometricVariationCSS_ClassToArrayIfMust({
        geometricVariation: this.props.geometricVariation,
        allGeometricVariations: Badge.GeometricVariations,
        CSS_Namespace: Badge.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.
          generateDemandedGeometricModifiersCSS_Classes(Badge.CSS_NAMESPACE, this.props.geometricModifiers),

      ...ComponentsAuxiliaries.addDecorativeVariationCSS_ClassToArrayIfMust({
        decorativeVariation: this.props.decorativeVariation,
        allDecorativeVariations: Badge.DecorativeVariations,
        CSS_Namespace: Badge.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.
          generateDemandedDecorativeModifiersCSS_Classes(Badge.CSS_NAMESPACE, this.props.decorativeModifiers),

      ...isNotUndefined(this.props.className) ? [ this.props.className ] : []

    ];
  }


  /* ━━━ Rendering ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public render(): React.ReactNode {

    const SVG_Icon: React.ElementType<{ className: string; }> | undefined = this.props.SVG_Icon;

    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
    * Currently it is the only solution compatible with TypeScript for dynamic elements.
    * @see https://stackoverflow.com/q/33471880 */
    const RootElement: keyof React.JSX.IntrinsicElements = this.props.rootElementTag as keyof React.JSX.IntrinsicElements;

    return (

      <RootElement
        className={ [ Badge.CSS_NAMESPACE, ...this.rootElementModifierCSS_Classes ].join(" ") }
      >

        { isNotUndefined(SVG_Icon) && <SVG_Icon className="Badge--YDF-SVG_Icon"/> }

        { isNotUndefined(this.props.keyLabel) && <span className="Badge--YDF-Key">{ this.props.keyLabel }</span> }

        <span className="Badge--YDF-Value">{ this.props.valueLabel }</span>

      </RootElement>

    );

  }

}


namespace Badge {

  export type Properties = Readonly<{
    keyLabel?: string;
    valueLabel: string;
    SVG_Icon?: React.ElementType<{ className: string; }>;
    theme: string;
    areThemesCSS_ClassesCommon: boolean;
    geometricVariation: string;
    geometricModifiers: ReadonlyArray<GeometricModifiers>;
    decorativeVariation: string;
    decorativeModifiers: ReadonlyArray<DecorativeModifiers>;
    rootElementTag: string;
    className?: string;
  }>;

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    [variationName: string]: string;
  };

  export enum GeometricModifiers {
    pillShape = "PILL_SHAPE",
    singleLine = "SINGLE_LINE"
  }

  export type DecorativeVariations = {
    readonly veryCatchyBright: "VERY_CATCHY_BRIGHT";
    readonly catchyBright: "CATCHY_BRIGHT";
    readonly modestlyCatchyBright: "MODESTLY_CATCHY_BRIGHT";
    readonly neutralBright: "NEUTRAL_BRIGHT";
    readonly modestlyCalmingBright: "MODESTLY_CALMING_BRIGHT";
    readonly calmingBright: "CALMING_BRIGHT";
    readonly achromaticBright: "ACHROMATIC_BRIGHT";
    readonly veryCatchyPastel: "VERY_CATCHY_PASTEL";
    readonly catchyPastel: "CATCHY_PASTEL";
    readonly modestlyCatchyPastel: "MODESTLY_CATCHY_PASTEL";
    readonly neutralPastel: "NEUTRAL_PASTEL";
    readonly modestlyCalmingPastel: "MODESTLY_CALMING_PASTEL";
    readonly calmingPastel: "CALMING_PASTEL";
    readonly achromaticPastel: "ACHROMATIC_PASTEL";
    [variationName: string]: string;
  };

  export enum DecorativeModifiers {
    bordersDisguising = "BORDERS_DISGUISING",
    noBackground = "NO_BACKGROUND"
  }

}


export default Badge;
