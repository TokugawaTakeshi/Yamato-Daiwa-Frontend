import VuePropertyValidator from "./VuePropertyValidator";
import { isString, isElementOfEnumeration } from "@yamato-daiwa/es-extensions";


export default function ThemeVuePropertyValidator(
  {
    Themes,
    CSS_NAMESPACE: componentName
  }: Readonly<{
    Themes: Readonly<{ [key: string]: string; }>;
    CSS_NAMESPACE: string;
  }>
): (targetVueProperty: Exclude<unknown, undefined>) => boolean {
  return VuePropertyValidator.create({
    checker: (rawValue: Exclude<unknown, undefined>): boolean =>
        isString(rawValue) && isElementOfEnumeration(rawValue, Themes),
    messageSpecificPart:
        `Must be the string herewith one among values of \`${ componentName }.Themes\` associative array including ` +
          `the ones defined via \`${ componentName }.defineThemes()\`.`,
    propertyName: "theme",
    componentName
  });
}
