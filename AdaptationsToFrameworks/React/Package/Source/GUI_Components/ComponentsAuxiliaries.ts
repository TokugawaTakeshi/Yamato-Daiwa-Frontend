import {
  toUpperCamelCase,
  toLowerCamelCase,
  toScreamingSnakeCase
} from "@yamato-daiwa/es-extensions";


export default abstract class ComponentsAuxiliaries {

  public static areThemesCSS_ClassesCommon: boolean = false;

  public static defineThemes<ComponentClass extends { Themes: { [themeName: string]: string; }; }>(
    themesNames: ReadonlyArray<string>,
    TargetComponentClass: ComponentClass
  ): ComponentClass {

    for (const themeName of themesNames) {
      TargetComponentClass.Themes[toLowerCamelCase(themeName)] = toScreamingSnakeCase(themeName);
    }

    return TargetComponentClass;

  }

  public static defineGeometricVariations<
    ComponentClass extends { GeometricVariations: { [decorativeVariationName: string]: string; }; }
  >(
    geometricVariationsNames: ReadonlyArray<string>,
    TargetComponentClass: ComponentClass
  ): ComponentClass {

    for (const geometricVariationName of geometricVariationsNames) {
      TargetComponentClass.GeometricVariations[toLowerCamelCase(geometricVariationName)] =
          toScreamingSnakeCase(geometricVariationName);
    }

    return TargetComponentClass;

  }

  public static defineDecorativeVariations<
    ComponentClass extends { DecorativeVariations: { [decorativeVariationName: string]: string; }; }
  >(
    decorativeVariationsNames: ReadonlyArray<string>,
    TargetComponentClass: ComponentClass
  ): ComponentClass {

    for (const decorativeVariationName of decorativeVariationsNames) {
      TargetComponentClass.DecorativeVariations[toLowerCamelCase(decorativeVariationName)] =
          toScreamingSnakeCase(decorativeVariationName);
    }

    return TargetComponentClass;

  }

  public static addThemeCSS_ClassToArrayIfMust(
    {
      themeValue,
      allThemes,
      areThemesCSS_ClassesCommon,
      CSS_Namespace
    }: Readonly<{
      themeValue: string;
      allThemes: Readonly<{ [themeKey: string]: string; }>;
      areThemesCSS_ClassesCommon: boolean;
      CSS_Namespace: string;
    }>
  ): Array<string> {
    return Object.entries(allThemes).length > 1 && !areThemesCSS_ClassesCommon ?
        [ `${ CSS_Namespace }__${ toUpperCamelCase(themeValue) }Theme` ] : [];
  }

  public static addGeometricVariationCSS_ClassToArrayIfMust(
    {
      geometricVariation,
      allGeometricVariations,
      CSS_Namespace
    }: Readonly<{
      geometricVariation: string;
      allGeometricVariations: Readonly<{ [geometricVariationKey: string]: string; }>;
      CSS_Namespace: string;
    }>
  ): Array<string> {
    return Object.entries(allGeometricVariations).length > 1 ?
        [ `${ CSS_Namespace }__${ toUpperCamelCase(geometricVariation) }GeometricVariation` ] : [];
  }

  public static addDecorativeVariationCSS_ClassToArrayIfMust(
    {
      decorativeVariation,
      allDecorativeVariations,
      CSS_Namespace
    }: Readonly<{
      decorativeVariation: string;
      allDecorativeVariations: Readonly<{ [decorativeVariationKey: string]: string; }>;
      CSS_Namespace: string;
    }>
  ): Array<string> {
    return Object.entries(allDecorativeVariations).length > 1 ?
        [ `${ CSS_Namespace }__${ toUpperCamelCase(decorativeVariation) }DecorativeVariation` ] : [];
  }

  public static generateDemandedGeometricModifiersCSS_Classes(
    CSS_Namespace: string,
    demandedGeometricModifiersNames: ReadonlyArray<string>
  ): Array<string> {
    return demandedGeometricModifiersNames.map(
      (geometricModifierName: string): string =>
          `${ CSS_Namespace }__${ toUpperCamelCase(geometricModifierName) }GeometricModifier`
    );
  }

  public static generateDemandedDecorativeModifiersCSS_Classes(
    CSS_Namespace: string,
    demandedDecorativeModifiersNames: ReadonlyArray<string>
  ): Array<string> {
    return demandedDecorativeModifiersNames.map(
      (decorativeModifierName: string): string =>
          `${ CSS_Namespace }__${ toUpperCamelCase(decorativeModifierName) }DecorativeModifier`
    );
  }

}
