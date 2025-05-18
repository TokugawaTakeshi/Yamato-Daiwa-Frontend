import {
  toUpperCamelCase,
  toLowerCamelCase,
  toScreamingSnakeCase,
  isUndefined
} from "@yamato-daiwa/es-extensions";


export default abstract class YDF_ComponentsCoordinator {

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

  public static defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents<
    ComponentClass extends {
      Themes: { [themeName: string]: string; };
      selfAndChildrenComponentsThemesCorrespondence: { [badge: string]: { [ownThemeValue: string]: string; }; };
    }
  >(
    themesAndCorrespondenceDefinition: { [ ownThemeKey: string ]: { [ childrenComponentKey: string ]: string; }; },
    TargetComponentClass: ComponentClass
  ): ComponentClass {

    YDF_ComponentsCoordinator.defineThemes(Object.keys(themesAndCorrespondenceDefinition), TargetComponentClass);

    for (
      const [ ownThemeName, correspondenceWithThemesOfChildrenComponents ] of
          Object.entries(themesAndCorrespondenceDefinition)
    ) {

        const ownThemeName__screamingSnakeCase: string = toScreamingSnakeCase(ownThemeName);

        for (
          const [ childComponentName, childComponent_sThemeName ] of
              Object.entries(correspondenceWithThemesOfChildrenComponents)
        ) {

          if (isUndefined(TargetComponentClass.selfAndChildrenComponentsThemesCorrespondence[childComponentName])) {
            TargetComponentClass.selfAndChildrenComponentsThemesCorrespondence[childComponentName] = {
              [ownThemeName__screamingSnakeCase]: toScreamingSnakeCase(childComponent_sThemeName)
            };
          } else {
            TargetComponentClass.
                selfAndChildrenComponentsThemesCorrespondence[childComponentName][ownThemeName__screamingSnakeCase] =
                    toScreamingSnakeCase(childComponent_sThemeName);
          }

        }

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

  public static generateRootElementModifierCSS_Classes(
    {
      CSS_Namespace,
      activeTheme,
      allThemes,
      areThemesCSS_ClassesCommon,
      activeGeometricVariation,
      allGeometricVariations,
      activeGeometricModifiers = [],
      activeDecorativeVariation,
      allDecorativeVariations,
      activeDecorativeModifiers = [],
      other = []
    }: Readonly<{
      CSS_Namespace: string;
      activeTheme: string;
      allThemes: Readonly<{ [themeKey: string]: string; }>;
      areThemesCSS_ClassesCommon: boolean;
      activeGeometricVariation: string;
      allGeometricVariations: Readonly<{ [geometricVariationKey: string]: string; }>;
      activeGeometricModifiers?: ReadonlyArray<string>;
      activeDecorativeVariation: string;
      allDecorativeVariations: Readonly<{ [decorativeVariationKey: string]: string; }>;
      activeDecorativeModifiers?: ReadonlyArray<string>;
      other?: ReadonlyArray<string>;
    }>
  ): Array<string> {
    return [
      ...Object.entries(allThemes).length > 1 && !areThemesCSS_ClassesCommon ?
          [ `${ CSS_Namespace }__${ toUpperCamelCase(activeTheme) }Theme` ] : [],
      ...Object.entries(allGeometricVariations).length > 1 ?
          [ `${ CSS_Namespace }__${ toUpperCamelCase(activeGeometricVariation) }GeometricVariation` ] : [],
      ...activeGeometricModifiers.map(
        (geometricModifier: string): string =>
            `${ CSS_Namespace }__${ toUpperCamelCase(geometricModifier) }GeometricModifier`
      ),
      ...Object.entries(allDecorativeVariations).length > 1 ?
          [ `${ CSS_Namespace }__${ toUpperCamelCase(activeDecorativeVariation) }DecorativeVariation` ] : [],
      ...activeDecorativeModifiers.map(
        (activeDecorativeModifier: string): string =>
            `${ CSS_Namespace }__${ toUpperCamelCase(activeDecorativeModifier) }DecorativeModifier`
      ),
      ...other
    ];
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
