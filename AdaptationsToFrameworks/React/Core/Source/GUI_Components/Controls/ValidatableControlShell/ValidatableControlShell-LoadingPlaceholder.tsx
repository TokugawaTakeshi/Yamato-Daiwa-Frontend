/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import ValidatableControlShell from "./ValidatableControlShell";

/* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import React, { type ReactNode } from "react";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import ComponentsAuxiliaries from "../../ComponentsAuxiliaries";
import { isNotUndefined } from "@yamato-daiwa/es-extensions";
import renderReactNodeIf from "../../../Utils/renderReactNodeIf";
import BadgeLoadingPlaceholder from "../../Badge/Badge-LoadingPlaceholder";
import Badge from "../../Badge/Badge";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


class ValidatableControlShellLoadingPlaceholder extends React.Component<ValidatableControlShellLoadingPlaceholder.Properties> {

  public static readonly defaultProps: Required<
    Pick<
      ValidatableControlShellLoadingPlaceholder.Properties,
      "label" |
      "badge" |
      "guidance" |
      "theme" |
      "areThemesCSS_ClassesCommon" |
      "geometricVariation"
    >
  > = {
    label: false,
    badge: false,
    guidance: false,
    theme: ValidatableControlShell.Themes.regular,
    areThemesCSS_ClassesCommon: ValidatableControlShell.areThemesCSS_ClassesCommon,
    geometricVariation: ValidatableControlShell.GeometricVariations.regular
  };

  protected get rootElementCSS_Classes(): ReadonlyArray<string> {
    return [

      ValidatableControlShell.CSS_NAMESPACE,

      `${ ValidatableControlShell.CSS_NAMESPACE }__LoadingPlaceholder`,

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

      ...isNotUndefined(this.props.className) ? [ this.props.className ] : []

    ];
  }

  public render(): ReactNode {
    return (
      <div
        className={ this.rootElementCSS_Classes.join(" ") }
      >
        {
          renderReactNodeIf(
            this.props.label || this.props.badge,
            (
              <div className="ValidatableControlShell--YDF-Header">

                {
                  renderReactNodeIf(
                    this.props.label,
                    (<div className="ValidatableControlShell--YDF-Label ValidatableControlShell--YDF-Label__LoadingPlaceholder"/>)
                  )
                }

                {
                  renderReactNodeIf(
                    this.props.badge,
                    (
                      <BadgeLoadingPlaceholder
                        theme={ this.badgeTheme }
                        geometricModifiers={ [ Badge.GeometricModifiers.pillShape ] }
                      />
                    )
                  )
                }

                {
                  renderReactNodeIf(
                    this.props.guidance,
                    (<div className="ValidatableControlShell--YDF-Guidance ValidatableControlShell--YDF-Guidance__LoadingPlaceholder"/>)
                  )
                }


                <div
                  className={
                    [
                      "ValidatableControlShell--YDF-MainSlotCustomizableWrapper",
                      this.props.mainSlotWrapperAdditionalCSS_Classes
                    ].
                        join(" ")
                  }
                >
                    { this.props.children }
                </div>

              </div>
            )
          )
        }

      </div>
    );
  }

  protected get badgeTheme(): string {
    return ValidatableControlShell.selfAndChildrenComponentsThemesCorrespondence.badge[this.props.theme];
  }

}


namespace ValidatableControlShellLoadingPlaceholder {

  export type Properties =
      Readonly<{
        label: boolean;
        badge: boolean;
        guidance: boolean;
      }> &
      Pick<
        ValidatableControlShell.Properties,
            "mainSlotWrapperAdditionalCSS_Classes" |
            "theme" |
            "areThemesCSS_ClassesCommon" |
            "geometricVariation" |
            "className" |
            "children"
      >;

}


export default ValidatableControlShellLoadingPlaceholder;
