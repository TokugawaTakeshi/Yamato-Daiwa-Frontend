import FilesUploaderBase from "./FilesUploader.base";
import { isNonEmptyString, isNumber, isUndefined, RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";
import generateValidatableControlGeneralStatesSimulationsSpecification from
    "../generateValidatableControlGeneralStatesSimulationsSpecification";


export abstract class FilesUploader extends FilesUploaderBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    label: {
      type: String,
       isUndefinedForbidden: false,
       isNullForbidden: true,
      minimalCharactersCount: 1
    },

    accessibilityGuidance: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    externalLabelHTML_ID: {
      type: String,
      undefinedForbiddenIf: {
        predicate:
            (
              { rawData__full: properties }:
                  RawObjectDataProcessor.ConditionAssociatedWithProperty.Predicate.Parameter
            ): boolean =>
                !isNonEmptyString(properties.label) && !isNonEmptyString(properties.accessibilityGuidance),
        descriptionForLogging: "Neither \"label\" nor \"accessibilityGuidance\" has been specified with non-empty strings"
      },
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    guidance: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    value: {
      type: RawObjectDataProcessor.ValuesTypesIDs.polymorphic,
      isUndefinedForbidden: false,
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

    disabled: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    readonly: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    required: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    mustDisplayAppropriateBadgeIfInputIsRequired: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    mustDisplayAppropriateBadgeIfInputIsOptional: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    minimalFilesCount: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumberOrZero,
      isNaN_Forbidden: true,
      undefinedValueSubstitution: 1,
      isNullForbidden: true
    },

    maximalFilesCount: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumber,
      isNaN_Forbidden: true,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      customValidators: {
        validationFunction:
            (
              { value: maximalFilesCount, rawData__currentObjectDepth }:
                  RawObjectDataProcessor.PropertyOrElementCustomValidator.CompoundParameter<number>
            ): boolean =>
                isUndefined(rawData__currentObjectDepth.minimalFilesCount) ||
                (
                  isNumber(rawData__currentObjectDepth.minimalFilesCount, { mustConsiderNaN_AsNumber: false }) &&
                      maximalFilesCount >= rawData__currentObjectDepth.minimalFilesCount
                ),
        descriptionForLogging: "\"maximalFilesCount\" could not be less than \"minimalFilesCount\""
      }
    },

    supportedFilesNamesExtensions__leadingDotsAreOptional: {
      type: Array,
      undefinedValueSubstitution: [],
      isNullForbidden: true,
      areUndefinedElementsForbidden: true,
      areNullElementsForbidden: true,
      element: {
        type: String,
        minimalCharactersCount: 1
      }
    },

    noFilePickingButton: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    noDragAndDropArea: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true,
      customValidators: {
        validationFunction:
            (
              { value: noDragAndDropArea, rawData__currentObjectDepth }:
                  RawObjectDataProcessor.PropertyOrElementCustomValidator.CompoundParameter<boolean>
            ): boolean =>
                !noDragAndDropArea || rawData__currentObjectDepth.noFilePickingButton !== true,
        descriptionForLogging:
            "\"noDragAndDropArea\" could not have \"true\" value if \"noFilePickingButton\" is \"true\" because " +
              "at least one uploading method must be available."
      }
    },

    noDragAndDropAreaOnTouchScreens: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    initialImageAspectRatio: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 3
    },

    /** @description
     * 1 minimal character is definitely not enough for unique string, but in MVC mode it could be the variable. */
    instanceID_UniqueDynamicPart: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    inputElementHTML_ID: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    labelElementHTML_ID: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    theme: {
      type: String,
      undefinedValueSubstitution: FilesUploader.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(FilesUploader.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `FilesUploader.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: FilesUploader.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: FilesUploader.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(FilesUploader.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `FilesUploader.DecorativeVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: FilesUploader.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(FilesUploader.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `FilesUploader.DecorativeVariations.${ key }`, value })
          )
    }

  };

  public static readonly statesSimulationsSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    filesProcessingStatuses: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    singleImagePreview: {
      type: RawObjectDataProcessor.ValuesTypesIDs.polymorphic,
      undefinedValueSubstitution: false,
      isNullForbidden: true,
      alternatives: [
        {
          type: Boolean,
          trueOnly: true
        },
        {
          type: String,
          minimalCharactersCount: 1
        }
      ]
    },

    multipleImagesPreview: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    dragOver: {
      type: Boolean,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    busy: {
      type: Boolean,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    ...generateValidatableControlGeneralStatesSimulationsSpecification({
      invalidInputHighlightingIfAnyValidationErrorsMessages: true,
      validValueHighlightingIfNoValidationErrorsMessages: true,
      validationErrorsMessages: true,
      asynchronousValidationsStatuses: true
    })

  };

}
