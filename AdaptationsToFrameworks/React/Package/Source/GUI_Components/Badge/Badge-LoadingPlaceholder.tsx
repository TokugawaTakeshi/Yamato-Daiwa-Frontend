import Badge from "./Badge";

/* ─── Constants and enumerations ──────────────────────────────────────────────────────────────────────────────────────────── */
import ComponentsAuxiliaries from "../ComponentsAuxiliaries";

/* ─── Framework ───────────────────────────────────────────────────────────────────────────────────────────────────────────── */
import React, { type ReactNode } from "react";

/* ─── Utils ───────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
import checkForNonEmptyStringReactProperties from "../../_ReactPropertiesValidators/checkForNonEmptyStringReactProperties";
import { isNotUndefined } from "@yamato-daiwa/es-extensions";


class BadgeLoadingPlaceholder extends React.Component<BadgeLoadingPlaceholder.Properties> {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly defaultProps: Required<
    Pick<
      BadgeLoadingPlaceholder.Properties,
      "theme" |
      "areThemesCSS_ClassesCommon" |
      "geometricVariation" |
      "geometricModifiers" |
      "rootElementAttributes"
    >
  > = {
    theme: Badge.Themes.regular,
    areThemesCSS_ClassesCommon: Badge.areThemesCSS_ClassesCommon,
    geometricVariation: Badge.GeometricVariations.regular,
    geometricModifiers: [],
    rootElementAttributes: {}
  };


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public constructor(properties: BadgeLoadingPlaceholder.Properties) {
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
      componentName: "BadgeLoadingPlaceholder",
      propertiesData: [
        {
          name: "className",
          isRequiredOrHasDefaultValue: false,
          value: this.props.className
        }
      ]
    });
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

      ...isNotUndefined(this.props.className) ? [ this.props.className ] : []

    ];
  }


  /* ━━━ Rendering ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public render(): ReactNode {
    return (
      <span
        className={
          [
            "Badge--YDF",
            "Badge--YDF__LoadingPlaceholder",
            ...this.rootElementModifierCSS_Classes
          ].join(" ")
        }
      />
    );
  }

}


namespace BadgeLoadingPlaceholder {

  export type Properties = Pick<
    Badge.Properties,
    "theme" |
    "areThemesCSS_ClassesCommon" |
    "geometricVariation" |
    "geometricModifiers" |
    "className" |
    "rootElementAttributes"
  >;

}


export default BadgeLoadingPlaceholder;
