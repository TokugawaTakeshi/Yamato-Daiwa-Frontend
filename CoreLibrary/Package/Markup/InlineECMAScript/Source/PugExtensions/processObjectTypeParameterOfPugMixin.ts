import {
  RawObjectDataProcessor,
  Logger,
  InvalidParameterValueError,
  stringifyAndFormatArbitraryValue,
  isEitherUndefinedOrNull,
  isArbitraryObject,
  isNotUndefined
} from "@yamato-daiwa/es-extensions";
import type { ParsedJSON_Object } from "@yamato-daiwa/es-extensions";


export default function processObjectTypeParameterOfPugMixin(
  {
    rawParameter: rawMixinParameter,
    parameterNumber: mixinParameterNumber,
    parameterName: mixinParameterName,
    parameterPropertiesSpecification: mixinParameterPropertiesSpecification,
    mixinName
  }: Readonly<{
    rawParameter: unknown;
    parameterNumber: number;
    parameterName: string;
    parameterPropertiesSpecification: RawObjectDataProcessor.PropertiesSpecification;
    mixinName: string;
  }>
): ParsedJSON_Object {

  const mixinParameterRequiredPropertiesNames: ReadonlyArray<string> = Object.entries(mixinParameterPropertiesSpecification).
      filter(
        ([ _propertyName, propertySpecification ]: [ string, RawObjectDataProcessor.PropertySpecification ]): boolean =>
            propertySpecification.isUndefinedForbidden === true &&
            propertySpecification.isNullForbidden === true
      ).
      map(([ propertyName ]: [ string, RawObjectDataProcessor.PropertySpecification ]): string => propertyName);

  if (isEitherUndefinedOrNull(rawMixinParameter)) {

    if (mixinParameterRequiredPropertiesNames.length > 0) {
      Logger.throwErrorAndLog({
        errorInstance: new InvalidParameterValueError({
          parameterName: mixinName,
          parameterNumber: 1,
          customMessage:
              `Object-type parameter No. ${ mixinParameterNumber } (named as "${ mixinParameterName }") ` +
                `of the Pug mixin "${ mixinName }" has been omitted or null while must be because it has the following ` +
                "required properties:\n" +
                mixinParameterRequiredPropertiesNames.
                    map((requiredPropertyName: string): string => `● ${ requiredPropertyName }`).
                    join("\n")
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "processObjectTypeParameterOfPugMixin(compoundParameter)"
      });
    }


    return Object.entries(mixinParameterPropertiesSpecification).reduce(
      (
        processedMixinParameter: ParsedJSON_Object,
        [ propertyName, propertySpecification ]: [ string, RawObjectDataProcessor.PropertySpecification ]
      ): ParsedJSON_Object => {

        if (isNotUndefined(propertySpecification.undefinedValueSubstitution)) {
          processedMixinParameter[propertyName] = propertySpecification.undefinedValueSubstitution;
        }

        return processedMixinParameter;

      },
      {}
    );

  }


  if (!isArbitraryObject(rawMixinParameter)) {
    Logger.throwErrorAndLog({
      errorInstance: new InvalidParameterValueError({
        parameterName: mixinParameterName,
        parameterNumber: 1,
        customMessage:
            `Object-type No. ${ mixinParameterNumber } (named as "${ mixinParameterName }") ` +
              `of the Pug mixin "${ mixinName }" must be an object while actually has type ` +
              `"${ typeof rawMixinParameter }" and value:\n` +
              stringifyAndFormatArbitraryValue(rawMixinParameter)
      }),
      title: InvalidParameterValueError.localization.defaultTitle,
      occurrenceLocation: "processObjectTypeParameterOfPugMixin(compoundParameter)"
    });
  }


  const mixinParameterProcessingResult: RawObjectDataProcessor.ProcessingResult<ParsedJSON_Object> =
      RawObjectDataProcessor.process(
        rawMixinParameter,
        {
          nameForLogging: `Parameter No. ${ mixinParameterNumber } of "${ mixinName }" mixin`,
          subtype: RawObjectDataProcessor.ObjectSubtypes.fixedSchema,
          properties: mixinParameterPropertiesSpecification
        }
      );

  if (mixinParameterProcessingResult.isRawDataInvalid) {
    Logger.throwErrorAndLog({
      errorInstance: new InvalidParameterValueError({
        customMessage:
            `Object-type parameter No. ${ mixinParameterNumber } (named as "${ mixinParameterName }") ` +
              `of the Pug mixin "${ mixinName }" has one or more invalid properties:\n` +
              RawObjectDataProcessor.formatValidationErrorsList(mixinParameterProcessingResult.validationErrorsMessages)
      }),
      title: InvalidParameterValueError.localization.defaultTitle,
      occurrenceLocation: "processObjectTypeParameterOfPugMixin(compoundParameter)"
    });
  }


  return mixinParameterProcessingResult.processedData;

}
