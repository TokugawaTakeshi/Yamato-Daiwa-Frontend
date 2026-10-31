import PaginationBase from "./Pagination.base";
import { RawObjectDataProcessor, isUndefined } from "@yamato-daiwa/es-extensions";


export abstract class Pagination extends PaginationBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    maximalPageNumberButtonsCount: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumber,
      isNaN_Forbidden: true,
      undefinedValueSubstitution: 5,
      isNullForbidden: true
    },

    accessibilityGuidance: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    noDisplayMovingToUltimatePagesButtons: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    noDisplayMovingToAdjacentPagesButtons: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    theme: {
      type: String,
      undefinedValueSubstitution: Pagination.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(PaginationBase.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Pagination.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: Pagination.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: Pagination.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Pagination.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Pagination.GeometricVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Pagination.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Pagination.DecorativeVariations.${ key }`, value })
          )
    }

  };


  /* ━━━ State simulations specification ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly statesSimulationsSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    totalPagesCount: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumber,
      isNaN_Forbidden: true,
      undefinedValueSubstitution: 10,
      isNullForbidden: true
    },

    currentPageNumber: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumber,
      isNaN_Forbidden: true,
      undefinedValueSubstitution: 1,
      isNullForbidden: true,
      customValidators: {
        validationFunction:
            (
              { value: currentPageNumber, rawData__currentObjectDepth }:
                  RawObjectDataProcessor.PropertyOrElementCustomValidator.CompoundParameter<number>
            ): boolean =>
                isUndefined(rawData__currentObjectDepth.totalPagesCount) ||
                    currentPageNumber <= Number(rawData__currentObjectDepth.totalPagesCount),
        descriptionForLogging: "\"currentPageNumber\" can not be grater than \"totalPagesCount\"."
      }
    }

  };

}
