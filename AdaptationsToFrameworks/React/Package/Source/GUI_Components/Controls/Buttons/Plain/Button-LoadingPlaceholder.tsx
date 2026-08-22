import Button from "./Button";

/* ─── Framework ───────────────────────────────────────────────────────────────────────────────────────────────────────────── */
import React, { type ReactNode } from "react";

/* ─── Utils ───────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
import ComponentsAuxiliaries from "../../../ComponentsAuxiliaries";
import { isNotUndefined } from "@yamato-daiwa/es-extensions";


class ButtonLoadingPlaceholder extends React.Component<ButtonLoadingPlaceholder.Properties> {

  public static readonly defaultProps: Required<
    Pick<
      ButtonLoadingPlaceholder.Properties,
      "theme" |
      "areThemesCSS_ClassesCommon" |
      "geometricVariation" |
      "geometricModifiers"
    >
  > = {
    theme: Button.Themes.regular,
    areThemesCSS_ClassesCommon: Button.areThemesCSS_ClassesCommon,
    geometricVariation: Button.GeometricVariations.regular,
    geometricModifiers: []
  };

  protected get rootElementCSS_Classes(): ReadonlyArray<string> {
    return [

      Button.CSS_NAMESPACE,

      `${ Button.CSS_NAMESPACE }__LoadingPlaceholder`,

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

      ...isNotUndefined(this.props.className) ? [ this.props.className ] : []

    ];
  }

  public render(): ReactNode {
    return (
      <span
        role="presentation"
        className={ this.rootElementCSS_Classes.join(" ") }
      />
    );
  }

}


namespace ButtonLoadingPlaceholder {

  export type Properties = Pick<
    Button.Properties,
    "theme" |
    "areThemesCSS_ClassesCommon" |
    "geometricVariation" |
    "geometricModifiers" |
    "className"
  >;

}


export default ButtonLoadingPlaceholder;
