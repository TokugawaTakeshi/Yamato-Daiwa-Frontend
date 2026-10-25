import type { YDF_Component } from "./YDF_Component";
import {
  isNotUndefined,
  isString,
  toLowerCamelCase,
  toScreamingSnakeCase
} from "@yamato-daiwa/es-extensions";


export abstract class YDF_ComponentsCoordinator {

  public static areComponentsThemesCommon: boolean = false;


  /* ━━━ Customization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static defineThemes<TargetComponentClassType extends { Themes: YDF_Component.Themes; }>(
    TargetComponentClass: TargetComponentClassType,
    definitions: YDF_Component.CustomThemesDefinition
  ): TargetComponentClassType {

    for (const definition of definitions) {
      if (isString(definition)) {
        TargetComponentClass.Themes[toLowerCamelCase(definition)] = toScreamingSnakeCase(definition);
      } else {
        TargetComponentClass.Themes[definition.name] = definition.modifierCSS_Class;
      }
    }

    return TargetComponentClass;

  }

  public static defineGeometricVariations<
    TargetComponentClassType extends { GeometricVariations: { [geometricVariationName: string]: string; }; }
  >(
    TargetComponentClass: TargetComponentClassType,
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): TargetComponentClassType {

    for (const definition of definitions) {
      if (isString(definition)) {
        TargetComponentClass.GeometricVariations[toLowerCamelCase(definition)] = toScreamingSnakeCase(definition);
      } else {
        TargetComponentClass.GeometricVariations[definition.name] = definition.modifierCSS_Class;
      }
    }

    return TargetComponentClass;

  }

  public static defineDecorativeVariations<
    TargetComponentClassType extends { DecorativeVariations: { [decorativeVariationName: string]: string; }; }
  >(
    TargetComponentClass: TargetComponentClassType,
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): TargetComponentClassType {

    for (const definition of definitions) {
      if (isString(definition)) {
        TargetComponentClass.DecorativeVariations[toLowerCamelCase(definition)] = toScreamingSnakeCase(definition);
      } else {
        TargetComponentClass.DecorativeVariations[definition.name] = definition.modifierCSS_Class;
      }
    }

    return TargetComponentClass;

  }


  /* ━━━ Applying of CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static getActualRootElementModifierCSS_Classes(

    {

      Themes: allThemes,
      themesCSS_Classes,

      GeometricVariations: allGeometricVariations,
      geometricVariationsCSS_Classes,
      GeometricModifiers: allGeometricModifiers = {},
      geometricModifiersCSS_Classes = {},

      DecorativeVariations: allDecorativeVariations,
      decorativeVariationsCSS_Classes,
      DecorativeModifiers: allDecorativeModifiers = {},
      decorativeModifiersCSS_Classes = {}

    }:

        Readonly<{

          /* ┅┅┅ < Base Class Fields ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
          /* ╍╍╍ Theme ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
          Themes: YDF_Component.Themes;
          themesCSS_Classes: Readonly<{ [themeValue: string]: string; }>;

          /* ╍╍╍ Geometry ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
          GeometricVariations: YDF_Component.GeometricVariations<{ [customGeometricVariation: string]: string; }>;
          geometricVariationsCSS_Classes: Readonly<{ [geometricVariationValue: string]: string; }>;
          GeometricModifiers?: Readonly<{ [geometricModifierKey: string]: string; }>;
          geometricModifiersCSS_Classes?: Readonly<{ [geometricModifierValue: string]: string; }>;

          /* ╍╍╍ Decoration ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
          DecorativeVariations: YDF_Component.DecorativeVariations<{ [customDecorativeVariation: string]: string; }>;
          decorativeVariationsCSS_Classes: Readonly<{ [decorativeVariationKey: string]: string; }>;
          DecorativeModifiers?: Readonly<{ [decorativeModifierKey: string]: string; }>;
          decorativeModifiersCSS_Classes?: Readonly<{ [decorativeModifierValue: string]: string; }>;

          /* ┅┅┅ Base Class Fields > ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */

        }>,

    {

      theme: activeTheme,
      areThemesCSS_ClassesCommon,

      geometricVariation: activeGeometricVariation,
      geometricModifiers: activeGeometricModifiers = [],

      decorativeVariation: activeDecorativeVariation,
      decorativeModifiers: activeDecorativeModifiers = [],

      otherCSS_Classes = []

    }:

        Readonly<{

          /* ┅┅┅ < Input Parameters ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
          /* ╍╍╍ Theme ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
          theme: string;
          areThemesCSS_ClassesCommon: boolean;

          /* ╍╍╍ Geometry ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
          geometricVariation: string;
          geometricModifiers?: ReadonlyArray<string>;

          /* ╍╍╍ Decoration ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
          decorativeVariation?: string;
          decorativeModifiers?: ReadonlyArray<string>;

          /* ╍╍╍ Other ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
          otherCSS_Classes?: ReadonlyArray<string>;

          /* ┅┅┅ Input Parameters > ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */

        }>

  ): Array<string> {

    return [

      ...Object.entries(allThemes).length > 1 && !areThemesCSS_ClassesCommon ?
          [ themesCSS_Classes[activeTheme] ] : [],

      ...Object.entries(allGeometricVariations).length > 1 ?
          [ geometricVariationsCSS_Classes[activeGeometricVariation] ] : [],

      ...Object.entries(allGeometricModifiers).length > 0 ?
          activeGeometricModifiers.map(
            (geometricModifierValue: string): string => geometricModifiersCSS_Classes[geometricModifierValue]
          ) :
          [],

      ...Object.entries(allDecorativeVariations).length > 1 && isNotUndefined(activeDecorativeVariation) ?
          [ decorativeVariationsCSS_Classes[activeDecorativeVariation] ] : [],

      ...Object.entries(allDecorativeModifiers).length > 0 ?
          activeDecorativeModifiers.map(
            (decorativeModifierValue: string): string => decorativeModifiersCSS_Classes[decorativeModifierValue]
          ) :
          [],

      ...otherCSS_Classes

    ];

  }

}


export default YDF_ComponentsCoordinator;
