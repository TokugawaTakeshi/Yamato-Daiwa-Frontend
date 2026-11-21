import ButtonBase from "./Button.base";
import { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class Button extends ButtonBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    HTML_Type: {
      type: String,
      undefinedValueSubstitution: Button.HTML_Types.regular,
      isNullForbidden: true,
      allowedAlternatives:
          Object.entries(Button.HTML_Types).
              map(
                ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                    ({ key: `Button__YDF.HTML_Types.${ key }`, value })
              )
    },

    label: {
      type: RawObjectDataProcessor.ValuesTypesIDs.polymorphic,
      undefinedForbiddenIf: {
        predicate:
            (
              { rawData__full: properties }:
                  RawObjectDataProcessor.ConditionAssociatedWithProperty.Predicate.Parameter
            ): boolean =>
                properties.HTML_Type === Button.HTML_Types.inputButton ||
                properties.HTML_Type === Button.HTML_Types.inputSubmit ||
                properties.HTML_Type === Button.HTML_Types.inputReset,
        descriptionForLogging:
            "`HTML_Type` property specified with `Button__YDF.HTML_Types.inputButton`, " +
              "`Button__YDF.HTML_Types.inputSubmit` or `Button__YDF.HTML_Types.inputReset`"
      },
      isNullForbidden: true,
      alternatives: [
        {
          type: String,
          minimalCharactersCount: 1
        },
        {
          type: Number,
          numbersSet: RawObjectDataProcessor.NumbersSets.anyRealNumber,
          isNaN_Forbidden: true
        }
      ]
    },

    accessibilityGuidance: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    URI: {

      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,

      /* [ Theory ] May be the "#" */
      minimalCharactersCount: 1

    },

    mustOpenLinkInNewTab: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    mustRequestNotFollowLinkForCrawlingToSearchEngine: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    disabled: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    toggled: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    theme: {
      type: String,
      undefinedValueSubstitution: Button.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Button.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Button__YDF.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: Button.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: Button.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Button.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Button__YDF.GeometricVariations.${ key }`, value })
          )
    },

    geometricModifiers: {
      type: Array,
      undefinedValueSubstitution: [],
      isNullForbidden: true,
      areUndefinedElementsForbidden: true,
      areNullElementsForbidden: true,
      element: {
        type: String,
        allowedAlternatives: Object.
            entries(Button.GeometricModifiers).
            map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Button__YDF.GeometricModifiers.${ key }`, value }))
      }
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: Button.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Button.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Button__YDF.DecorativeVariations.${ key }`, value })
          )
    },

    decorativeModifiers: {
      type: Array,
      undefinedValueSubstitution: [],
      isNullForbidden: true,
      areUndefinedElementsForbidden: true,
      areNullElementsForbidden: true,
      element: {
        type: String,
        allowedAlternatives: Object.
          entries(Button.DecorativeModifiers).
          map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
              ({ key: `Button__YDF.DecorativeModifiers.${ key }`, value }))
      }
    }

  };

}
