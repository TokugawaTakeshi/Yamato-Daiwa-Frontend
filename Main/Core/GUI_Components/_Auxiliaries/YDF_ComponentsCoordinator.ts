import type { YDF_Component } from "./YDF_Component";
import {
  isString,
  toLowerCamelCase,
  toScreamingSnakeCase
} from "@yamato-daiwa/es-extensions";


export default abstract class YDF_ComponentsCoordinator {

  public static areComponentsThemesCommon: boolean = false;

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

}
