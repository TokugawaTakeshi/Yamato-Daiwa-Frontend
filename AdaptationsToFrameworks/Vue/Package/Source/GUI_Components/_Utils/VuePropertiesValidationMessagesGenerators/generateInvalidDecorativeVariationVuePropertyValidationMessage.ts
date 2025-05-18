export default function generateInvalidDecorativeVariationVuePropertyValidationMessage(
  { componentName }: Readonly<{ componentName: string; }>
): string {
  return `Must be the one among values of \`${ componentName }.DecorativeVariations\` associative array including the ` +
    `ones defined via \`${ componentName }.defineDecorativeVariations()\`.`;
}
