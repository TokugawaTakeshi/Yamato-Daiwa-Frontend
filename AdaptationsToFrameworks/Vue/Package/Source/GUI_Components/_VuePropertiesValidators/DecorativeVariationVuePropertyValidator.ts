import VuePropertyValidator from "./VuePropertyValidator";
import { isString, isElementOfEnumeration } from "@yamato-daiwa/es-extensions";


export default function DecorativeVariationVuePropertyValidator(
  {
    DecorativeVariations,
    CSS_NAMESPACE: componentName
  }: Readonly<{
    DecorativeVariations: Readonly<{ [key: string]: string; }>;
    CSS_NAMESPACE: string;
  }>
): (targetVueProperty: Exclude<unknown, undefined>) => boolean {
  return VuePropertyValidator.create({
    checker: (rawValue: Exclude<unknown, undefined>): boolean =>
        isString(rawValue) && isElementOfEnumeration(rawValue, DecorativeVariations),
    messageSpecificPart:
        `Must be the string herewith one among values of \`${ componentName }.DecorativeVariations\` associative array ` +
          `including the ones defined via \`${ componentName }.defineDecorativeVariations()\`.`,
    propertyName: "decorativeVariation",
    componentName
  });
}
