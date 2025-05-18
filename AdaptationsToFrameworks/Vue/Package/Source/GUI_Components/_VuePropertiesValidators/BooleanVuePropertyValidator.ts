import VuePropertyValidator from "./VuePropertyValidator";
import { isBoolean } from "@yamato-daiwa/es-extensions";


export default function BooleanVuePropertyValidator(
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
    checker: isBoolean,
    messageSpecificPart:
        isPropertyRequired ?
            "Must be the boolean." :
            "Must be either boolean string or undefined (explicit or omitted).",
    propertyName,
    componentName
  });
}
