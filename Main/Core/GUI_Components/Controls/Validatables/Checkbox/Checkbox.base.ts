import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell.base";


export abstract class Checkbox {

  public static readonly CSS_NAMESPACE: string = "Checkbox--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsThemesCorrespondence:
      Checkbox.SelfAndChildrenComponentsThemesCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsThemesCorrespondence(): Checkbox.SelfAndChildrenComponentsThemesCorrespondence {
    return Checkbox._selfAndChildrenComponentsThemesCorrespondence ??
      (
        Checkbox._selfAndChildrenComponentsThemesCorrespondence =
          { validatableControlShell: { [Checkbox.Themes.regular]: ValidatableControlShell.Themes.regular } }
      );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [Checkbox.Themes.regular]: "Checkbox--YDF__RegularTheme" };

  public static defineThemes(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenThemesDefinition.
            ForSpecificChildrenComponents<keyof Checkbox.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof Checkbox {
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(Checkbox, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof Checkbox {
    Checkbox.areThemesCSS_ClassesCommon = true;
    return Checkbox;
  }


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly GeometricVariations: Checkbox.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL",
        minimalistic: "MINIMALISTIC"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsGeometricVariationsCorrespondence:
      Checkbox.SelfAndChildrenComponentsGeometricVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsGeometricVariationsCorrespondence():
      Checkbox.SelfAndChildrenComponentsGeometricVariationsCorrespondence
  {
    return Checkbox._selfAndChildrenComponentsGeometricVariationsCorrespondence ?? (
      Checkbox._selfAndChildrenComponentsGeometricVariationsCorrespondence = {
        validatableControlShell: {
          [Checkbox.GeometricVariations.regular]: ValidatableControlShell.GeometricVariations.regular,
          [Checkbox.GeometricVariations.small]: ValidatableControlShell.GeometricVariations.small,
          [Checkbox.GeometricVariations.minimalistic]: ValidatableControlShell.GeometricVariations.regular
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [Checkbox.GeometricVariations.regular]: "Checkbox--YDF__RegularGeometricVariation",
        [Checkbox.GeometricVariations.small]: "Checkbox--YDF__SmallGeometricVariation",
        [Checkbox.GeometricVariations.minimalistic]: "Checkbox--YDF__MinimalisticGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenGeometricVariationsDefinition.
            ForSpecificChildrenComponents<keyof Checkbox.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof Checkbox {
    return YDF_ComponentsCoordinator.
        defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(Checkbox, definitions);
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly DecorativeVariations: Checkbox.DecorativeVariations =
      {
        regular: "REGULAR",
        minimalistic: "MINIMALISTIC"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      Checkbox.SelfAndChildrenComponentsDecorativeVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsDecorativeVariationsCorrespondence():
      Checkbox.SelfAndChildrenComponentsDecorativeVariationsCorrespondence
  {
    return Checkbox._selfAndChildrenComponentsDecorativeVariationsCorrespondence ?? (
      Checkbox._selfAndChildrenComponentsDecorativeVariationsCorrespondence = {
        validatableControlShell: {
          [Checkbox.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular,
          [Checkbox.DecorativeVariations.minimalistic]: ValidatableControlShell.DecorativeVariations.regular
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [Checkbox.DecorativeVariations.veryCatchyBright]: "Checkbox--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenDecorativeVariationsDefinition.
            ForSpecificChildrenComponents<keyof Checkbox.SelfAndChildrenComponentsDecorativeVariationsCorrespondence>
  ): typeof Checkbox {
    return YDF_ComponentsCoordinator.
        defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(Checkbox, definitions);
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static getActualRootElementModifierCSS_Classes(
    {
      checked,
      disabled,
      readonly,
      ...relatedState
    }:
        Readonly<{
          checked: boolean;
          disabled: boolean;
          readonly: boolean;
          theme: string;
          areThemesCSS_ClassesCommon: boolean;
          geometricVariation: string;
          decorativeVariation: string;
        }>
  ): Array<string> {
    return YDF_ComponentsCoordinator.getActualRootElementModifierCSS_Classes(
      Checkbox,
      {
        ...relatedState,
        otherCSS_Classes: [
          checked ? "Checkbox--YDF__CheckedState" : "Checkbox--YDF__UncheckedState",
          ...disabled ? [ "Checkbox--YDF__DisabledState" ] : [],
          ...readonly ? [ "Checkbox--YDF__ReadOnlyState" ] : []
        ]
      }
    );
  }


  /* ━━━ IDs Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(uniqueDynamicPart?: string): string {
    return `CHECKBOX--YDF-${ uniqueDynamicPart ?? ++Checkbox.counterForInstanceID_Generating }`;
  }


  /* ━━━ Static Members Sharing ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static shareStaticMembers(TargetClass: object): void {
    Object.defineProperties(
      TargetClass,
      {

        CSS_NAMESPACE: { value: Checkbox.CSS_NAMESPACE },

        Themes: { value: Checkbox.Themes },
        selfAndChildrenComponentsThemesCorrespondence:
            { get: (): unknown => Reflect.get(Checkbox, "selfAndChildrenComponentsThemesCorrespondence") },
        themesCSS_Classes: { value: Checkbox.themesCSS_Classes },
        defineThemes: { get: (): unknown => Reflect.get(Checkbox, "defineThemes") },
        areThemesCSS_ClassesCommon: {
          value: Checkbox.areThemesCSS_ClassesCommon,
          writable: true
        },
        considerThemesAsCommon: { get: (): unknown => Reflect.get(Checkbox, "considerThemesAsCommon") },

        GeometricVariations: { value: Checkbox.GeometricVariations },
        selfAndChildrenComponentsGeometricVariationsCorrespondence:
            { get: (): unknown => Reflect.get(Checkbox, "selfAndChildrenComponentsGeometricVariationsCorrespondence") },
        geometricVariationsCSS_Classes: { value: Checkbox.geometricVariationsCSS_Classes },
        defineGeometricVariations: { get: (): unknown => Reflect.get(Checkbox, "defineGeometricVariations") },

        DecorativeVariations: { value: Checkbox.DecorativeVariations },
        selfAndChildrenComponentsDecorativeVariationsCorrespondence:
            { get: (): unknown => Reflect.get(Checkbox, "// selfAndChildrenComponentsDecorativeVariationsCorrespondence") },
        decorativeVariationsCSS_Classes: { value: Checkbox.decorativeVariationsCSS_Classes },
        defineDecorativeVariations: { get: (): unknown => Reflect.get(Checkbox, "defineDecorativeVariations") },

        counterForInstanceID_Generating: { value: Checkbox.counterForInstanceID_Generating },
        generateInstanceID: { get: (): unknown => Reflect.get(Checkbox, "generateInstanceID") }

      }
    );
  }

}


export namespace Checkbox {

  export type SelfAndChildrenComponentsThemesCorrespondence = {
    validatableControlShell: { [ownThemeValue: string]: string; };
  };

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          small: "SMALL";
          minimalistic: "MINIMALISTIC";
        }>
      >;

  export type SelfAndChildrenComponentsGeometricVariationsCorrespondence = {
    validatableControlShell: { [ownGeometricVariationValue: string]: string; };
  };

  export enum GeometricModifiers {
    squareShape = "SQUARE_SHAPE",
    singleLine = "SINGLE_LINE",
    noLeftBorderAndRoundings = "NO_LEFT_BORDER_AND_ROUNDINGS",
    noRightBorderAndRoundings = "NO_RIGHT_BORDER_AND_ROUNDINGS",
    noTopBorderAndRoundings = "NO_TOP_BORDER_AND_ROUNDINGS",
    noBottomBorderAndRoundings = "NO_BOTTOM_BORDER_AND_ROUNDINGS",
    noRoundings = "NO_ROUNDINGS"
  }

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{
          regular: "REGULAR";
          minimalistic: "MINIMALISTIC";
        }>
      >;

  export type SelfAndChildrenComponentsDecorativeVariationsCorrespondence = {
    validatableControlShell: { [ownDecorativeVariationValue: string]: string; };
  };

}


export default Checkbox;
