import type { _RouteLocationBase as VueRouterLocation, LocationQueryValue as VueRouterLocationQueryValue } from "vue-router";
import {
  isString,
  isUndefined,
  isNotUndefined,
  isEitherUndefinedOrNull
} from "@yamato-daiwa/es-extensions";


export default function extractVueRouteQueryParameterValueAsArrayOfStrings(
  {
    targetRoute,
    targetQueryParameterKey,
    arrayElementAdditionalValidator
  }: Readonly<{
    targetRoute: VueRouterLocation;
    targetQueryParameterKey: string;
    arrayElementAdditionalValidator?: (rawValue: string) => boolean;
  }>
): Array<string> {

  const queryParameterPotentialValue: VueRouterLocationQueryValue | Array<VueRouterLocationQueryValue> =
      targetRoute.query[targetQueryParameterKey];

  if (isEitherUndefinedOrNull(queryParameterPotentialValue)) {
    return [];
  }


  if (isString(queryParameterPotentialValue)) {

    if (isNotUndefined(arrayElementAdditionalValidator)) {
      return arrayElementAdditionalValidator(queryParameterPotentialValue) ? [ queryParameterPotentialValue ] : [];
    }


    return [ queryParameterPotentialValue ];

  }


  const queryParameterAccumulatingArrayedValue: Array<string> = [];

  for (const oneElementOfArrayedValue of queryParameterPotentialValue) {

    if (!isString(oneElementOfArrayedValue)) {
      continue;
    }


    if (isUndefined(arrayElementAdditionalValidator)) {
      queryParameterAccumulatingArrayedValue.push(oneElementOfArrayedValue);
      continue;
    }


    if (arrayElementAdditionalValidator(oneElementOfArrayedValue)) {
      queryParameterAccumulatingArrayedValue.push(oneElementOfArrayedValue);
    }

  }

  return queryParameterAccumulatingArrayedValue;

}
