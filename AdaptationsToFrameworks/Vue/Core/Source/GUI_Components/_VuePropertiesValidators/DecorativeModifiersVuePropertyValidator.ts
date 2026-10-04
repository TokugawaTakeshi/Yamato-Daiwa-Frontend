import VuePropertyValidator from "./VuePropertyValidator";
import { isString, isElementOfEnumeration } from "@yamato-daiwa/es-extensions";


export default function DecorativeModifiersVuePropertyValidator(
  {
    DecorativeModifiers,
    CSS_NAMESPACE: componentName
  }: Readonly<{
    DecorativeModifiers: Readonly<{ [key: string]: string; }>;
    CSS_NAMESPACE: string;
  }>
): (targetVueProperty: unknown) => boolean {
  return VuePropertyValidator.create({
    checker: (rawValue: unknown): boolean => Array.isArray(rawValue) && rawValue.every(
      (element: unknown): boolean => isString(element) && isElementOfEnumeration(element, DecorativeModifiers)
    ),
    messageSpecificPart: `Each array element must the member of \`${ componentName }.DecorativeModifiers\` enumeration.`,
    propertyName: "decorativeModifiers",
    componentName
  });
}
