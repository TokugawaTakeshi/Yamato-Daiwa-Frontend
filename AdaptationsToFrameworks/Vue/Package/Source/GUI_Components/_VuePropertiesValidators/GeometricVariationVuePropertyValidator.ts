import VuePropertyValidator from "./VuePropertyValidator";
import { isString, isElementOfEnumeration } from "@yamato-daiwa/es-extensions";


export default function GeometricVariationVuePropertyValidator(
  {
    GeometricVariations,
    CSS_NAMESPACE: componentName
  }: Readonly<{
    GeometricVariations: Readonly<{ [key: string]: string; }>;
    CSS_NAMESPACE: string;
  }>
): (targetVueProperty: Exclude<unknown, undefined>) => boolean {
  return VuePropertyValidator.create({
    checker: (rawValue: Exclude<unknown, undefined>): boolean =>
        isString(rawValue) && isElementOfEnumeration(rawValue, GeometricVariations),
    messageSpecificPart:
        `Must be the string herewith one among values of \`${ componentName }.GeometricVariations\` associative array ` +
          ` including the ones defined via \`${ componentName }.defineGeometricVariations()\`.`,
    propertyName: "geometricVariation",
    componentName
  });
}
