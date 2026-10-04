import VuePropertyValidator from "./VuePropertyValidator";
import { isString, isElementOfEnumeration } from "@yamato-daiwa/es-extensions";


export default function GeometricModifiersVuePropertyValidator(
  {
    GeometricModifiers,
    CSS_NAMESPACE: componentName
  }: Readonly<{
    GeometricModifiers: Readonly<{ [key: string]: string; }>;
    CSS_NAMESPACE: string;
  }>
): (targetVueProperty: unknown) => boolean {
  return VuePropertyValidator.create({
    checker: (rawValue: unknown): boolean => Array.isArray(rawValue) && rawValue.every(
      (element: unknown): boolean => isString(element) && isElementOfEnumeration(element, GeometricModifiers)
    ),
    messageSpecificPart: `Each array element must the member of \`${ componentName }.GeometricModifiers\` enumeration.`,
    propertyName: "geometricModifiers",
    componentName
  });
}
