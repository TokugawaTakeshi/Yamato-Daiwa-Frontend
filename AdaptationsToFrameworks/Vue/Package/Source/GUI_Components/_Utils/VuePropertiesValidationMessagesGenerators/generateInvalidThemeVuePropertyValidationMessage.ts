export default function generateInvalidThemeVuePropertyValidationMessage(
  { componentName }: Readonly<{ componentName: string; }>
): string {
  return `Must be the one among values of \`${ componentName }.Themes\` associative array including the ones defined ` +
    `via \`${ componentName }.defineThemes()\`.`;
}
