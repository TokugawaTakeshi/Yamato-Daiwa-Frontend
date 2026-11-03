import VuePropertyValidator from "./VuePropertyValidator";
import { isString, isElementOfEnumeration } from "@yamato-daiwa/es-extensions";


export default function ElementOfEnumerationVuePropertyValidator(
  {
    componentName,
    propertyName,
    enumeration,
    isPropertyRequired,
    enumerationFullyQualifiedName
  }: Readonly<{
    componentName: string;
    propertyName: string;
    isPropertyRequired: boolean;
    enumeration: Readonly<{ [key: string]: string | number; }>;
    enumerationFullyQualifiedName: string;
  }>
): (targetVueProperty: unknown) => boolean {
  return VuePropertyValidator.create({
    checker: (rawValue: unknown): boolean => isString(rawValue) && isElementOfEnumeration(rawValue, enumeration),
    messageSpecificPart:
        isPropertyRequired ?
            `Must the an element of "${ enumerationFullyQualifiedName }" enumeration.` :
            `Must be either element of "${ enumerationFullyQualifiedName }" enumeration of undefined (explicit or omitted).`,
    propertyName,
    componentName
  });
}
