import AccordionBase from "./Accordion.base";
import AccordionDOM_AccessResources from "./AccordionDOM_AccessResources";
import { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class Accordion extends AccordionBase {

  public static readonly DOM_AccessResources: AccordionDOM_AccessResources =
      AccordionDOM_AccessResources;

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    title: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    initiallyExpanded: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    panelAdditionalCSS_Classes: {
      type: RawObjectDataProcessor.ValuesTypesIDs.polymorphic,
      undefinedValueSubstitution: [],
      isNullForbidden: true,
      alternatives: [
        {
          type: String,
          minimalCharactersCount: 1
        },
        {
          type: Array,
          areUndefinedElementsForbidden: true,
          areNullElementsForbidden: true,
          element: {
            type: String,
            minimalCharactersCount: 1
          }
        }
      ]
    },

    theme: {
      type: String,
      undefinedValueSubstitution: Accordion.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Accordion.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Accordion.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: Accordion.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: Accordion.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Accordion.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Accordion.GeometricVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: Accordion.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Accordion.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Accordion.DecorativeVariations.${ key }`, value })
          )
    }

  };


  /* ━━━ IDs Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private static counterForID_Generating: number = 0;

  public static generateInstanceID(uniqueDynamicPart?: string): string {
    return `Accordion--YDF-${ uniqueDynamicPart ?? ++Accordion.counterForID_Generating }`;
  }

}
