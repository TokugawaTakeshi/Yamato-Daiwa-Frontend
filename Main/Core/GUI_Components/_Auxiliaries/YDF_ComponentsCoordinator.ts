import type { YDF_Component } from "./YDF_Component";
import {
  isNotUndefined,
  isString,
  setObjectProperties,
  toLowerCamelCase,
  toScreamingSnakeCase,
  toUpperCamelCase
} from "@yamato-daiwa/es-extensions";


export abstract class YDF_ComponentsCoordinator {

  public static areComponentsThemesCommon: boolean = false;


  /* ━━━ Customization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ For GUI Components without Children GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static defineThemes<TargetComponentClassType extends {
    CSS_NAMESPACE: string;
    Themes: YDF_Component.Themes;
    themesCSS_Classes: { [themeValue: string]: string; };
  }>(
    TargetComponentClass: TargetComponentClassType,
    definitions: YDF_Component.CustomThemesDefinition
  ): TargetComponentClassType {

    for (const definition of definitions) {

      if (isString(definition)) {

        const themeValue: string = toScreamingSnakeCase(definition);

        TargetComponentClass.Themes[toLowerCamelCase(definition)] = themeValue;
        TargetComponentClass.themesCSS_Classes[themeValue] =
            `${ TargetComponentClass.CSS_NAMESPACE }__${ toUpperCamelCase(themeValue) }Theme`;

      } else {

        const themeValue: string = toScreamingSnakeCase(definition.name);

        TargetComponentClass.Themes[definition.name] = themeValue;
        TargetComponentClass.themesCSS_Classes[themeValue] = definition.modifierCSS_Class;

      }

    }

    return TargetComponentClass;

  }

  public static defineGeometricVariations<
    TargetComponentClassType extends {
      CSS_NAMESPACE: string;
      GeometricVariations: { [geometricVariationKey: string]: string; };
      geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; };
    }
  >(
    TargetComponentClass: TargetComponentClassType,
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): TargetComponentClassType {

    for (const definition of definitions) {

      if (isString(definition)) {

        const geometricVariationValue: string = toScreamingSnakeCase(definition);

        TargetComponentClass.GeometricVariations[toLowerCamelCase(definition)] = geometricVariationValue;
        TargetComponentClass.geometricVariationsCSS_Classes[geometricVariationValue] =
            `${ TargetComponentClass.CSS_NAMESPACE }__${ toUpperCamelCase(geometricVariationValue) }GeometricVariation`;

      } else {

        const geometricVariationValue: string = toScreamingSnakeCase(definition.name);

        TargetComponentClass.GeometricVariations[definition.name] = geometricVariationValue;
        TargetComponentClass.geometricVariationsCSS_Classes[geometricVariationValue] = definition.modifierCSS_Class;

      }

    }

    return TargetComponentClass;

  }

  public static defineDecorativeVariations<
    TargetComponentClassType extends {
      CSS_NAMESPACE: string;
      DecorativeVariations: { [decorativeVariationKey: string]: string; };
      decorativeVariationsCSS_Classes: { [geometricVariationValue: string]: string; };
    }
  >(
    TargetComponentClass: TargetComponentClassType,
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): TargetComponentClassType {

    for (const definition of definitions) {

      if (isString(definition)) {

        const decorativeVariationValue: string = toScreamingSnakeCase(definition);

        TargetComponentClass.DecorativeVariations[toLowerCamelCase(definition)] = decorativeVariationValue;
        TargetComponentClass.decorativeVariationsCSS_Classes[decorativeVariationValue] =
            `${ TargetComponentClass.CSS_NAMESPACE }__${ toUpperCamelCase(decorativeVariationValue) }DecorativeVariation`;

      } else {

        const decorativeVariationValue: string = toScreamingSnakeCase(definition.name);

        TargetComponentClass.DecorativeVariations[definition.name] = decorativeVariationValue;
        TargetComponentClass.decorativeVariationsCSS_Classes[decorativeVariationValue] = definition.modifierCSS_Class;

      }

    }

    return TargetComponentClass;

  }


  /* ┅┅┅ For GUI Components with Children GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents<
    TargetComponentClassType extends {
      Themes: YDF_Component.Themes;
      themesCSS_Classes: { [themeValue: string]: string; };
      selfAndChildrenComponentsThemesCorrespondence:
          { [ childrenComponentKey: string ]: { [ownThemeValue: string]: string; }; };
    }
  >(
    TargetComponentClass: TargetComponentClassType,
    ownAndCorrespondingChildrenThemesDefinition: YDF_Component.OwnAndCorrespondingChildrenThemesDefinition.Generalized
  ): TargetComponentClassType {

    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions -- [ Approach ]
    * Triggering the initialization of `_selfAndChildrenComponentsThemesCorrespondence`. */
    TargetComponentClass.selfAndChildrenComponentsThemesCorrespondence;

