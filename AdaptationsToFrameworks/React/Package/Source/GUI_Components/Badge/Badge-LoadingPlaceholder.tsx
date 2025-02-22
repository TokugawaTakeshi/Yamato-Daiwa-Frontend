import Badge from "./Badge";

/* ─── Constants and enumerations ──────────────────────────────────────────────────────────────────────────────────────────── */
import ComponentsAuxiliaries from "../ComponentsAuxiliaries";

/* ─── Framework ───────────────────────────────────────────────────────────────────────────────────────────────────────────── */
import React, { type ReactNode } from "react";

/* ─── Utils ───────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
import { isNotUndefined } from "@yamato-daiwa/es-extensions";


class BadgeLoadingPlaceholder extends React.Component<BadgeLoadingPlaceholder.Properties> {

  public static readonly defaultProps: Required<
    Pick<
      BadgeLoadingPlaceholder.Properties,
      "theme" |
      "areThemesCSS_ClassesCommon" |
      "geometricVariation" |
      "geometricModifiers"
    >
  > = {
    theme: Badge.Themes.regular,
    areThemesCSS_ClassesCommon: Badge.areThemesCSS_ClassesCommon,
    geometricVariation: Badge.GeometricVariations.regular,
    geometricModifiers: []
  };

  public render(): ReactNode {
    return (
      <span className={ [ "Badge--YDF", "Badge--YDF__LoadingPlaceholder", ...this.rootElementModifierCSS_Classes ].join(" ") }/>
    );
  }

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

      ...isNotUndefined(this.props.className) ? [ this.props.className ] : []

    ];
  }

}


namespace BadgeLoadingPlaceholder {

  export type Properties = Pick<
    Badge.Properties,
    "theme" |
    "areThemesCSS_ClassesCommon" |
    "geometricVariation" |
    "geometricModifiers" |
    "className"
  >;

}


export default BadgeLoadingPlaceholder;
