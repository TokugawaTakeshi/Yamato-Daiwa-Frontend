import VuePropertyValidator from "./VuePropertyValidator";
import { isNonEmptyString } from "@yamato-daiwa/es-extensions";


export default function NonEmptyStringVuePropertyValidator(
  {
    componentName,
    propertyName,
    isPropertyRequired
  }: Readonly<{
    componentName: string;
    propertyName: string;
    isPropertyRequired: boolean;
  }>
): (targetVueProperty: Exclude<unknown, undefined>) => boolean {
  return VuePropertyValidator.create({
    checker: isNonEmptyString,
    messageSpecificPart:
        isPropertyRequired ?
            "Must be the non-empty string." :
            "Must be either non-empty string or undefined (explicit or omitted).",
    propertyName,
    componentName
  });
}
