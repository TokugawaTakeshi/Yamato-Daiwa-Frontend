import VuePropertyValidator from "./VuePropertyValidator";
import { isNaturalNumberOrZero } from "@yamato-daiwa/es-extensions";


export default function NaturalNumberOrZeroVuePropertyValidator(
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
    checker: isNaturalNumberOrZero,
    messageSpecificPart:
        isPropertyRequired ?
            "Must be the 0 or natural number." :
            "Must be 0, natural number or undefined (explicit or omitted).",
    propertyName,
    componentName
  });
}