    for (
      const {
        ownThemeKey,
        themeModifierCSS_Class = `__${ toUpperCamelCase(ownThemeKey) }`,
        correspondenceByChildren
      } of ownAndCorrespondingChildrenThemesDefinition
    ) {

      const ownThemeValue: string = toScreamingSnakeCase(ownThemeKey);

      TargetComponentClass.themesCSS_Classes[ownThemeValue] = themeModifierCSS_Class;

      for (
        const [ childComponentName, ownThemesValuesAndChildThemesValues ] of Object.entries(correspondenceByChildren)
      ) {

        setObjectProperties(
          TargetComponentClass,
          {
            [`_selfAndChildrenComponentsThemesCorrespondence.${ childComponentName }`]:
                { value: ownThemesValuesAndChildThemesValues[ownThemeValue] }
          }
        );

      }

    }

    return TargetComponentClass;

  }

  public static defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents<
    TargetComponentClassType extends {
      GeometricVariations: { [geometricVariationKey: string]: string; };
      geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; };
      selfAndChildrenComponentsGeometricVariationsCorrespondence:
          { [ childrenComponentKey: string ]: { [ownGeometricVariationValue: string]: string; }; };
    }
  >(
    TargetComponentClass: TargetComponentClassType,
    ownAndCorrespondingChildrenGeometricVariationsDefinition:
        YDF_Component.OwnAndCorrespondingChildrenGeometricVariationsDefinition.Generalized
  ): TargetComponentClassType {

    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions -- [ Approach ]
    * Triggering the initialization of `_selfAndChildrenComponentsGeometricVariationsCorrespondence`. */
    TargetComponentClass.selfAndChildrenComponentsGeometricVariationsCorrespondence;

    for (
      const {
        ownGeometricVariationKey,
        geometricVariationModifierCSS_Class = `__${ toUpperCamelCase(ownGeometricVariationKey) }`,
        correspondenceByChildren
      } of ownAndCorrespondingChildrenGeometricVariationsDefinition
    ) {

      const ownGeometricVariationValue: string = toScreamingSnakeCase(ownGeometricVariationKey);

      TargetComponentClass.geometricVariationsCSS_Classes[ownGeometricVariationValue] = geometricVariationModifierCSS_Class;

      for (
        const [
          childComponentName,
          ownGeometricVariationsValuesAndChildGeometricVariationsValues
        ] of Object.entries(correspondenceByChildren)
      ) {

        setObjectProperties(
          TargetComponentClass,
          {
            [`_selfAndChildrenComponentsGeometricVariationsCorrespondence.${ childComponentName }`]:
                { value: ownGeometricVariationsValuesAndChildGeometricVariationsValues[ownGeometricVariationValue] }
          }
        );

      }

    }

    return TargetComponentClass;

  }

  public static defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents<
    TargetComponentClassType extends {
      DecorativeVariations: { [decorativeVariationKey: string]: string; };
      decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; };
      selfAndChildrenComponentsDecorativeVariationsCorrespondence:
          { [ childrenComponentKey: string ]: { [ownDecorativeVariationValue: string]: string; }; };
    }
  >(
    TargetComponentClass: TargetComponentClassType,
    ownAndCorrespondingChildrenDecorativeVariationsDefinition:
        YDF_Component.OwnAndCorrespondingChildrenDecorativeVariationsDefinition.Generalized
  ): TargetComponentClassType {

    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions -- [ Approach ]
    * Triggering the initialization of `_selfAndChildrenComponentsDecorativeVariationsCorrespondence`. */
    TargetComponentClass.selfAndChildrenComponentsDecorativeVariationsCorrespondence;

    for (
      const {
        ownDecorativeVariationKey,
        decorativeVariationModifierCSS_Class = `__${ toUpperCamelCase(ownDecorativeVariationKey) }`,
        correspondenceByChildren
      } of ownAndCorrespondingChildrenDecorativeVariationsDefinition
    ) {

      const ownDecorativeVariationValue: string = toScreamingSnakeCase(ownDecorativeVariationKey);

      TargetComponentClass.decorativeVariationsCSS_Classes[ownDecorativeVariationValue] = decorativeVariationModifierCSS_Class;

      for (
        const [
          childComponentName,
          ownDecorativeVariationsValuesAndChildDecorativeVariationsValues
        ] of Object.entries(correspondenceByChildren)
      ) {

        setObjectProperties(
          TargetComponentClass,
          {
            [`_selfAndChildrenComponentsDecorativeVariationsCorrespondence.${ childComponentName }`]:
                { value: ownDecorativeVariationsValuesAndChildDecorativeVariationsValues[ownDecorativeVariationValue] }
          }
        );

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
