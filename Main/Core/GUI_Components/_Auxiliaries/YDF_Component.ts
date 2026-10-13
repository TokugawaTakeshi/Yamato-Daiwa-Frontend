export namespace YDF_Component {

  export type Themes = {
    readonly regular: "REGULAR";
    [customThemeName: string]: string;
  };

  export type CustomThemesDefinition = ReadonlyArray<string | Readonly<{ name: string; modifierCSS_Class: string; }>>;

  export type CustomGeometricVariationDefinition = ReadonlyArray<string | Readonly<{ name: string; modifierCSS_Class: string; }>>;

  export type GeometricVariations<ComponentSpecificVariation extends Readonly<{ [geometricVariatioName: string]: string; }>> =
      ComponentSpecificVariation &
      { [themeName: string]: string; };

  export type DecorativeVariations<ComponentSpecificVariation extends Readonly<{ [decorativeVariationName: string]: string; }>> =
      ComponentSpecificVariation &
      { [themeName: string]: string; };

}
