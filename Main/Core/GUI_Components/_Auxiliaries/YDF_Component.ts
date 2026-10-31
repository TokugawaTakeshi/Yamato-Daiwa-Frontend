export namespace YDF_Component {

  /* ━━━ Themes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type Themes = {
    readonly regular: "REGULAR";
    [customThemeName: string]: string;
  };

  export type CustomThemesDefinition = ReadonlyArray<string | Readonly<{ name: string; modifierCSS_Class: string; }>>;

  export namespace ThemesDefiners {

    export type NoChildrenComponentsCase<TargetClass> = (definitions: CustomThemesDefinition) => TargetClass;

  }

  export type OwnAndCorrespondingChildrenThemesDefinition = Array<OwnAndCorrespondingChildrenThemesDefinition.Theme>;

  export namespace OwnAndCorrespondingChildrenThemesDefinition {

    export type Theme = {
      ownThemeKey: string;
      themeModifierCSS_Class?: string;
      correspondenceByChildren: Readonly<{
        [ childComponentKey: string ]: { [ownThemeValue: string]: string; };
      }>;
    };

  }


  /* ━━━ Geometric Variations ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type CustomGeometricVariationDefinition = ReadonlyArray<string | Readonly<{ name: string; modifierCSS_Class: string; }>>;

  export namespace GeometricVariationDefiners {

    export type NoChildrenComponentsCase<TargetClass> = (definitions: CustomGeometricVariationDefinition) => TargetClass;

  }

  export type GeometricVariations<ComponentSpecificVariation extends Readonly<{ [geometricVariatioName: string]: string; }>> =
      ComponentSpecificVariation &
      { [themeName: string]: string; };

  export type OwnAndCorrespondingChildrenGeometricVariationsDefinition =
      Array<OwnAndCorrespondingChildrenGeometricVariationsDefinition.GeometricVariation>;

  export namespace OwnAndCorrespondingChildrenGeometricVariationsDefinition {

    export type GeometricVariation = {
      ownGeometricVariationKey: string;
      geometricVariationModifierCSS_Class?: string;
      correspondenceByChildren: Readonly<{
        [childComponentKey: string]: { [ownGeometricVariationValue: string]: string; };
      }>;
    };

  }


  /* ━━━ Decorative Variations ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type CustomDecorativeVariationDefinition =
      ReadonlyArray<string | Readonly<{ name: string; modifierCSS_Class: string; }>>;

  export namespace DecorativeVariationDefiners {

    export type NoChildrenComponentsCase<TargetClass> = (definitions: CustomDecorativeVariationDefinition) => TargetClass;

  }

  export type DecorativeVariations<ComponentSpecificVariation extends Readonly<{ [decorativeVariationName: string]: string; }>> =
      ComponentSpecificVariation &
      { [themeName: string]: string; };

  export type OwnAndCorrespondingChildrenDecorativeVariationsDefinition =
      Array<OwnAndCorrespondingChildrenDecorativeVariationsDefinition.DecorativeVariation>;

  export namespace OwnAndCorrespondingChildrenDecorativeVariationsDefinition {

    export type DecorativeVariation = {
      ownDecorativeVariationKey: string;
      decorativeVariationModifierCSS_Class?: string;
      correspondenceByChildren: Readonly<{
        [childComponentKey: string]: { [ownDecorativeVariationValue: string]: string; };
      }>;
    };

  }


  /* ━━━ Instance ID ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type InstanceID_Generator = (uniqueDynamicPart?: string) => string;

}

