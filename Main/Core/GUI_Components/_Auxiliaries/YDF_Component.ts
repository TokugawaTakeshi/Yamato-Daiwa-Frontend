export namespace YDF_Component {

  /* ━━━ Themes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type Themes = {
    readonly regular: "REGULAR";
    [customThemeName: string]: string;
  };

  export type CustomThemesDefinition = ReadonlyArray<string | Readonly<{ name: string; modifierCSS_Class: string; }>>;

  /** @experimental Possibly will be deleted. */
  export namespace ThemesDefiners {

    export type NoChildrenComponentsCase<TargetClass> = (definitions: CustomThemesDefinition) => TargetClass;

  }

  export namespace OwnAndCorrespondingChildrenThemesDefinition {

    export type Generalized = Array<Item.Generalized>;

    export type ForSpecificChildrenComponents<ChildrenComponentsKeys extends string> =
        Array<Item.ForSpecificChildrenComponents<ChildrenComponentsKeys>>;

    export namespace Item {

      /* eslint-disable-next-line @typescript-eslint/no-shadow -- Valid TypeScript & safe while refer by the right way. */
      export type Generalized = {
        ownThemeKey: string;
        themeModifierCSS_Class?: string;
        correspondenceByChildren: Readonly<{
          [ childComponentKey: string ]: { [ownThemeValue: string]: string; };
        }>;
      };

      /* eslint-disable-next-line @typescript-eslint/no-shadow -- Valid TypeScript & safe while refer by the right way. */
      export type ForSpecificChildrenComponents<ChildrenComponentsKeys extends string> = {
        ownThemeKey: string;
        themeModifierCSS_Class?: string;
        correspondenceByChildren: Readonly<{
          [childrenComponentKey in ChildrenComponentsKeys]: { [ownThemeValue: string]: string; };
        }>;
      };

    }

  }


  /* ━━━ Geometric Variations ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type CustomGeometricVariationDefinition = ReadonlyArray<string | Readonly<{ name: string; modifierCSS_Class: string; }>>;

  /** @experimental Possibly will be deleted. */
  export namespace GeometricVariationDefiners {

    export type NoChildrenComponentsCase<TargetClass> = (definitions: CustomGeometricVariationDefinition) => TargetClass;

  }

  export type GeometricVariations<ComponentSpecificVariation extends Readonly<{ [geometricVariatioName: string]: string; }>> =
      ComponentSpecificVariation &
      { [themeName: string]: string; };

  export namespace OwnAndCorrespondingChildrenGeometricVariationsDefinition {

    export type Generalized = Array<Item.Generalized>;

    export type ForSpecificChildrenComponents<ChildrenComponentsKeys extends string> =
        Array<Item.ForSpecificChildrenComponents<ChildrenComponentsKeys>>;

    export namespace Item {

      /* eslint-disable-next-line @typescript-eslint/no-shadow -- Valid TypeScript & safe while refer by the right way. */
      export type Generalized = {
        ownGeometricVariationKey: string;
        geometricVariationModifierCSS_Class?: string;
        correspondenceByChildren: Readonly<{
          [childComponentKey: string]: { [ownGeometricVariationValue: string]: string; };
        }>;
      };

      /* eslint-disable-next-line @typescript-eslint/no-shadow -- Valid TypeScript & safe while refer by the right way. */
      export type ForSpecificChildrenComponents<ChildrenComponentsKeys extends string> = {
        ownGeometricVariationKey: string;
        geometricVariationModifierCSS_Class?: string;
        correspondenceByChildren: Readonly<{
          [childrenComponentKey in ChildrenComponentsKeys]: { [ownGeometricVariationValue: string]: string; };
        }>;
      };

    }

  }


  /* ━━━ Decorative Variations ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type CustomDecorativeVariationDefinition =
      ReadonlyArray<string | Readonly<{ name: string; modifierCSS_Class: string; }>>;

  /** @experimental Possibly will be deleted. */
  export namespace DecorativeVariationDefiners {

    export type NoChildrenComponentsCase<TargetClass> = (definitions: CustomDecorativeVariationDefinition) => TargetClass;

  }

  export type DecorativeVariations<ComponentSpecificVariation extends Readonly<{ [decorativeVariationName: string]: string; }>> =
      ComponentSpecificVariation &
      { [themeName: string]: string; };

  export namespace OwnAndCorrespondingChildrenDecorativeVariationsDefinition {

    export type Generalized = Array<Item.Generalized>;

    export type ForSpecificChildrenComponents<ChildrenComponentsKeys extends string> =
        Array<Item.ForSpecificChildrenComponents<ChildrenComponentsKeys>>;

    export namespace Item {

      /* eslint-disable-next-line @typescript-eslint/no-shadow -- Valid TypeScript & safe while refer by the right way. */
      export type Generalized = {
        ownDecorativeVariationKey: string;
        decorativeVariationModifierCSS_Class?: string;
        correspondenceByChildren: Readonly<{
          [childComponentKey: string]: { [ownDecorativeVariationValue: string]: string; };
        }>;
      };

      /* eslint-disable-next-line @typescript-eslint/no-shadow -- Valid TypeScript & safe while refer by the right way. */
      export type ForSpecificChildrenComponents<ChildrenComponentsKeys extends string> = {
        ownDecorativeVariationKey: string;
        decorativeVariationModifierCSS_Class?: string;
        correspondenceByChildren: Readonly<{
          [childrenComponentKey in ChildrenComponentsKeys]: { [ownDecorativeVariationValue: string]: string; };
        }>;
      };

    }

  }


  /* ━━━ Instance ID ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type InstanceID_Generator = (uniqueDynamicPart?: string) => string;

}
