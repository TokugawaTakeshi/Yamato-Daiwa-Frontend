import { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";
import AsynchronousValidations from "../../_Auxiliaries/AsynchronousValidations";


export default function generateValidatableControlGeneralStatesSimulationsSpecification(
  {
    invalidInputHighlightingIfAnyValidationErrorsMessages = false,
    validValueHighlightingIfNoValidationErrorsMessages = false,
    validationErrorsMessages = false,
    asynchronousValidationsStatuses = false
  }: Readonly<{
    invalidInputHighlightingIfAnyValidationErrorsMessages?: boolean;
    validValueHighlightingIfNoValidationErrorsMessages?: boolean;
    validationErrorsMessages?: boolean;
    asynchronousValidationsStatuses?: boolean;
  }>
): RawObjectDataProcessor.PropertiesSpecification {
  return {

    ...invalidInputHighlightingIfAnyValidationErrorsMessages ?

        {
          invalidInputHighlightingIfAnyValidationErrorsMessages: {
            type: Boolean,
            undefinedValueSubstitution: false,
            isNullForbidden: true
          }
        } :
        null,

    ...validValueHighlightingIfNoValidationErrorsMessages ?

        {
          validValueHighlightingIfNoValidationErrorsMessages: {
            type: Boolean,
            undefinedValueSubstitution: false,
            isNullForbidden: true
          }
        } :
        null,

    ...validationErrorsMessages ?

        {
          validationErrorsMessages: {
            type: RawObjectDataProcessor.ValuesTypesIDs.polymorphic,
            undefinedValueSubstitution: false,
            isNullForbidden: true,
            alternatives: [
              {
                type: Array,
                areUndefinedElementsForbidden: true,
                areNullElementsForbidden: true,
                element: {
                  type: String,
                  minimalCharactersCount: 1
                }
              },
              {
                type: Boolean
              }
            ]
          }
        } :
        null,

    ...asynchronousValidationsStatuses ?

        {

          asynchronousValidationsStatuses: {
            type: RawObjectDataProcessor.ValuesTypesIDs.polymorphic,
            undefinedValueSubstitution: false,
            isNullForbidden: true,
            alternatives: [
              {
                type: Array,
                areUndefinedElementsForbidden: true,
                areNullElementsForbidden: true,
                element: {
                  type: Object,
                  properties: {
                    ID: {
                      type: String,
                      isUndefinedForbidden: true,
                      isNullForbidden: true,
                      allowedAlternatives: Object.values(AsynchronousValidations.Statuses)
                    },
                    message: {
                      type: String,
                      isUndefinedForbidden: true,
                      isNullForbidden: true,
                      minimalCharactersCount: 1
                    }
                  }
                }
              },
              {
                type: Boolean
              }
            ]
          }

        } :
        null

  };
}
